const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const contactSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    lastname: {
        type : String,
        required: true
    },   
    city: {
        type : String,
        required: true
    },
    date:{
        type: Date, 
        default: Date.now
    },
    email: {
        type : String,
        required: true
    },
    tel: {
        type : Number,
        required: true
    },
    message: {
        type : String,
        required: true
    }
  },
   {timestamps :true}
)

module.exports = contact  = mongoose.model('contact', contactSchema)






// const mongoose = require ('mongoose')
// const Schema = mongoose.Schema
// const contactSchema = new Schema({
    
//   nomComplet: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   text: {
//     type: String,
//     required: true
//   },

//   date: {
//     type: Date,
//     default: Date.now
//   }
// )

// module.exports = contact  = mongoose.model('Contact', contactSchema)