// src/Signup.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pw);
      alert("회원가입 성공!");
      navigate("/login");
    } catch (err) {
      alert("회원가입 실패: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>회원가입</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" required />
      <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="비밀번호" required />
      <button type="submit">가입하기</button>
    </form>
  );
}
