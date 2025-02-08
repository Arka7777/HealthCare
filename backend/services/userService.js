import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const editUser = async (req, res) => {
    try {
        console.log(req.body)

        const { id } = req.params
        const { name, email, password, gender, age, address, } = req.body

        const saltRounds = 11
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPass = await bcrypt.hash(String(password), salt)

        // console.log(hashedPass)

        console.log("Reached 2")
        const update = await new User({
            _id: id,
            name,
            email,
            password: hashedPass,
            gender,
            age,
            address,
        })
        console.log("Reached 3")
        let updatedUser
        try {
            updatedUser = await User.findOneAndUpdate({ _id: id }, update, { new: true })

        } catch (error) {
            console.log("updating time error :", error)
            return res.status(501).send("update a problem hocche")
        }
        console.log("Reached 4")
        console.log(updatedUser)
        return res.status(200).json({
            data:updatedUser
        })



    } catch (error) {

    }
}