import { quizData1 } from "./quizData1"; // React 기초
import { quizData2 } from "./quizData2"; // Java 기초 문법
import { quizData3 } from "./quizData3"; // Java 클래스 및 static
import { quizData4 } from "./quizData4"; // Java 배열과 예외 처리
import { quizData5 } from "./quizData5"; // Java 상속과 다형성
import { quizData6 } from "./quizData6"; // 자바 추상 클래스와 인터페이스

export const extendedJavaQuizzes = [
  ...quizData1.map(q => ({ ...q, title: "React 기초" })),
  ...quizData2.map(q => ({ ...q, title: "Java 기초 문법" })),
  ...quizData3.map(q => ({ ...q, title: "Java 클래스 및 static" })),
  ...quizData4.map(q => ({ ...q, title: "Java 배열과 예외 처리" })),
  ...quizData5.map(q => ({ ...q, title: "Java 상속과 다형성" })),
  ...quizData6.map(q => ({ ...q, title: "자바 추상 클래스와 인터페이스" })),
];