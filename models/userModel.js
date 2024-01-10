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
        type:Number
    },
    pre_exciting: {
        type:Number
    },
    pre_delightful: {
        type:Number
    },
    pre_thrilling: {
        type:Number
    },
    pre_enjoyable: {
        type:Number
    },
    items_bought: {
        data: Buffer,
        contentType: String,
    },
    total_price: {
        type:Number
    },
    total_time: {
        type:Number,
    },
    fruit_visit: {
        type:Number,
    },
    fruit_time: {
        type:Number,
    },
    vegetable_visit: {
        type:Number,
    },
    vegetable_time: {
        type:Number,
    },
    condiment_visit: {
        type:Number,
    },
    condiment_time: {
        type:Number,
    },
    dessert_visit: {
        type:Number,
    },
    dessert_time: {
        type:Number,
    },
    snack_visit: {
        type:Number,
    },
    snack_time: {
        type:Number,
    },
    treatment_visited: {
        type:Number,
    },
    treatment_aisle: {
        type:String,
    },
    treatment_option: {
        data: Buffer,
        contentType: String,
    },
    sub_action: {
        data: Buffer,
        contentType: String,
    },
    post_fun: {
        type:Number,
    },
    post_exciting: {
        type:Number,
    },
    post_delightful: {
        type:Number,
    },
    post_thrilling: {
        type:Number,
    },
    post_enjoyable: {
        type:Number,
    },
    gender: {
        type:String,
    },
    age: {
        type:Number,
    },
    location: {
        type:String,
    },
    frequency: {
        type:String,
    },
    familiar: {
        type:Number,
    }
},
{ timestamps: true }
)

export default mongoose.model('users', userSchema);