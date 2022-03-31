const express = require('express');
const app= express();
require('./db/conn');
const userRouter = require('./routes/userRouter');
// const user = require('./models/userSchema');
const port= process.env.PORT || 3000;

// using global middleware (for all endpoints) which check the incoming object from req.body is proper json or not and then shows in console
app.use(express.json());
// registered our router
app.use(userRouter);

app.get('/',(req,res)=>{
       res.send(`Express is running at port ${port}`);
})

// // endpoint to get all users from database
// // we have used async and await not promise
// app.get('/myuser',async(req,res)=>{

//     try{

//         const myusers =await user.find();
//         res.status(200);
//         res.send(myusers);
//     }catch(e)
//     {
//         res.status(400);
//         res.send(e);
//     }


// })

// // creating endpoint to get user by id
// app.get('/myuser/:id',(req,res)=>{
//           const myid = req.params.id;
//               user.findById(myid).then((data)=>{
//                   res.status(200);
//                   res.send(data);
//               }).catch((err)=>{
//                   res.status(400);
//                 res.send("bad request");
//               })
// })


// // endpoint to add new user to database
// app.post('/user',(req,res)=>{
//     console.log(req.body);

//     const newuser = new user(req.body);
//     newuser.save().then(()=>{
//               console.log("succesfully saved" );
//               res.status(201);
//               res.send(newuser);
//     }).catch((err)=>{
        
//         res.status(400);
//         res.send("bad request");
//     })
           

// })

// // creating an endpoint for update by id
// app.patch('/user/:id',(req,res)=>{
//     const myid =req.params.id;
//     user.findOneAndUpdate(myid,req.body,{new :true}).then((data)=>{
//         res.status(200);
//         res.send(data);
//     }).catch((err)=>{
//         res.status(400);
//         res.send("bad request");
        
//     })
// })

// // creating an endpoint to delete by id
// app.delete('/user/:id',(req,res)=>{
//     const myid =req.params.id;
//     user.findByIdAndDelete(myid).then((data)=>{
//         res.status(200);
//         res.send(data);
//     }).catch((err)=>{
//         res.status(400);
//         res.send("bad request");
        
//     })
// })


app.listen(port,()=>{
    console.log(` connection established at ${port}`);
})