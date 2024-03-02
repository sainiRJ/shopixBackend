const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    oldPrice:{
        type:Number
    },
    price:{
        type:Number,
        required:true
    },

    ratings:{
        type:Number
    },

    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

})
module.exports=mongoose.model('Product',productSchema)