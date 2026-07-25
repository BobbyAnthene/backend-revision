import express from 'express'
import path from 'path'

const app = express();
const PORT = process.env.PORT || 8000;

//middleware for the App
app.use(express.static(path.join(import.meta.dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join( import.meta.dirname, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`The server is running on: ${PORT}`));
