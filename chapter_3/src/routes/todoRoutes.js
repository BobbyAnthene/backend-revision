import express from 'express'
import db from '../db.js'

const router = express.Router()

//Fetch all the to-dps
router.get('/', (req, res) => {

})
//Add a To-do
router.post('/', (req, res) => {

})
//Update a To-do
router.put('/:id', (req,res) => {

})
//Delete a To-do
router.delete('/:id', (req,res) => {

})

export default router