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

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'API Working' })
})

// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// error handler (must be last)
app.use(errorMiddleware)

async function start() {
  validateEnv()
  await connectDB()
  await connectCloudinary()
  app.listen(port)
}

start().catch((err) => {
  process.exit(1)
})
