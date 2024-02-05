const CategoryService = require("../services/category-service")

const createCategory=async(req,res)=>{
    const {name} = req.body;

    try {
        const data = await CategoryService.create({name});
        return res.status(201).json({
            success: true,
            message: 'successfully created a category',
            data: data,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'unable to create category',
            data: null,
            error: error
        });
    }
}

const getCategory=async(req,res)=>{
    try {
        const data = await CategoryService.get();
        return res.status(200).json({
            success: true,
            message: 'successfully fetch all categories',
            data: data,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'unable to fetch categories',
            data: null,
            error: error
        });
    }
}

module.exports = {
    createCategory,
    getCategory
}