// ✅ React 기본 모듈 불러오기 (StrictMode 사용 가능하게 함)
import React from 'react'

// ✅ React 18 기준 ReactDOM의 createRoot 사용
import ReactDOM from 'react-dom/client'

// ✅ 전역 스타일 적용
import './index.css'

// import App from './App_V1'

import {EffectAndRef, FocusInput, PreviousValue} from './RefHookTest'

// ✅ 사용할 메인 컴포넌트 선택 (App or App_V1 등)
// import App from './App'         // 최종 앱 컴포넌트
// import App from './App_V1'   // 다른 버전 테스트 시 사용
// import { FocusInput } from './RefHookTest'  // Ref 테스트용 컴포넌트
// import App from "./ArrayTest";  // 배열 테스트용 컴포넌트

// ✅ 앱 렌더링 (React 18 방식)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>            {/* 개발 중 부적절한 사용 탐지 */}
    {/* <App />                     메인 앱 컴포넌트 */}
    {/* <FocusInput /> */}       {/* 필요 시 주석 해제 후 위 import도 해제 */}
    <EffectAndRef/>
    <PreviousValue/>
  </React.StrictMode>
)
