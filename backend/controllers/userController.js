const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


// User Creation
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ msg: "User already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10) //10 is saltrounds
        const newUser = await new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ msg: "User Created Successfully", data: newUser })
    } catch (error) {
        res.status(500).json({ msg: "Signup Failed", error })
    }
};


// User Login
const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: "User not registered, Please register" })
        }

        // Checking the user input and signup password is same or not
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(404).json({ msg: "Invalid Credentials" })
        }

        // json webtoken generating
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ msg: "Login Successfully", token: token ,success:true })
        console.log(userData)
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error })
    }

};

// Forgot Password
const forgotPassword = async (req, res) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ msg: "User not Found" })
        }

        const resetToken = crypto.randomBytes(32).toString("hex")
        user.resetToken = resetToken
        user.resetTokenExpiry = Date.now() + 3600000
        await user.save()

        res.status(200).json({ msg: "Reset token generated", resetToken })
    } catch (error) {
        res.status(500).json({ msg: "Error generating Reset Token", error: error.msg })
    }
};

// Reset Password
const resetPassword = async (req, res) => {
    try {
        const { token, newPassword, name } = req.body

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        })

        if (!user) {
            return res.status(400).json({ msg: "Invalid or expired token" })
        }

        user.password = await bcrypt.hash(newPassword, 10)
        user.resetToken = undefined
        user.resetTokenExpiry = undefined
        await user.save()

        res.status(200).json({ msg: "Password Reset Successful" })

        // Checking the new password and the old password same or not
        const isSame = await bcrypt.compare(newPassword, user.password)
        if (isSame) {
            res.status(400).json({ msg: "New password should not same as the old password" })
        }

    } catch (error) {
        res.status(500).json({ msg: "Error Resetting Password", error: error.msg })
    }
};

// Update the User Details
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (!updateData) {
            res.status(404).json({ msg: "User Not Found" })
        }
        res.status(200).json({ msg: "User details updated successfully", updatedata: updateData })
    } catch (error) {
        res.status(500).json({ msg: "User Updation Failed", error })
    }
}

// Delete User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleteData = await User.findByIdAndDelete(id, req.body, { new: true })
        if (!deleteData) {
            res.status(404).json({ msg: "User Not Found" })
        }
        res.status(200).json({ msg: "User Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ msg: "User Deletion failed", error })
    }
}


module.exports = { registerUser, userLogin, forgotPassword, resetPassword, updateUser, deleteUser }