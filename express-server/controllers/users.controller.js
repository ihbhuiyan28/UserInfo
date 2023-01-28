const { v4: uuidv4 } = require("uuid");
const Users = require("../models/users.model");

const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            statusCode: 200,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            error: error.message
        });
    }
};

const getUsersById = async (req, res) => {
    try {
        const user = await Users.findOne({ id: req.params.id });
        res.status(200).json({
            statusCode: 200,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            error: error.message
        });
    }
};

const postUsers = async (req, res) => {
    try {
        const user = new Users({
            id: uuidv4(),
            username: req.body.username,
            password: req.body.password
        });
        await user.save();
        res.status(201).json({
            statusCode: 201,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            error: error.message
        });
    }
};

const patchUsers = async (req, res) => {
    try {
        const user = await Users.findOne({ id: req.params.id });
        user.username = req.body.username;
        user.password = req.body.password;
        await user.save();
        res.status(200).json({
            statusCode: 200,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            error: error.message
        });
    }
};

const deleteUsers = async (req, res) => {
    try {
        await Users.deleteOne({ id: req.params.id });
        res.status(200).json({
            statusCode: 200,
            message: "Deleted Successfully!"
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            error: error.message
        });
    }
};

module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    patchUsers,
    deleteUsers
}
