import UserDB from '../models/user.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { createToken } from '../services/auth.js'

export async function registerUser(req, res) {

    const { username, email, password } = req.body

    if (!username || !email || !password) return res.status(400).send('<h1 style="text-align: center;" class="mt-4">Missing Params</h1>')

    try {
        const userAlreadyExits = await UserDB.findOne({ 'email': email })

        if (userAlreadyExits) return res.status(200).redirect('/login')

        const hashedPassword = await bcrypt.hash(password, 5)

        const newUser = await UserDB.create({ id: uuid(), username, email, password: hashedPassword, name: username })

        const token = createToken(newUser)
        console.log(token);
        return res.status(200).cookie('token', token).redirect('/notes');
    } catch (error) {
        console.log(error);

        return res.status(500).send(`<h1 style="text-align: center;" class="mt-4">${error.message}</h1>`)
    }
}


export async function loginUser(req, res) {

    const { email, password } = req.body

    if (!email || !password) return res.status(400).send('<h1 style="text-align: center;" class="mt-4">Missing Params</h1>')

    try {

        const user = await UserDB.findOne({ 'email': email })
        if (!user) return res.redirect('/register')


        const isMatched = await bcrypt.compare(password, user.password)

        if (isMatched) {
            const token = createToken(user)

            return res.cookie('token', token).redirect('/notes')
        }

        return res.status(200).send('<h1 style="text-align: center;" class="mt-4">Not valid credentials</h1>')
    } catch (error) {
        console.log(error);
        return res.status(500).send(`<h1 style="text-align: center; class="mt-4">${error}</h1>`)
    }
}
