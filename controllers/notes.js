import NoteDB from '../models/notes.js'

export async function allNotes(req, res) {

    // try {
    //     const { id, name } = req.user;
    //     console.log(id, name)
    //     const notes = await NoteDB.find({ authorId: id })
    //     console.log(notes, 'notes');
    //     return res.status(200).render('allNotes.ejs', { username: name, notes, userId: 123 })

    // } catch (error) {
    //     console.log(error);
    //     return res.status(404).send(error)

    // }
    console.log('hellooooooo');

}

export async function addNote(req, res) {
    const { userId } = req.params;
    const { title, content } = req.body;
    console.log(userId, title, content);
} 