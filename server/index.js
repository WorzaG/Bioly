const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const authRouter = require('./routers/authRouter')
const dashRouter = require('./routers/dashRouter')
const userRouter = require('./routers/userRouter')

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/auth',authRouter)
app.use('/api/dash',dashRouter)
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server aktif");
})