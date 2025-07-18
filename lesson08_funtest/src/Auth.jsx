// src/Auth.jsx
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => onLogin(user.user))
      .catch(err => alert("회원가입 실패: " + err.message));
  };

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => onLogin(user.user))
      .catch(err => alert("로그인 실패: " + err.message));
  };

  return (
    <div>
      <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={signUp}>회원가입</button>
      <button onClick={logIn}>로그인</button>
    </div>
  );
}
