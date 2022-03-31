const express = require('express');
const router = new express.Router();
const user= require('../models/userSchema');


// creating endpoints via router

// endpoint to get all users from database
// we have used async and await not promise
router.get('/myuser',async(req,res)=>{

    try{

        const myusers =await user.find();
        res.status(200);
        res.send(myusers);
    }catch(e)
    {
        res.status(400);
        res.send(e);
    }


})

// creating endpoint to get user by id
router.get('/myuser/:id',(req,res)=>{
          const myid = req.params.id;
              user.findById(myid).then((data)=>{
                  res.status(200);
                  res.send(data);
              }).catch((err)=>{
                  res.status(400);
                res.send("bad request");
              })
})


// endpoint to add new user to database
router.post('/user',(req,res)=>{
    console.log(req.body);

    const newuser = new user(req.body);
    newuser.save().then(()=>{
              console.log("succesfully saved" );
              res.status(201);
              res.send(newuser);
    }).catch((err)=>{
        
        res.status(400);
        res.send("bad request");
    })
           

})


// creating an endpoint for update by id
router.patch('/user/:id',(req,res)=>{
    const myid =req.params.id;
    user.findOneAndUpdate(myid,req.body,{new :true}).then((data)=>{
        res.status(200);
        res.send(data);
    }).catch((err)=>{
        res.status(400);
        res.send("bad request");
        
    })
})

// creating an endpoint to delete by id
router.delete('/user/:id',(req,res)=>{
    const myid =req.params.id;
    user.findByIdAndDelete(myid).then((data)=>{
        res.status(200);
        res.send(data);
    }).catch((err)=>{
        res.status(400);
        res.send("bad request");
        
    })
})

module.exports = router;