import express from "express";
import formidable from "express-formidable";
import { addProductController, getProductController, getSingleProductController, productCategoryController, productIDController,productImageController, productOptionController } from "../controllers/itemController.js";


const router = express.Router();

router.post("/addproduct", formidable(), addProductController);

router.get("/getproduct", getProductController);
router.get("/getproduct/:pids", getSingleProductController);
router.get("/productphoto/:pid", productImageController);
router.get("/productcategory/:category", productCategoryController);
router.get("/productid/:pids", productIDController);
router.get("/getproduct/:slug/:option", productOptionController);

export default router;