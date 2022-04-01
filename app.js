const express = require("express")
const mongoose= require("mongoose")
const port  = process.env.PORT || 3000

mongoose.connect("mongodb+srv://urvashi:root@uvinfocluster.ko8y4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log("connected")
});
const app = express();

const bodyparser= require("body-parser")
const userrout = require("./routs/user.routs")



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/user",userrout);


app.listen(port,()=>{
    console.log("server...")
})