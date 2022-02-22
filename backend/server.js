const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const req = require('express/lib/request')
const { get } = require('express/lib/response')
const res = require('express/lib/response')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log
(`Server started on port ${port}`))
