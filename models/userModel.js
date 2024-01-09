import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    ip: {
        type:String,
        default: '0.0.0.0'
    },
    experiment_type: {
        type:String,
        required:true,
    },
    pre_fun: {
        type:Number,
        required:true,
    },
    pre_exciting: {
        type:Number,
        required:true,
    },
    pre_delightful: {
        type:Number,
        required:true,
    },
    pre_thrilling: {
        type:Number,
        required:true,
    },
    pre_enjoyable: {
        type:Number,
        required:true,
    },
    items_bought: {
        type:[String],
        default:[],
    },
    total_price: {
        type:Number,
        default:0,
    },
    total_time: {
        type:Number,
        default:0,
    },
    fruit_visit: {
        type:Number,
        default:0,
    },
    fruit_time: {
        type:Number,
        default:0,
    },
    vegetable_visit: {
        type:Number,
        default:0,
    },
    vegetable_time: {
        type:Number,
        default:0,
    },
    condiment_visit: {
        type:Number,
        default:0,
    },
    condiment_time: {
        type:Number,
        default:0,
    },
    dessert_visit: {
        type:Number,
        default:0,
    },
    dessert_time: {
        type:Number,
        default:0,
    },
    snack_visit: {
        type:Number,
        default:0,
    },
    snack_time: {
        type:Number,
        default:0,
    },
    post_fun: {
        type:Number,
        required:true,
    },
    post_exciting: {
        type:Number,
        required:true,
    },
    post_delightful: {
        type:Number,
        required:true,
    },
    post_thrilling: {
        type:Number,
        required:true,
    },
    post_enjoyable: {
        type:Number,
        required:true,
    },
    gender: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    frequency: {
        type:String,
        required:true
    },
    familiar: {
        type:Number,
        default:0
    }
},
{ timestamps: true }
)

export default mongoose.model('users', userSchema);