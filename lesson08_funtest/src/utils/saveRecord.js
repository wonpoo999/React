// src/utils/saveRecord.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// user 없이 기록 저장
export const saveRecord = async (score) => {
  try {
    await addDoc(collection(db, "records"), {
      score,
      timestamp: new Date().toLocaleString(),
    });
  } catch (error) {
    console.error("기록 저장 실패:", error);
  }
};
