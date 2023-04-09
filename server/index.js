const express = require('express')
const cors = require('cors')
const { connection } = require('./config/db')
const { userRouterPost } = require('./router/user')
const { routerpost } = require('./router/content')

const app = express()

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hay! dont worry i can do it')
})


app.use('/', userRouterPost)
app.use('/', routerpost)


app.listen(PORT, async ()=>{
    try{
        await connection
        console.log("connected to mongodb")
    }catch(e){
        console.log(e)
    }
    console.log('Port Running on http//localhost:'+PORT)
})