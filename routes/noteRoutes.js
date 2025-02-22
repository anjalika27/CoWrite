import express from "express";
import { addNote, allNotes, updateNote } from "../controllers/notes.js";

const router = express.Router()

router.get('', allNotes);
router.get('/addNote', (req, res) => res.render('noteEditor.ejs', { noteId: 0 }));
router.post('/add', addNote);
router.put('/update/:noteId', updateNote);

export default router;