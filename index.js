const express =require('express')
const bodyParser=require('body-parser')
const userRoutes=require('./routes/users')

const app =express();
const port=5000


app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('test')
    res.send('Helo from homepage')
})


app.use('/users',userRoutes)

app.listen(port,()=>console.log(`Server running on port http://localhost:${port}`))