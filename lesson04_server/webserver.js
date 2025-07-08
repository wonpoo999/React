import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import cors from 'cors'

const app = express()

// 미들웨어 설정
app.use(cors())
app.use(express.json())

// MongoDB 연결 설정
const url = 'mongodb://localhost:27017'
const dbName = 'scheduleDB'
let schedulesCollection

// MongoDB 클라이언트 연결
const client = new MongoClient(url)

async function startServer() {
  try {
    await client.connect()
    console.log('MongoDB connected')
    const db = client.db(dbName)
    schedulesCollection = db.collection('schedules')

    // 서버 시작
    const PORT = 5000
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('MongoDB connection error:', err)
  }
}

// API 라우팅

// 전체 일정 조회
app.get('/api/schedules', async (req, res) => {
  try {
    const schedules = await schedulesCollection.find().toArray()
    res.json(schedules)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 일정 추가
app.post('/api/schedules', async (req, res) => {
  try {
    const result = await schedulesCollection.insertOne(req.body)
    const newSchedule = await schedulesCollection.findOne({ _id: result.insertedId })
    res.status(201).json(newSchedule)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 일정 수정
app.put('/api/schedules/:id', async (req, res) => {
  try {
    const result = await schedulesCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: 'after' } // 최신 문서 반환
    )
    if (!result.value) {
      return res.status(404).json({ message: 'Schedule not found' })
    }
    res.json(result.value)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 일정 삭제
app.delete('/api/schedules/:id', async (req, res) => {
  try {
    const result = await schedulesCollection.deleteOne({ _id: new ObjectId(req.params.id) })
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Schedule not found' })
    }
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 서버 시작
startServer()
