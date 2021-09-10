const mongoose =require('mongoose')

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
   
      
        title:
        { type: String, 
         },
        qty: 
        { type: Number,
       
        },
        image:
         { type: String, 
          },
        price: 
        { type: Number, 
       }, 
       date:{
        type: Date, 
        default: Date.now
    },
        product: {
          type: mongoose.Schema.Types.ObjectId,
         
          ref: 'Produit',
        },
      
    
    
  
    
  
  }
 
)

module.exports = Order = mongoose.model('Order', orderSchema)

