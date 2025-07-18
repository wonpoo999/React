// src/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pw);
      setUser(userCredential.user);
      alert("로그인 성공!");
      navigate("/quiz");
    } catch (err) {
      alert("로그인 실패: " + err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>로그인</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" required />
      <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="비밀번호" required />
      <button type="submit">로그인</button>
    </form>
  );
}
