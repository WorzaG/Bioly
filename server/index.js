const express = require('express')
const cors = require('cors')
const app = express()

const authRouter = require('./routers/authRouter')
const dashRouter = require('./routers/dashRouter')
const userRouter = require('./routers/userRouter')

app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/dash',dashRouter)
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server aktif");
})