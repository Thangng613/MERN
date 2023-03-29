const express = require('express');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors')

dotenv.config()
const PORT = 8000

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected!'))

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(PORT, () => console.log(`sever is running port ${PORT}`))



