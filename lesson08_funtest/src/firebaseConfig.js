// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase 콘솔에서 발급받은 설정값 사용
const firebaseConfig = {
  apiKey: "AIzaSyDxxxxxx_REAL_KEY", // ✅ 본인의 Firebase 프로젝트에서 복사해온 키
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};


const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);

