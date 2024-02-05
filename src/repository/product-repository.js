const Product = require("../models/product-model");

class ProductRepository {
    static async create(data) {
        try {
            const product = await Product.create(data);
            return product;
        } catch (error) {
            console.log(error);
            console.log('something went wrong in product repo')
            throw error;
        }
    }

    static async destroy(id) {
        try {
            await Product.deleteOne({
                _id: id
            })
            return true;
        } catch (error) {
            console.log('something went wrong in product repo')
            throw error;
        }
    }

    static async getAll(filter) {
        try {
            const products = await Product.find(filter).populate('category');
            return products;
        } catch (error) {
            console.log('something went wrong in product repo')
            throw error;
        }
    }

    static async get(id) {
        try {
            const product = await Product.findOne({
                _id:id
            });
            return product;
        } catch (error) {
            console.log('something went wrong in product repo')
            throw error;
        }
    }

    static async update(id,data) {
        try {
            const product = await Product.findOneAndUpdate({_id:id},data,{new: true});
            return product;
        } catch (error) {
            console.log('something went wrong in product repo')
            throw error;
        }
    }
}

module.exports = ProductRepository;