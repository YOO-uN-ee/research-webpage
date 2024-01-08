import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { ip, experiment_type, 
                pre_fun, pre_exciting, pre_delightful, pre_thrilling, pre_enjoyable,
                items_bought, total_price,
                fruit_visit, fruit_time, 
                vegetable_visit, vegetable_time, 
                condiment_visit, condiment_time, 
                dessert_visit, dessert_time, 
                snack_visit, snack_time,
                post_fun, post_exciting, post_delightful, post_thrilling, post_enjoyable,
                gender, age, location, frequency, familiar } = req.body

        const user = await new userModel({
            ip, experiment_type, 
            pre_fun, pre_exciting, pre_delightful, pre_thrilling, pre_enjoyable,
            items_bought, total_price,
            fruit_visit, fruit_time, 
            vegetable_visit, vegetable_time, 
            condiment_visit, condiment_time, 
            dessert_visit, dessert_time, 
            snack_visit, snack_time,
            post_fun, post_exciting, post_delightful, post_thrilling, post_enjoyable,
            gender, age, location, frequency, familiar
        }).save();

        res.status(200).send({
            success:true,
            message:"All saved",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:error,
            error
        })
    }
};

export const updateController = async (req, res) => {
    try {
        const { name, category, ip } = req.body;
        const user = await userModel.findById(user._id);

        const updatedUser = await userModel.findByIdAndUpdate(
            req.user.__id,
            {
                name: name || user.name,
            },
            {new: true}
        );

        res.status(200).send({
            success:true,
            message: "Name updated",
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