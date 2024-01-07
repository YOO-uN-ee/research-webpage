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
        required:true,
    },
    total_price: {
        type:Number,
        required:true,
    },
    fruit_visit: {
        type:Number,
        required:true,
    },
    fruit_time: {
        type:Number,
        required:true,
    },
    vegetable_visit: {
        type:Number,
        required:true,
    },
    vegetable_time: {
        type:Number,
        required:true,
    },
    condiment_visit: {
        type:Number,
        required:true,
    },
    condiment_time: {
        type:Number,
        required:true,
    },
    dessert_visit: {
        type:Number,
        required:true,
    },
    dessert_time: {
        type:Number,
        required:true,
    },
    snack_visit: {
        type:Number,
        required:true,
    },
    snack_time: {
        type:Number,
        required:true,
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
    frequency: {
        type:Number,
        required:true
    },
    familiar: {
        type:Number,
        required:true
    }
},
{ timestamps: true }
)

export default mongoose.model('users', userSchema);