import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    option:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        data: Buffer,
        contentType: String,
    }
}
)

export default mongoose.model('items', itemSchema);