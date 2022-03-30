const express = require('express');
const app = express();
const PORT = 8000;

//ROUTES
app.get('/',(req,res)=>{
  res.status(200).json({message:"Welcome to the server"})
})

// app.get('/users',(req,res)=>{
//     res.status(200).json({message:"Welcome to the users"})
//   })




app.listen(PORT,()=>{
    console.log(`Server running`)
})