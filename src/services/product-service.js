const ProductRepository = require("../repository/product-repository");

class ProductService {
    static async create(data) {
        try {
            const resp = await ProductRepository.create(data);
            return resp;
        } catch (error) {
            console.log('something went wrong in product service')
            throw error;
        }
    }

    static async destroy(id) {
        try {
            const resp = await ProductRepository.destroy(id);
            return resp;
        } catch (error) {
             console.log('something went wrong in product service')
            throw error;
        }
    }

    static #createFilter({minPrice,maxPrice,category}) {
        const filterObj = {};
        if (minPrice !== undefined && maxPrice !== undefined) {
            filterObj.price = { $gte: minPrice, $lte: maxPrice };
          } else if (minPrice !== undefined) {
            filterObj.price = { $gte: minPrice };
          } else if (maxPrice !== undefined) {
            filterObj.price = { $lte: maxPrice };
        }

        if (category !== undefined) {
            filterObj.category = category;
        }

        return filterObj;
    }

    static async getAll(filter) {
        const filterObj = this.#createFilter(filter);
        console.log(filterObj)
        try {
            const resp = await ProductRepository.getAll(filterObj);
            return resp;
            
        } catch (error) {
            console.log('something went wrong in product service')
            throw error;
        }
    }

    static async get(id) {
        try {
            const product = await ProductRepository.get(id)
            return product;
        } catch (error) {
            console.log('something went wrong in product service')
            throw error;
        }
    }

    static async update(id,data) {
        try {
            const product = await ProductRepository.update(id,data);
            return product;
        } catch (error) {
            console.log('something went wrong in product service')
            throw error;
        }
    }
}

module.exports = ProductService;