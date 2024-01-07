import itemModel from "../models/itemModel.js";
import fs from 'fs'

export const addProductController = async (req, res) => {
    try {
      const { name, slug, price, category, option, quantity } = req.fields;
      const { image } = req.files;
  
      const products = new itemModel({ ...req.fields });
    //   const products = new itemModel({ ...req.fields, slug: slugify(name) });
      if (image) {
        products.image.data = fs.readFileSync(image.path);
        products.image.contentType = image.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating product",
      });
    }
  };

export const getProductController = async (req, res) => {
    try {
        const products = await itemModel
            .find({})
            .populate("category")
            .select("-image")
            .limit(6)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            message: "Got all products",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error getting all products",
            error: error.message,
        });
    }
};

export const getSingleProductController = async (req, res) => {
    try {
        // const product = await itemModel
        //     .findOne({pid:req.params.pid})
        //     .populate("categories")
        //     .select("-image");
        const product = await itemModel.findById(req.params.pid);
        res.status(200).send({
            success: true,
            message: "Got single product",
            product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error getting single product",
            error: error.message,
        });
    }
};

export const productImageController = async (req, res) => {
    try {
        const product = await itemModel.findById(req.params.pid).select("image");
        if (product.image.data) {
            res.set("Content-type", product.image.contentType);
            return res.status(200).send(product.image.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error getting product image",
            error,
        });
    }
};

export const productIDController = async (req, res) => {
    try {
        // const category = await categoryModel.findOne({slug: req.params.slug});
        const list_ids = [req.params.pids]
        const products = await itemModel.findByID({"$in":list_ids});
        res.status(200).send({
            success:true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error getting product by list of id",
            error
        });
    }
};

export const productCategoryController = async (req, res) => {
    try {
        // const category = await categoryModel.findOne({slug: req.params.slug});
        const products = await itemModel.find({"category":req.params.category});
        res.status(200).send({
            success:true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error getting product by category",
            error
        });
    }
};

export const productOptionController = async (req, res) => {
    try {
        const products = await itemModel.find({"slug":req.params.slug, "option":req.params.option});
        res.status(200).send({
            success:true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "error getting product by category",
            error
        })
    }
}