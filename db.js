const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log('connection successful')
    }else{
        console.log('error in connection'+ err)
    }
})

module.export= mongoose;



// Rpk4mgT6L4hLOnHs