import JWT from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

function createToken(user) {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    const token = JWT.sign(payload, process.env.SECRET_KEY_FOR_AUTHENTICATION, { expiresIn: '1h' })
    return token
}

function validateToken(token) {
    const payload = JWT.verify(token, process.env.SECRET_KEY_FOR_AUTHENTICATION)
    return payload
}

export { createToken, validateToken }