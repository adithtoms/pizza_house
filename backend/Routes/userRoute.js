import express from 'express'
import User from '../MongoDB/userModel.js'

const router = express.Router()

router.post('/register', async (req, res) => {

    const { uname, email, password } = req.body

    const newUser = new User({ uname, email, password })

    try {
        newUser.save()
        res.send("User Registered Successfully")
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.find({ email, password })

        if (user.length > 0) {
            const currentUser = {
                uname: user[0].uname,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.status(200).send(currentUser)
        } else {
            return res.status(400).json({ message: "something went wrong" })
        }
    } catch (error) {
        return res.status(400).json({ message: "something went wrong" })

    }
})
export default router

