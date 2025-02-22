import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './services/db.js'
import authRoutes from './routes/authRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import path from 'path'
configDotenv()

const app = express()

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }))


app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', [authRoutes, noteRoutes])



connectDB(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`***** Server running on http://localhost:${PORT} *****`)
    })
}).catch((err) => {
    console.log(err, 'error connecting');
})
