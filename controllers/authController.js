import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { uid,
                ip, experiment_type, purchase_list,
                pre_fun, pre_exciting, pre_delightful, pre_thrilling, pre_enjoyable,
                items_bought, total_price, total_time,
                fruit_visit, fruit_time, 
                vegetable_visit, vegetable_time, 
                condiment_visit, condiment_time, 
                dessert_visit, dessert_time, 
                snack_visit, snack_time,
                post_fun, post_exciting, post_delightful, post_thrilling, post_enjoyable,
                gender, age, location, frequency, familiar, robot_seen, asked_name,
                treatment_visited, treatment_aisle, treatment_option, treatment_time, sub_action } = req.body

        const user = await new userModel({
            uid,
            ip, experiment_type, purchase_list,
            pre_fun, pre_exciting, pre_delightful, pre_thrilling, pre_enjoyable,
            items_bought, total_price, total_time,
            fruit_visit, fruit_time, 
            vegetable_visit, vegetable_time, 
            condiment_visit, condiment_time, 
            dessert_visit, dessert_time, 
            snack_visit, snack_time,
            post_fun, post_exciting, post_delightful, post_thrilling, post_enjoyable,
            gender, age, location, frequency, familiar, robot_seen, asked_name,
            treatment_visited, treatment_aisle, treatment_option, treatment_time, sub_action
        }).save();

        res.status(200).send({
            success:true,
            message:"All saved",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: error,
            req.body,
            error
        })
    }
};

export const updateController = async (req, res) => {
    try {
        const { pre_fun, pre_exciting, pre_delightful, pre_thrilling, pre_enjoyable,
                items_bought, total_price, total_time,
                fruit_visit, fruit_time, 
                vegetable_visit, vegetable_time, 
                condiment_visit, condiment_time, 
                dessert_visit, dessert_time, 
                snack_visit, snack_time,
                post_fun, post_exciting, post_delightful, post_thrilling, post_enjoyable,
                gender, age, location, frequency, familiar,
                treatment_visited, treatment_aisle, treatment_option, sub_action } = req.body;

        const user = await userModel.findById(req.params.uid);

        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.uid,
            {
                pre_fun: pre_fun || user.pre_fun,
                pre_exciting: pre_exciting || user.pre_exciting,
                pre_delightful: pre_delightful || user.pre_delightful,
                pre_thrilling: pre_thrilling || user.pre_thrilling,
                pre_enjoyable: pre_enjoyable || user.pre_enjoyable,
                items_bought: items_bought || user.items_bought,
                total_price: total_price || user.total_price,
                total_time: total_time || user.total_time,
                fruit_visit: fruit_visit || user.fruit_visit,
                fruit_time: fruit_time || user.fruit_time,
                vegetable_visit: vegetable_visit || user.vegetable_visit,
                vegetable_time: vegetable_time || user.vegetable_time,
                condiment_visit: condiment_visit || user.condiment_visit,
                condiment_time: condiment_time || user.condiment_time,
                dessert_visit: dessert_visit || user.dessert_visit,
                dessert_time: dessert_time || user.dessert_time,
                snack_visit: snack_visit || user.snack_visit,
                snack_time: snack_time || user.snack_time,
                post_fun: post_fun || user.post_fun,
                post_exciting: post_exciting || user.post_exciting,
                post_delightful: post_delightful || user.post_delightful,
                post_thrilling: post_thrilling || user.post_thrilling,
                post_enjoyable: post_enjoyable || user.post_enjoyable,
                gender: gender || user.gender,
                age: age || user.age,
                location: location || user.location,
                frequency: frequency || user.frequency,
                familiar: familiar || user.familiar,
                treatment_visited: treatment_visited || user.treatment_visited,
                treatment_aisle: treatment_aisle || user.treatment_aisle,
                treatment_option: treatment_option || user.treatment_option,
                sub_action: sub_action || user.sub_action,
            },
            {new: true}
        );

        res.status(200).send({
            success:true,
            message: "Updates",
            updatedUser,
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error while updating profile",
            error,
        });
    }
};

export const getData = async (req, res) => {
    try {
        const userdata = await userModel.find({ "experiment_type":req.params.group });
        res.status(200).send({
            success: true,
            message: "Got all data",
            userdata,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error getting all data",
            error: error.message,
        });
    }
};

export const getController = async (req, res) => {
    try {
        const user = await userModel.findById(user._id);

        res.status(200).send({
            success:true,
            message: "Name updated",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error while getting info",
            error,
        });
    }
}
