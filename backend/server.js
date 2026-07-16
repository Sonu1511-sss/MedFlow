import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import validateEnv from './config/validateEnv.js'

import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

import errorMiddleware from './middlewares/errorMiddleware.js'

const app = express()
const port = process.env.PORT || 4000

// ---------------- Middleware ----------------

app.use(express.json())

const allowedOrigins = [
  'http://localhost:5173',
  'https://med-flow-lac-five.vercel.app',
]

app.use(
  cors({
    origin: (origin, callback) => {
      console.log('Origin:', origin)

      // Allow Postman/server requests
      if (!origin) return callback(null, true)

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

// ---------------- Default Route ----------------

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API Working',
  })
})

// ---------------- API Routes ----------------

app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// ---------------- 404 ----------------

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

// ---------------- Error Handler ----------------

app.use(errorMiddleware)

// ---------------- Server ----------------

async function start() {
  validateEnv()
  await connectDB()
  await connectCloudinary()

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

start().catch((err) => {
  console.error(err)
  process.exit(1)
})