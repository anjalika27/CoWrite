import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './services/db.js'
import authRoutes from './routes/authRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import { checkAuthentication } from './middleware/auth.js'
configDotenv()

const app = express()

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }))
app.use(cookieParser())


app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use((req, res, next) => {
    const publicRoutes = ['/login', '/register'];
    if (publicRoutes.includes(req.path)) {
        return next();
    }
    checkAuthentication(req, res, next);
})


app.use('/', authRoutes)
app.use('/notes', noteRoutes)

connectDB(DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`***** Server running on http://localhost:${PORT} *****`)
    })
}).catch((err) => {
    console.log(err, 'error connecting');
})
