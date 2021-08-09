const express=require('express')
const uuid =require('uuid')
const router=express.Router()

let users=[]
router.get('/',(req,res)=>{
    console.log(users)
    res.send(users)})


router.post('/',(req,res)=>
{
    const data=req.body
    const userId=uuid.v4()
    const userWithUID={ ...data,id:userId}
    users.push(userWithUID)
    res.send(`the firstname of user is ${data.firstName} `)
})


router.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundUser=users.find((user)=>user.id == id)

res.send(foundUser)
})

router.delete('/:id',(req,res)=>{
    const {id} =req.params
    users=users.filter((user)=>user.id !== id)

    res.send(`the ${id} is deleted from database`)
    

})


router.patch('/:id',(req,res)=>{
    const {id} =req.params
    const {firstName,lastName,age} =req.body
    const user=users.find((user)=>user.id == id)

    if(firstName) user.firstName=firstName
    if(lastName) user.lastName=lastName
    if(age) user.age=age

    res.send(`the updated ${id}`)
    
})

module.exports= router;