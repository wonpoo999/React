import React from "react";
import TwiceUL, { BtsUL } from "./TestUL";
// export default 가 아닌 것은 표현식 기호 {함수이름} 형태로 import

// 컴포넌트는 함수로 정의합니다. (함수형 컴포넌트)
//DAY 1_03: TestUL. jsx의 컴포넌트 2개를 화면에 출력하기 위한 부모컴포턴넌트
//                  ㄴ index.js에서 App 컴포넌트를 동작한다
//파일명과 함수이름이 동일할 필요는 없다
export default function App() {
  return (
    <div>
      App2
      <TwiceUL />
      <BtsUL />
    </div>
  );
}
// 컴포넌트는 함수로 정의합니다.(함수형 컴포넌트)
// 파일명과 함수이름이 동일할 필요 없습니다.