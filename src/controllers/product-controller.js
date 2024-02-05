const ProductService = require("../services/product-service")

const createProduct=async(req,res)=>{
    const { name,price } = req.body;

    try {
        const product = await ProductService.create({name,price});
        return res.status(200).json({
            success: true,
            data: product,
            message: 'successfully created a product',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:[],
            message:'unable to create product',
            error
        })
    }
}

const getAllProducts=async(req,res)=>{
    const {category,minPrice,maxPrice} = req.query;
    try {
        const products = await ProductService.getAll({category,minPrice,maxPrice});
        return res.status(200).json({
            success: true,
            data: products,
            message: 'successfully fetched all products',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:[],
            message:'unable to create product',
            error
        })
    }
}

const deleteProduct=async(req,res)=>{
    const { id } = req.params;
    try {
        const products = await ProductService.destroy(id);
        return res.status(200).json({
            success: true,
            data: [],
            message: 'successfully deteled a products',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:[],
            message:'unable to create product',
            error
        })
    }
}

const getProduct=async(req,res)=>{
    const { id } = req.params;
    try {
        const product = await ProductService.get(id);
        return res.status(200).json({
            success: true,
            data: product,
            message: 'successfully fetched a product',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:[],
            message:'unable to create product',
            error
        })
    }
}

const updateProduct=async(req,res)=>{
    const { id } = req.params;
    const { name,price } = req.body;
    try {
        const product = await ProductService.update(id,{name,price});
        return res.status(200).json({
            success: true,
            data: product,
            message: 'successfully updated a product',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:[],
            message:'unable to create product',
            error
        })
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct
}