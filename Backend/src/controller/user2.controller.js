const User = require('../model/user2.model')
const asyncHandler = require("express-async-handler");
const generateToken = require('../utils/generateToken');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const crypto = require('crypto')

const transporter = nodemailer.createTransport(sendgridTransport({
  auth:{
      api_key:"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"
  }
}))

const registerUser = asyncHandler(async(req,res)=>{
    const{name,email,password}=req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token:generateToken(user._id)
        });
    }
    else{
        res.status(400);
    throw new Error("User not found");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { name, password } = req.body;
  
    const user = await User.findOne({ name });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token:generateToken(user._id)
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const resetUser = ((req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
      if(err){
        console.log(err);
      }
      const token = buffer.toString("hex");
      User.findOne({email:req.body.email})
      .then(user=>{
        if(!user){
          return res.status(422).json({error:"User don't exists with that email"})
        }
        user.resetToken = token
        user.expireToken = Date.now() +  86400000
        user.save().then((result)=>{
          transporter.sendMail({
            to:user.email,
            from:"2017013573.atif@ug.sharda.ac.in",
            subject:"password reset",
            html:`
            <h5>click in this <a href = "http://localhost:3000/reset/${token}">link</a> to reset password</h5>
            `
          })
          res.json({message:"check your mail"})
        })
      })
    })
  })

module.exports={registerUser, authUser, resetUser};