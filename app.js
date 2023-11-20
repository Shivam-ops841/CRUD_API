const express=require('express')

const app=express()
const routes=require('./routes/route')

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello User")
})

require('./config/config')
app.use('/api',routes)


require('dotenv').config()


app.listen(process.env.PORT,()=>{
    console.log('Listening')
})