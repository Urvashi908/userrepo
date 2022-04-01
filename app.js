const express = require("express")
const bodyparser= require("body-parser")
const userrout = require("./routs/user.routs")
const mongoose= require("mongoose")
const app = express();


mongoose.connect("mongodb+srv://urvashi:root@uvinfocluster.ko8y4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log("connected")
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/user",userrout);


app.listen(3000,()=>{
    console.log("server...")
})