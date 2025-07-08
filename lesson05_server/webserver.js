import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/";
const DB_NAME = "react01";
const COL = "lesson05_box";

app.use(cors());
app.use(express.json());

let db;
MongoClient.connect(MONGO_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log("🟢 MongoDB connected");
  })
  .catch((err) => console.error("🔴 MongoDB connection error:", err));

app.get("/api/box", async (_, res) => {
  try {
    const data =
      (await db.collection(COL).findOne({ id: 1 })) ||
      (await db.collection(COL).insertOne({
        id: 1,
        x: 0,
        y: 0,
        width: 150,
        height: 150,
      })).ops?.[0];
    res.json(data);
  } catch {
    res.status(500).json({ error: "DB 조회 실패" });
  }
});

app.put("/api/box", async (req, res) => {
  try {
    const { x, y, width, height } = req.body;
    await db
      .collection(COL)
      .updateOne({ id: 1 }, { $set: { x, y, width, height } }, { upsert: true });
    res.json({ message: "업데이트 성공" });
  } catch {
    res.status(500).json({ error: "DB 업데이트 실패" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server listening on ${PORT}`));
