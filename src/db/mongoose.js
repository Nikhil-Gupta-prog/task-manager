const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

const User = mongoose.model("User",{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("provide Valid Email")
            }
        }
        
    },
    password:{
       type : String,
       trim:true,
       minLength:7,
       validate(value) {
           if(value ==="password"){
               throw new Error('yoc can not use password')
           }
         
       }
      
    },
    age:{
       type:Number,
       required:true,
       validate(value){
           if(value<0){
               throw new Error('Please Provide positive number')
           }
       }
    }
})

const me = new User({
    name:"Goyansh",
    age:20,
    email:"nIk@gmail.com",
    password:"Goyansh@123"
})

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log(error);
})

// const Task = mongoose.model("Task",{
//     task:{
//         type:String
//     },
//     complete:{
//        type:Boolean
//     }
// })

// const you = new Task({
//     task:"washing car",
//     complete: true
// })

// // save in database

// you.save().then(()=>{
//     console.log(you);
// }).catch((error)=>{
//     console.log(error);
// })
