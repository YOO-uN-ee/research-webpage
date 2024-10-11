import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    uid: {
        type:String,
        default: "UNKNOWN"
    },
    experiment_type: {
        type:String
    },
    purchase_list: {
        type: [String]
    },
    pre_fun: {
        type:Number,
        default:0,
    },
    pre_exciting: {
        type:Number,
        default:0,
    },
    pre_delightful: {
        type:Number,
        default:0,
    },
    pre_thrilling: {
        type:Number,
        default:0,
    },
    pre_enjoyable: {
        type:Number,
        default:0,
    },
    pre_enthusiastic: {
        type:Number,
        default:0,
    },
    pre_interested: {
        type:Number,
        default:0,
    },
    pre_excited: {
        type:Number,
        default:0,
    },
    pre_alert: {
        type:Number,
        default:0,
    },
    pre_inspired: {
        type:Number,
        default:0,
    },
    pre_active: {
        type:Number,
        default:0,
    },
    pre_distressed: {
        type:Number,
        default:0,
    },
    pre_upset: {
        type:Number,
        default:0,
    },
    pre_irritable: {
        type:Number,
        default:0,
    },
    pre_nervous: {
        type:Number,
        default:0,
    },
    pre_afraid: {
        type:Number,
        default:0,
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
        default:0,
    },
    post_exciting: {
        type:Number,
        default:0,
    },
    post_delightful: {
        type:Number,
        default:0,
    },
    post_thrilling: {
        type:Number,
        default:0,
    },
    post_enjoyable: {
        type:Number,
        default:0,
    },
    post_enthusiastic: {
        type:Number,
        default:0,
    },
    post_interested: {
        type:Number,
        default:0,
    },
    post_excited: {
        type:Number,
        default:0,
    },
    post_alert: {
        type:Number,
        default:0,
    },
    post_inspired: {
        type:Number,
        default:0,
    },
    post_active: {
        type:Number,
        default:0,
    },
    post_distressed: {
        type:Number,
        default:0,
    },
    post_upset: {
        type:Number,
        default:0,
    },
    post_irritable: {
        type:Number,
        default:0,
    },
    post_nervous: {
        type:Number,
        default:0,
    },
    post_afraid: {
        type:Number,
        default:0,
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
{ timestamps: true }
)

export default mongoose.model('users', userSchema);
