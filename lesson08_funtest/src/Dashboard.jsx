// src/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function Dashboard() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const querySnapshot = await getDocs(collection(db, "records"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRecords(data);
  };

  const deleteRecord = async (id) => {
    await deleteDoc(doc(db, "records", id));
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="dashboard">
      <h3>전체 퀴즈 기록</h3>
      <ul>
        {records.map((r) => (
          <li key={r.id}>
            {r.timestamp} - 점수: {r.score}점
            <button onClick={() => deleteRecord(r.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
