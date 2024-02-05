const Category = require("../models/category-model");

class CategoryRepository {
    static async create(data) {
        try {
            const res = await Category.create(data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    static async get() {
        try {
            const res = await Category.find();
            return res;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryRepository;