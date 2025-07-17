import React, { useState, useEffect, useRef, useCallback } from "react";
import { extendedJavaQuizzes as programmingQuiz } from "./quizData"; // 문제 데이터 import, 전체 퀴즈 배열을 programmingQuiz라는 이름으로 사용

const TIME_LIMIT = 30; // 각 문제당 제한 시간(초)

// 보기 배열을 무작위로 섞는 함수
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5); // 배열 복사 후 무작위 정렬
}

// 퀴즈 데이터의 보기 순서를 섞고 정답 인덱스를 재계산하는 함수
function prepareShuffledQuizData(data) {
  return data.map((q) => {
    const correctValue = q.options[q.answer]; // 기존 정답 값 저장
    const shuffled = shuffleArray(q.options); // 보기 섞기
    const newAnswer = shuffled.indexOf(correctValue); // 섞은 보기에서 정답 위치 찾기
    return { ...q, options: shuffled, answer: newAnswer }; // 새로운 구조로 반환
  });
}

function Quiz() {
  // 퀴즈 상태 정의들
  const [quizData, setQuizData] = useState([]); // 현재 보여줄 문제들
  const [hasStarted, setHasStarted] = useState(false); // 퀴즈 시작 여부
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 인덱스
  const [selected, setSelected] = useState(null); // 선택된 보기 인덱스
  const [showAnswer, setShowAnswer] = useState(false); // 정답 보여줄지 여부
  const [score, setScore] = useState(0); // 총 정답 수
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT); // 남은 시간
  const [quizEndTime, setQuizEndTime] = useState(null); // 퀴즈 종료 시간
  const [message, setMessage] = useState(""); // 정답/오답 메시지
  const [gifSrc, setGifSrc] = useState(""); // 메시지와 함께 표시할 gif
  const [showTryAgainBtn, setShowTryAgainBtn] = useState(false); // 재도전 버튼 표시 여부
  const [showNextBtn, setShowNextBtn] = useState(false); // 다음 문제 버튼 표시 여부
  const [canRetry, setCanRetry] = useState(false); // 재시도 가능 여부
  const [answerHistory, setAnswerHistory] = useState([]); // 각 문제의 시도 이력 저장
  const quizStartTime = useRef(Date.now()); // 퀴즈 시작 시간 저장 (ref 사용)
  const timerId = useRef(null); // 타이머 ID 저장용 ref

  const current = quizData[currentIndex]; // 현재 문제 객체
  const allDone = quizEndTime !== null; // 퀴즈 완료 여부
  const allCorrect = allDone && score === quizData.length; // 전부 정답 여부
  const allWrong = allDone && score === 0; // 전부 오답 여부

  const allTitles = [ // 퀴즈 유형 필터 버튼 목록
    "전체",
    "React 기초",
    "Java 기초 문법",
    "Java 클래스 및 static",
    "Java 배열과 예외 처리",
    "Java 상속과 다형성",
  ];

  // 시간 초과 시 호출되는 함수
  const handleTimeout = useCallback(() => {
    if (!quizData.length) return;
    const { isCorrect, tries } = answerHistory[currentIndex];
    if (isCorrect) return;

    if (tries === 0) {
      // 첫 시도 시간 초과
      setMessage("⏰ 시간 초과! 다시 시도해보세요.");
      setGifSrc("/images/try-again.gif");
      setShowTryAgainBtn(true);
      setCanRetry(false);
      updateAnswerHistory(currentIndex, false, tries + 1, selected);
    } else {
      // 두 번째도 실패
      setMessage("❌ 오답입니다! 다음 문제로 넘어가세요.");
      setGifSrc("/images/wrong.gif");
      setShowAnswer(true);
      setShowNextBtn(true);
      setShowTryAgainBtn(false);
      setCanRetry(false);
      updateAnswerHistory(currentIndex, false, tries + 1, selected);
    }
  }, [answerHistory, currentIndex, quizData.length, selected]);

  // 문제 바뀔 때마다 타이머 설정
  useEffect(() => {
    if (!quizData.length || quizEndTime) return;

    const tries = answerHistory[currentIndex]?.tries || 0;
    const isCorrect = answerHistory[currentIndex]?.isCorrect || false;

    if (isCorrect || tries >= 2) {
      clearInterval(timerId.current);
      setTimeLeft(0);
      return;
    }

    setTimeLeft(TIME_LIMIT);
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerId.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId.current);
  }, [currentIndex, quizEndTime, answerHistory, handleTimeout, quizData]);

  // 보기 선택 핸들러
  const handleSelect = (idx) => {
    if (!quizData.length) return;
    const tries = answerHistory[currentIndex].tries;
    if (
      showAnswer ||
      answerHistory[currentIndex].isCorrect ||
      tries >= 2 ||
      timeLeft === 0 ||
      (tries === 1 && !canRetry)
    )
      return;

    setCanRetry(false);
    setSelected(idx);

    if (idx === current.answer) {
      // 정답
      setShowAnswer(true);
      setMessage("✅ 정답입니다!");
      setGifSrc("/images/correct.gif");
      setShowTryAgainBtn(false);
      setShowNextBtn(true);
      updateAnswerHistory(currentIndex, true, tries + 1, idx);
    } else {
      // 오답
      if (tries === 0) {
        setMessage("❌ 오답입니다! 다시 시도해보세요.");
        setGifSrc("/images/try-again.gif");
        setShowTryAgainBtn(true);
        setShowAnswer(false);
        setCanRetry(false);
        updateAnswerHistory(currentIndex, false, tries + 1, idx);
      } else {
        setMessage("❌ 오답입니다! 다음 문제로 넘어가세요.");
        setGifSrc("/images/wrong.gif");
        setShowAnswer(true);
        setShowNextBtn(true);
        setShowTryAgainBtn(false);
        updateAnswerHistory(currentIndex, false, tries + 1, idx);
      }
    }
  };

  // 문제 정답 기록 갱신 함수
  const updateAnswerHistory = (idx, isCorrect, tries, selectedIdx) => {
    setAnswerHistory((prev) => {
      const newHistory = [...prev];
      newHistory[idx] = { tries, isCorrect, selected: selectedIdx };
      return newHistory;
    });
    if (isCorrect) setScore((prev) => prev + 1);
  };

  // 다시 시도 버튼 클릭 시 초기화
  const handleTryAgain = () => {
    setSelected(null);
    setShowAnswer(false);
    setMessage("");
    setGifSrc("");
    setShowTryAgainBtn(false);
    setShowNextBtn(false);
    setCanRetry(true);
    setTimeLeft(TIME_LIMIT);
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerId.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 다음 문제 시 상태 초기화
  const resetState = (index) => {
    const prev = answerHistory[index];
    setSelected(prev.selected);
    setShowAnswer(prev.tries >= 2 || prev.isCorrect);
    setMessage("");
    setGifSrc("");
    setShowTryAgainBtn(prev.tries === 1 && !prev.isCorrect);
    setShowNextBtn(prev.tries >= 2 || prev.isCorrect);
    setCanRetry(false);
    setTimeLeft(TIME_LIMIT);
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerId.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 다음 문제로 이동
  const goNext = () => {
    if (currentIndex < quizData.length - 1) {
      clearInterval(timerId.current);
      const next = currentIndex + 1;
      setCurrentIndex(next);
      resetState(next);
    } else {
      clearInterval(timerId.current);
      setQuizEndTime(Date.now());
    }
  };

  // 퀴즈 초기화 후 재시작
  const handleRestart = () => {
    setHasStarted(false);
    setQuizData([]);
    setCurrentIndex(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswerHistory([]);
    setTimeLeft(TIME_LIMIT);
    setMessage("");
    setGifSrc("");
    setShowTryAgainBtn(false);
    setShowNextBtn(false);
    setCanRetry(false);
    setQuizEndTime(null);
    quizStartTime.current = Date.now();
  };

  // 유형별 문제 필터링
  const handleFilterByTitle = (title) => {
    const filtered =
      title === "전체"
        ? programmingQuiz
        : programmingQuiz.filter((q) => q.title === title);

    const shuffled = shuffleArray(prepareShuffledQuizData(filtered));

    setQuizData(shuffled);
    setCurrentIndex(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswerHistory(
      shuffled.map(() => ({ tries: 0, isCorrect: false, selected: null }))
    );
    setTimeLeft(TIME_LIMIT);
    setMessage("");
    setGifSrc("");
    setShowTryAgainBtn(false);
    setShowNextBtn(false);
    setCanRetry(false);
    setQuizEndTime(null);
    quizStartTime.current = Date.now();
    setHasStarted(true);
  };

  return (
    <div className="quiz">
      {/* 필터 버튼 */}
      <div className="mode-select">
        {allTitles.map((title) => (
          <button key={title} onClick={() => handleFilterByTitle(title)}>
            {title}
          </button>
        ))}
      </div>

      {/* 필터 버튼 클릭 전 안내 */}
      {!hasStarted && <p className="info">원하는 유형의 문제 버튼을 눌러 시작하세요.</p>}

      {/* 문제 영역 */}
      {hasStarted && quizData.length > 0 && !allDone && (
        <>
          <h3 className="quiz-progress">
            Quiz {currentIndex + 1} / {quizData.length} | 남은 시간: {timeLeft}s
          </h3>
          <h2 style={{ whiteSpace: "pre-wrap" }}>{current.question}</h2>
          <ul>
            {current.options.map((option, idx) => {
              const isCorrect = showAnswer && idx === current.answer;
              const isWrong = showAnswer && selected === idx && selected !== current.answer;
              const tries = answerHistory[currentIndex].tries;
              const disabled =
                tries >= 2 ||
                answerHistory[currentIndex].isCorrect ||
                (tries === 1 && !canRetry) ||
                timeLeft === 0;

              return (
                <li
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`option ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""} ${
                    disabled ? "disabled" : ""
                  }`}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {/* 정답/오답 메시지 */}
      {(message || gifSrc) && !allDone && (
        <div className="feedback">
          <p>{message}</p>
          {gifSrc && <img src={gifSrc} alt="result gif" className="result-gif" />}
        </div>
      )}

      {/* 다시 시도 버튼 */}
      {answerHistory[currentIndex]?.tries === 1 &&
        showTryAgainBtn &&
        !allDone &&
        hasStarted && (
          <button onClick={handleTryAgain} className="try-again-btn">
            다시 시도
          </button>
        )}

      {/* 다음 or 결과 보기 버튼 */}
      {showNextBtn && !allDone && hasStarted && (
        currentIndex < quizData.length - 1 ? (
          <button onClick={goNext} className="next-btn">다음 문제로</button>
        ) : (
          <button onClick={() => setQuizEndTime(Date.now())} className="finish-btn">
            결과 보기
          </button>
        )
      )}

      {/* 결과 화면 */}
      {allDone && (
        <div className="result">
          <h2>퀴즈 종료!</h2>
          <p>정답 개수: {score} / {quizData.length}</p>
          <p>소요 시간: {Math.floor((quizEndTime - quizStartTime.current) / 1000)}초</p>

          {allCorrect && (
            <>
              <img src="/images/congrats.gif" alt="축하" width="300" />
              <p>전부 정답입니다! 🎉</p>
            </>
          )}
          {allWrong && (
            <>
              <img src="/images/the-end.gif" alt="끝" width="300" />
              <p>전부 오답입니다. 😢</p>
            </>
          )}
          {!allCorrect && !allWrong && (
            <>
              <img src="/images/gameover.gif" alt="결과" width="300" />
              <p>수고하셨습니다.</p>
            </>
          )}

          <button onClick={handleRestart} className="retry-btn">
            처음부터 다시 시작
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
