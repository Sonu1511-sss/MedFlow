const requiredVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD',
  'CLOUDINARY_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_SECRET_KEY',
]

export default function validateEnv() {
  const missing = requiredVars.filter((key) => !process.env[key])

  if (missing.length) {
    const msg = `Missing environment variables: ${missing.join(', ')}`
    const err = new Error(msg)
    err.statusCode = 500
    throw err
  }
}

