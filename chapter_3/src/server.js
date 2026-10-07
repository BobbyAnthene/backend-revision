import express from 'express'
import path from 'path'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express();
const PORT = process.env.PORT || 8000;

//middlewar for JSON
app.use(express.json())

//middleware for the App to load website on ./ route
app.use(express.static(path.join(import.meta.dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join( import.meta.dirname, 'public', 'index.html'))
})

//Routes
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT, () => console.log(`The server is running on: ${PORT}`));