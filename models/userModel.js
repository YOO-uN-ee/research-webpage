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
        type: [String]
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
        type: [String]
    },
    treatment_time: {
        type: [Number]
    },
    sub_action: {
        type: [String]
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
        required:true,
    },
    age: {
        type:Number,
        required:true,
    },
    location: {
        type:String,
        required:true,
    },
    frequency: {
        type:String,
        required:true,
    },
    familiar: {
        type:Number,
        required:true,
    },
    robot_seen: {
        type:String,
        required:true,
    },
    asked_name: {
        type: String,
        required:true,
    }
},
{ timestamps: false }
)

export default mongoose.model('users', userSchema);