import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './services/db.js'
configDotenv()

const app = express()

app.use('/auth', authRoutes)

const PORT = process.env.PORT;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.log(err, 'error connecting');
})
