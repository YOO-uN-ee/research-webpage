import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Integer,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }

}
)

export default mongoose.model('item', itemSchema);