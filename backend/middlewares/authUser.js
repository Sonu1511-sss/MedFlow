import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // ✅ Fix: Ensure req.body is defined before assigning to it
        if (!req.body) req.body = {}

        req.body.userId = token_decode.id
        next()
    } catch (error) {
        const err = new Error('Invalid or expired token')
        err.statusCode = 401
        next(err)
    }
}

export default authUser
