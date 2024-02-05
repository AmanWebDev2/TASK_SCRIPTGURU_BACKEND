const UserService = require("../services/user-service")

const createUser=async(req,res)=>{
    const { username, email, password, name } = req.body;
    try {
        const user = await UserService.createUser({username,email,password,name})
        return res.status(201).json({
            success: true,
            data: user,
            message: 'successfully created a user',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to create a user',
            error
        })  
    }
}


const signIn =async(req,res)=>{
    const { email,password } = req.body;
    try {
        const data = await UserService.signIn(email,password);
        return res.status(200).json({
            success: true,
            data: data,
            message: 'successfully signed in',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to signin a user',
            error
        })  
    }
}

const updateUser=async(req,res)=>{
    const { id } = req.params;
    const { username, email, name} = req.body;
    try {
        const user = await UserService.update(id,{username,email,name});
        return res.status(200).json({
            success: true,
            data: user,
            message: 'successfully updated a user',
            error: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to update user',
            error
        })  
    }
}

const getUser=async(req,res)=>{
    const { id } = req.params;

    try {
       const user = await UserService.get(id);
       return res.status(200).json({
        success: false,
        data: user,
        message: 'successfully fetched a user',
        error:{}
       }) 
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to fetch a user',
            error
        })
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const user = await UserService.getAll();
        return res.status(200).json({
            success: true,
            data: user,
            messsage: 'successfully fetched all users',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to fetched a user',
            error
        })
    }
}

const deleteUser=async(req,res)=>{
    const { id } = req.params;
    try {
        const resp = await UserService.deleteUser(id);
        return resp.status(200).json({
            success: true,
            message: 'successfully deleted a user',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: 'unable to delete a user',
            error
        })  
    }
}

module.exports = {
    createUser,
    signIn,
    updateUser,
    getAllUsers,
    getUser,
    deleteUser
}
