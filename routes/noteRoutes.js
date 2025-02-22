import express from "express";
import { addNote } from "../controllers/notes.js";

const router = express.Router()

router.get('/addNote/:userId', (req, res) => res.render('noteEditor.ejs'));
router.post('/addNote/:userId',addNote);

export default router;