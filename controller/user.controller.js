
const { response } = require("express")
const { request } = require("express")
const usermodel= require("../model/user.model")
exports.sigin= (request,response)=>{
    console.log(request.body)
   const email=request.body.email
    const password=request.body.password
    usermodel.create(request.body).then(result=>{
        return response.status(201).json(result)
    }).catch(err=>{
        console.log(err)
        return response.status(500).json({errors:err})

    })

}
exports.singup =(request,response)=>{
    const usename =request.body.uaername
    const email= request.body.email
    const password =request.body.password
    console.log(request.body)
    usermodel.findOne({password:password}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({err:"server issues"})
    })
}

