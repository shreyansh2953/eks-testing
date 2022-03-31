const mongoose = require("mongoose");

// connecting to mongodb by nodejs
// let url = "mongodb://44.203.236.238:30028/user-api"
let url = "mongodb://mongo-service:27017/user-api"
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true,
useFindAndModify:false }).then(()=>{
    console.log("connection sussessfull... to database");
}).catch((err)=>{
    console.log(err);
})