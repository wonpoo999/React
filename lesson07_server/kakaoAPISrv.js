import express, { json } from 'express'
import { MongoClient } from 'mongodb'
import cors from 'cors'

const app = express()
const PORT = 5001 // React 앱과 포트 충돌을 피하기 위해 5001번 포트 사용

// 미들웨어 설정
app.use(cors()) // 모든 출처에서의 요청을 허용 (개발 시 편리)
app.use(json()) // JSON 형식의 요청 본문을 파싱

// MongoDB 연결 정보
const MONGODB_URI = 'mongodb://localhost:27017/' // MongoDB가 로컬에서 실행 중인 경우 기본 URI
const DB_NAME = 'react01' // 사용할 데이터베이스 이름
const COLLECTION_NAME = 'schedules' // 사용할 컬렉션 이름

let db // MongoDB 데이터베이스 객체를 저장할 변수

// MongoDB 연결
MongoClient.connect(MONGODB_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log('MongoDB 연결 성공!!!');
  })
  .catch((error) => console.error('MongoDB 연결 실패:', error));

/*
  GET /api/schedules
  모든 스케줄 문서를 가져옵니다.
  예시: curl -X GET http://localhost:5001/api/schedules
*/
app.get("/api/schedules", async (req, resp) => {
  try {
    const docs = await db.collection(COLLECTION_NAME).find({}).toArray();
    resp.status(200).json(docs);
  } catch (error) {
    console.error("MongoDB 오류:", error);
    resp.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/*
  GET /api/schedules/:date
  특정 날짜의 스케줄 문서를 가져옵니다.
  예시: curl -X GET http://localhost:5001/api/schedules/2025-07-09
*/
app.get('/api/schedules/:date', async (req, resp) => {
  try {
    const { date } = req.params;

    // 날짜 형식 검증 (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return resp.status(400).json({
        error: "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
      });
    }

    const doc = await db.collection(COLLECTION_NAME).findOne({ date: date });
    if (!doc) {
      // 해당 날짜의 문서가 없을 경우 404 대신 빈 객체 반환 (프론트엔드에서 처리하기 용이)
      return resp.status(200).json({ date: date, todos: [] });
    }
    resp.status(200).json(doc);
  } catch (error) {
    console.error("MongoDB 오류:", error);
    resp.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/*
  PUT /api/schedules/:date
  특정 날짜의 스케줄에 새 todo 항목을 추가하거나, 해당 날짜의 문서가 없으면 새로 생성합니다.
  예시:
  curl -X PUT http://localhost:5001/api/schedules/2025-07-09 \
    -H "Content-Type: application/json" \
    -d '{ "time": "15:00", "text": "운동", "checked": false }'
*/
app.put("/api/schedules/:date", async (req, res) => {
  try {
    const { date } = req.params; // URL에서 날짜 추출
    const newTodo = req.body; // 요청 본문에서 새 todo 항목 추출

    // 날짜 형식 검증
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        error: "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
      });
    }

    // 새 todo 항목 검증
    if (
      !newTodo.time ||
      !newTodo.text ||
      typeof newTodo.checked !== "boolean"
    ) {
      return res.status(400).json({
        error: "time, text, checked 필드가 모두 필요합니다.",
      });
    }

    const collection = db.collection(COLLECTION_NAME);

    // 해당 날짜의 문서가 존재하는지 확인
    const existingDoc = await collection.findOne({ date: date });

    if (existingDoc) {
      // 문서가 존재하면 todos 배열에 새 항목 추가
      const result = await collection.updateOne(
        { date: date },
        { $push: { todos: newTodo } }
      );

      if (result.matchedCount === 0) {
        return res
          .status(404)
          .json({ error: "해당 날짜의 문서를 찾을 수 없습니다." });
      }

      res.status(200).json({
        message: "새 todo 항목이 추가되었습니다.",
        modifiedCount: result.modifiedCount,
      });
    } else {
      // 문서가 존재하지 않으면 새 문서 생성
      const newDoc = {
        date: date,
        todos: [newTodo],
      };

      const result = await collection.insertOne(newDoc);

      res.status(201).json({
        message: "새 날짜 문서와 todo 항목이 생성되었습니다.",
        insertedId: result.insertedId,
      });
    }
  } catch (error) {
    console.error("MongoDB 오류:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/*
  DELETE /api/schedules/
  요청 본문에 따라 특정 날짜의 특정 todo 항목을 삭제하거나, 특정 날짜의 모든 문서를 삭제합니다.
  예시 (특정 시간 삭제):
  curl -X DELETE http://localhost:5001/api/schedules/ \
    -H "Content-Type: application/json" \
    -d '{ "date": "2025-07-09", "time": "15:00" }'

  예시 (날짜 전체 삭제):
  curl -X DELETE http://localhost:5001/api/schedules/ \
    -H "Content-Type: application/json" \
    -d '{ "date": "2025-07-11" }'
*/
app.delete("/api/schedules/", async (req, res) => {
  try {
    const { date, time } = req.body;

    // 날짜 형식 검증
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        error: "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
      });
    }

    const collection = db.collection(COLLECTION_NAME);

    // time 값이 제공되면 해당 시간의 todo 항목만 삭제
    if (time) {
      // 시간 형식 검증 (HH:MM)
      const timeRegex = /^\d{2}:\d{2}$/;
      if (!timeRegex.test(time)) {
        return res.status(400).json({
          error: "시간 형식이 올바르지 않습니다. HH:MM 형식을 사용해주세요.",
        });
      }

      const result = await collection.updateOne(
        { date: date },
        { $pull: { todos: { time: time } } }
      );

      if (result.matchedCount === 0) {
        return res
          .status(404)
          .json({ error: "해당 날짜의 문서를 찾을 수 없습니다." });
      }

      if (result.modifiedCount === 0) {
        return res
          .status(404)
          .json({ error: "해당 시간의 todo 항목을 찾을 수 없습니다." });
      }

      res.status(200).json({
        message: `${date}의 ${time} 항목이 삭제되었습니다.`,
      });
    } else {
      // time 값이 없으면 해당 날짜의 문서 전체 삭제
      const result = await collection.deleteOne({ date: date });

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ error: "해당 날짜의 문서를 찾을 수 없습니다." });
      }

      return res.status(200).json({
        message: `${date} 날짜의 모든 항목이 삭제되었습니다.`,
      });
    }
  } catch (error) {
    console.error("MongoDB 오류:", error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

/*
  PATCH /api/schedules
  특정 날짜의 특정 todo 항목의 'checked' 상태를 변경합니다.
  예시:
  curl -X PATCH http://localhost:5001/api/schedules \
    -H "Content-Type: application/json" \
    -d '{ "date": "2025-07-09", "time": "14:00", "checked": true }'
*/
app.patch('/api/schedules', async (req, resp) => {
  try {
    const { date, time, checked } = req.body;

    // 날짜 형식 검증
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return resp.status(400).json({
        error: "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식을 사용해주세요.",
      });
    }

    // 시간 형식 검증
    const timeRegex = /^\d{2}:\d{2}$/;
    if (!timeRegex.test(time)) {
      return resp.status(400).json({
        error: "시간 형식이 올바르지 않습니다. HH:MM 형식을 사용해주세요.",
      });
    }

    const collection = db.collection(COLLECTION_NAME);

    const result = await collection.updateOne(
      { date: date, 'todos.time': time }, // 조건: 특정 날짜의 todos 배열 내 특정 시간 항목
      { $set: { 'todos.$.checked': checked } } // $는 조건에 맞는 배열 요소를 의미
    );

    console.log('patch result:', result);

    if (result.matchedCount === 0) {
      return resp.status(404).json({ error: "해당 날짜 또는 시간의 문서를 찾을 수 없습니다." });
    }

    resp.status(200).json({
      message: `${date} ${time} 항목의 checked 상태가 ${checked}로 변경되었습니다.`,
      modifiedCount: result.modifiedCount
    });

  } catch (error) {
    console.error("MongoDB 오류:", error);
    resp.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT} 에서 실행 중 입니다.`);
});
