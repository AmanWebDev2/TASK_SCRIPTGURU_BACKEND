const CategoryRepository = require("../repository/category-repository");

class CategoryService {
    static async create(data) {
        try {   
            const res = await CategoryRepository.create(data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    static async get() {
        try {   
            const res = await CategoryRepository.get();
            return res;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryService;