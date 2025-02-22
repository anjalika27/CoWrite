import express from "express"
import { registerUser,loginUser } from '../controllers/auth.js'

const router = express.Router();

router.get('/register', (req, res) => res.render('signup.ejs'));
router.post('/register', registerUser);

router.get('/login', (req, res) => res.render('login.ejs'));
router.post('/login', loginUser);

export default router