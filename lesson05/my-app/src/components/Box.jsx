import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Box() {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ w: 150, h: 150 });
  const [speed, setSpeed] = useState(4);
  const [color, setColor] = useState("#4A90E2");
  const [fHeld, setFHeld] = useState(false);
  const [vMode, setVMode] = useState(false);

  const keys = useRef({});
  const parent = useRef(null);
  const anim = useRef(null);

  // 랜덤 색상 생성
  const getRandomColor = useCallback(() => {
    return (
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }, []);

  // 키다운 이벤트 핸들러
  useEffect(() => {
    const down = (e) => {
      const k = e.key.toLowerCase();
      if (!keys.current[k]) {
        keys.current[k] = true;
        if (k === "f") setFHeld(true);
        if (k === "v") setVMode((m) => !m);
        if (k === "q") setSpeed((s) => Math.max(1, s - 1));
        if (k === "e") setSpeed((s) => Math.min(20, s + 1));
      }
    };

    // 키업 이벤트 핸들러
    const up = (e) => {
      const k = e.key.toLowerCase();
      keys.current[k] = false;
      if (k === "f") setFHeld(false);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // 애니메이션 루프 - 움직임, 크기 변경, 색상 변경 처리
  const frameLoop = useCallback(() => {
    if (!parent.current) {
      anim.current = requestAnimationFrame(frameLoop);
      return;
    }

    const pw = parent.current.clientWidth;
    const ph = parent.current.clientHeight;
    const bottomPadding = 0;

    let dx = 0,
      dy = 0,
      dw = 0,
      dh = 0;
    if (keys.current["w"]) dy -= speed;
    if (keys.current["s"]) dy += speed;
    if (keys.current["a"]) dx -= speed;
    if (keys.current["d"]) dx += speed;

    if (keys.current["arrowup"]) dh -= speed;
    if (keys.current["arrowdown"]) dh += speed;
    if (keys.current["arrowleft"]) dw -= speed;
    if (keys.current["arrowright"]) dw += speed;

    setPos((prev) => {
      const nx = Math.min(Math.max(prev.x + dx, 0), pw - size.w);
      const ny = Math.min(Math.max(prev.y + dy, 0), ph - size.h - bottomPadding);
      return { x: nx, y: ny };
    });

    setSize((prev) => {
      const nw = Math.min(Math.max(prev.w + dw, 30), pw - pos.x);
      const nh = Math.min(Math.max(prev.h + dh, 30), ph - pos.y - bottomPadding);
      return { w: nw, h: nh };
    });

    if (fHeld || vMode) {
      setColor(getRandomColor());
    }

    anim.current = requestAnimationFrame(frameLoop);
  }, [fHeld, vMode, getRandomColor, pos.x, pos.y, size.w, size.h, speed]);

  useEffect(() => {
    anim.current = requestAnimationFrame(frameLoop);
    return () => cancelAnimationFrame(anim.current);
  }, [frameLoop]);

  // 버튼 스타일 (인라인)
  const btnStyle = {
    width: 60,
    height: 60,
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    backgroundColor: "#1E90FF",
    color: "white",
    userSelect: "none",
    outline: "none",
    margin: "0 5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // 박스 크기 조절 함수
  const resizeClick = (dir) => {
    if (!parent.current) return;
    const pw = parent.current.clientWidth;
    const ph = parent.current.clientHeight;
    const bp = 0;

    setSize((p) => {
      let { w, h } = p;
      if (dir === "up") h = Math.max(h - 10, 30);
      if (dir === "down") h = Math.min(h + 10, ph - pos.y - bp);
      if (dir === "left") w = Math.max(w - 10, 30);
      if (dir === "right") w = Math.min(w + 10, pw - pos.x);
      return { w, h };
    });
  };

  // W, A, S, D 버튼 클릭 시 키 누른 효과와 동작 처리
  const handleKeyDownForButton = (key) => {
    if (!keys.current[key]) {
      keys.current[key] = true;
      if (key === "f") setFHeld(true);
    }
  };

  const handleKeyUpForButton = (key) => {
    keys.current[key] = false;
    if (key === "f") setFHeld(false);
  };

  // F 버튼 클릭시 한번만 색깔 변경
  const handleFClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
      {/* 헤더 */}
      <div
        style={{
          height: 80,
          backgroundColor: "#2c3e50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ecf0f1",
          fontSize: 28,
          fontWeight: "bold",
          letterSpacing: 1,
        }}
      >
        🎮 움직이는 박스 컨트롤러
      </div>

      {/* 버튼 컨트롤 패널 */}
      <div
        style={{
          minHeight: 100,
          backgroundColor: "#ecf0f1",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 10,
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* 이동 버튼 */}
        <button
          style={btnStyle}
          onMouseDown={() => handleKeyDownForButton("w")}
          onMouseUp={() => handleKeyUpForButton("w")}
          onMouseLeave={() => handleKeyUpForButton("w")}
          title="위로 이동 (W)"
        >
          W
        </button>
        <button
          style={btnStyle}
          onMouseDown={() => handleKeyDownForButton("a")}
          onMouseUp={() => handleKeyUpForButton("a")}
          onMouseLeave={() => handleKeyUpForButton("a")}
          title="왼쪽 이동 (A)"
        >
          A
        </button>
        <button
          style={btnStyle}
          onMouseDown={() => handleKeyDownForButton("s")}
          onMouseUp={() => handleKeyUpForButton("s")}
          onMouseLeave={() => handleKeyUpForButton("s")}
          title="아래로 이동 (S)"
        >
          S
        </button>
        <button
          style={btnStyle}
          onMouseDown={() => handleKeyDownForButton("d")}
          onMouseUp={() => handleKeyUpForButton("d")}
          onMouseLeave={() => handleKeyUpForButton("d")}
          title="오른쪽 이동 (D)"
        >
          D
        </button>

        {/* 크기 조절 버튼 */}
        <button
          style={btnStyle}
          onClick={() => resizeClick("up")}
          title="높이 감소 (↑)"
        >
          ↑
        </button>
        <button
          style={btnStyle}
          onClick={() => resizeClick("right")}
          title="너비 증가 (→)"
        >
          →
        </button>
        <button
          style={btnStyle}
          onClick={() => resizeClick("down")}
          title="높이 증가 (↓)"
        >
          ↓
        </button>
        <button
          style={btnStyle}
          onClick={() => resizeClick("left")}
          title="너비 감소 (←)"
        >
          ←
        </button>

        {/* 속도 조절 버튼 */}
        <button
          style={btnStyle}
          onClick={() => setSpeed((s) => Math.max(s - 1, 1))}
          title="속도 감소 (Q)"
        >
          Q
        </button>
        <button
          style={btnStyle}
          onClick={() => setSpeed((s) => Math.min(s + 1, 20))}
          title="속도 증가 (E)"
        >
          E
        </button>

        {/* F 버튼 - 클릭 시 한번만 색 변경, 누르고 있으면 계속 변경 */}
        <button
          style={btnStyle}
          onClick={handleFClick}
          onMouseDown={() => handleKeyDownForButton("f")}
          onMouseUp={() => handleKeyUpForButton("f")}
          onMouseLeave={() => handleKeyUpForButton("f")}
          title="색 연속 변경 (F)"
        >
          F
        </button>

        {/* V 버튼 - 자동 색상 변경 토글 */}
        <button
          style={btnStyle}
          onClick={() => setVMode((m) => !m)}
          title="자동 색상 변경 (V)"
        >
          V
        </button>
      </div>

      {/* 박스 표시 영역 */}
      <div
        ref={parent}
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 180px)",
          backgroundColor: "#fffefa",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: size.w,
            height: size.h,
            backgroundColor: color,
            borderRadius: 8,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            userSelect: "none",
          }}
        />
      </div>

      {/* 하단 정보 */}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: 10,
          fontSize: 14,
          color: "#444",
          userSelect: "none",
        }}
      >
        속도: {speed} | WASD: 이동 | 방향키: 크기 조절 | F: 색 연속 | V: 자동 색상{" "}
        {vMode ? "(ON)" : "(OFF)"}
      </div>
    </div>
  );
}
