import express from 'express'
import mongoose from 'mongoose'
import { MONGO_URI } from './config.js'
import { router } from './routes/router.js' 
import multer from 'multer'
import cors from 'cors'

const app = new express()
app.use(cors())
app.use('/api', router)
app.use(multer)


mongoose.connect(MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true}) 
mongoose.set('returnOriginal', false);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

const port = process.env.PORT || 3001
app.listen(port)
console.log('Server Started, listening on :' + port)



