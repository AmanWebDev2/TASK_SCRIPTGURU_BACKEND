const User = require("../models/user-model");
const { AppError, ValidationError } = require("../utils");

class UserRepository {

    static async create(data) {
        try {   
            const resp = await User.create(data);
            console.log(resp)
            return resp;
        } catch (error) {
            console.log(error);
            if(error.name == 'MongoServerError') {
                throw new AppError(
                    "MongoServerError",
                    error.message,
                )
            }

            if(error.name=='ValidationError'){
                throw new ValidationError(error)
            }
            console.log('something went wrong in repo layer');
            throw error;
        }
    }

    static async destroy(id) {
        try {
            const resp = await User.deleteOne({
                _id:id
            });
            return resp;
        } catch (error) {
            console.log(error)
            throw new AppError(error.name,error.message,error.statusCode)
        }
    }

    static async getByEmail(email) {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            console.log('something went wrong in repo layer');
            throw error;   
        }
    }

    static async get(id) {
        try {
            const user = await User.findOne({
                _id:id
            })
            return user;
        } catch (error) {
            console.log('something went wrong in repo layer');
            console.log(error.name)
            throw new AppError(error.name,error.message)
        }
    }

    static async update(id,data) {
        try {
            const user = await User.findOneAndUpdate({_id:id},data,{new:true});
            const {_id,name,username,email } = user;
            return {
                id:_id,
                name,username,email
            }
        } catch (error) {
            console.log('something went wrong in repo layer');
            throw error;
        }
    }

    static async getAll() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.log('something went wrong in repo layer');
            throw error;
        }
    }
}

module.exports = UserRepository;