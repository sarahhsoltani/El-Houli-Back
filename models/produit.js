const mongoose = require("mongoose");
const comment = require("./comment");
const Schema = mongoose.Schema;
const ProduitSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
   
  },
  image: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true
  },
  countInStock: {
    type: String,
    required: true
  },
  Comments: [comment], 
  date: {
    type: Date,
    default: Date.now
  }
}); 
module.exports = mongoose.model("Produit", ProduitSchema);

