const express=require('express')
const router=express.Router()
const model=require('../models/model')
//const { Model } = require('mongoose')

//Define the routes

//Post Method
router.post('/post', async (req, res) => {
   const data=new model({
    id:req.body.id,
    Name:req.body.Name,
    Age:req.body.Age,
    Gender:req.body.Gender,
    Profession:req.body.Profession
   })

   try{
    const dataToSave=await data.save();
    res.status(200).json(dataToSave)
   }
   catch(error)
   {
    res.json({"message":"Error message"})
   }
})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
    const data=await model.find()
    res.status(200).send(data)
    }
    catch(error){
        res.status({"error":"Error"})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data=await model.findById(req.params.id)
        res.status(200).send(data)
    }
    catch(error)
    {
        res.send("Error occured")
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try{
        const id=req.params.id;
        const updatedData=req.body;
        const result=await model.findByIdAndUpdate(id,updatedData,{new:true})
        res.status(200).send(result)
    }
    catch(error)
    {
        res.send("Error Occured")
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try{
    const id=req.params.id
    const result=await model.findByIdAndRemove(id);
    res.status(200).send(result)
    }
    catch(error)
    {
        res.send("Error Message")
    }
})

module.exports=router