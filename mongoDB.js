// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({name:"Radhe"},(error, user)=>{
    //     if(error){
    //         return console.log("Something went wrong !");
    //     }
    //     console.log(user);

    // })
//     db.collection('users').find({name:"Vikram"}).toArray((error, user)=>{
//             if(error){
//                 return console.log("unable to fetch data");
//             }
//             console.log(user);

//     })
//     db.collection('users').find({name:"Vikram"}).count((error, count)=>{
//         if(error){
//             return console.log("unable to fetch data");
//         }
//         console.log(count);

// })
// db.collection('tasks').findOne({_id:new ObjectId('60fb4134f14a83b0b084df6d')},(error, task)=>{
//     if(error){
//         return console.log("Something went wrong !");
//     }
//     console.log(task);

// })
// db.collection('tasks').find().count((error, count)=>{
//     if(error){
//         return console.log("unable to fetch data");
//     }
//     console.log(count);

// })

// db.collection('users').updateOne({
//     _id:new ObjectId('60fb4134f14a83b0b084df6a')
// },{
//     $set:{
//         age:20
//     }
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// db.collection('users').updateMany({
//     name:"Aaryan"
// },{
//     $set:{
//         name:"Niks"
//     }
// }).then((result)=>{
//     console.log(result.modifiedCount);
// }).catch((error)=>{
//     console.log(error);
// })

// db.collection('users').deleteMany({
//     age:11
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

db.collection('tasks').deleteOne({
    name:"Ram"
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
   
    
    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Radhe',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.insertedId)
    // })
})