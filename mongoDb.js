const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();


async function dbConnect() {
    

try {
        
    await mongoose.connect(process.env.MONGO_URI)
   console.log("Db connected")

} catch (error) {

console.log(error)
    
}
    
}

module.exports = dbConnect