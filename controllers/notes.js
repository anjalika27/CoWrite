import NoteDB from '../models/notes.js'
import { v4 as uuid } from 'uuid'

export async function allNotes(req, res) {

    try {
        const { id, name } = req.user;
        const notes = await NoteDB.find({ authorId: id })
        return res.status(200).render('allNotes.ejs', { username: name, notes, userId: 123 })

    } catch (error) {
        console.log(error);
        return res.status(404).send(error)

    }
}

export async function addNote(req, res) {
    const { id } = req.user;
    console.log(id, 'userid');

    const noteId = uuid();
    const { title, content } = req.body
    console.log(req.body, 'body ');

    console.log(title, 'title');
    console.log(content, 'content');

    return res.status(201).redirect('/notes');
}

export async function updateNote(req, res) {

}