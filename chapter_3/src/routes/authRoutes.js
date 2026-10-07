import express from 'express'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register', (req, res) => {
    const {username, password} = req.body
    console.log('User has been Registered')
    res.sendStatus(200)
})

router.post('/login', (req,res) => {
    const {username, password} = req.body
    console.log('User has been Logged in')
    res.sendStatus(200)
})


export default router