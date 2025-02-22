import NoteDB from '../models/notes.js'



export async function addNote(req, res) {
    const { userId } = req.params;
    const { title, content } = req.body;
    console.log(userId, title, content);

} 