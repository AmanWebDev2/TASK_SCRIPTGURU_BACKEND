const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require("../repository/user-repository");
const { JWT_KEY } = require('../config');

class UserService {
    static async createUser(data) {
        try {
            const {username,_id} = await UserRepository.create(data);
            return { username,id:_id};
        } catch (error) {
            console.log('something went wrong in service layer')
            console.log(error)
            throw error;
        }
    }

    static async deleteUser(id) {
        try {   
            const resp = await UserRepository.destroy(id);
            return resp;
        } catch (error) {
            console.log('something went wrong in service layer')
            throw error;
        }
    }

    static async signIn(email,password) {
        try {
            // check if user exists or not
            const user = await UserRepository.getByEmail(email);

            if(!user) {
                console.log('user not exist');
                throw {error: 'user not found'}
            }

            const isValidPassword = this.#checkPassword(password,user.password);

            if(!isValidPassword) {
                console.log('wrong password');
                throw {
                    error: 'incorrect password'
                }
            }

            const newJWT = this.#createToken({username:user.username,email:user.email});
            return {
                token:newJWT,
                userId: user._id
            };
        } catch (error) {
            console.log('something went wrong in service layer')
            console.log(error)
            throw error;
        }
    }

    static async get(id) {
        try {
            const user = await UserRepository.get(id);
            return user;
        } catch (error) {
            console.log('something went wrong in service layer')
            console.log(error)
            throw error;
        }
    }

    static async update(id,data) {
        try {
            const user = await UserRepository.update(id,data);
            return user;
        } catch (error) {
            console.log('something went wrong in service layer')
            console.log(error)
            throw error;
        }
    }

    static async getAll() {
        try {
            const users = await UserRepository.getAll();
            return users;
        } catch (error) {
            console.log('something went wrong in service layer')
            console.log(error)
            throw error;
        }
    }

    static #checkPassword(plainPassword,hashedPassword) {
        try {
            const isValid = bcrypt.compareSync(plainPassword,hashedPassword);
            console.log(isValid)
            return isValid;
        } catch (error) {
            console.log('something went wrong in service layer')
            throw error;
        }
    }

    static #createToken(user) {
        try {   
            const token = jwt.sign(user,JWT_KEY,{ expiresIn: '1h'})
            return token;
        } catch (error) {
            console.log('something went wrong in service layer')
            throw error;
        }
    }

    static #validateToken(token) {
        try {   
            const isValid = jwt.verify(token,JWT_KEY);
            return isValid;
        } catch (error) {
            console.log('something went wrong in service layer')
            throw error;
        }
    }

}

module.exports = UserService;