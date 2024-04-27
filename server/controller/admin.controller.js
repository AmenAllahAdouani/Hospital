const db = require('../database.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login : async (req, res) => {
        db.Admin.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((Admin) => {
                bcrypt
                    .compare(req.body.password, Admin.password)
                    .then((passChedk) => {
                        if (!passChedk) {
                            res.status(400).send({
                                message: "Passwords does not match",
                                error,
                            });
                        }
                        const Token = jwt.sign(
                            {
                                AdminId: Admin.id,
                                email: Admin.email,
                            },
                            "YourSuperSecretKeyHere",
                            { expiresIn: "24h" }
                        );
                        res.status(200).json({
                            message: "Login Successfull",
                            AdminId: Admin.id,
                            token: Token
                        });
                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    });
            })
            .catch((error) => {
                res.status(404).send({
                    message: "Email not found",
                    error,
                });
            });
    },
    register : async (req, res) => {
        try {
            bcrypt.hash(req.body.password, 10)
                .then((hassedPass) => {
                    db.Admin.create({
                        ...req.body,
                        password: hassedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "Admin Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating Admin",
                                error,
                            });
                        });
                });
        } catch (error) {
            res.status(500).send({
                message: "Password was not hashed successfully",
                error,
            });
        }
    },
    getAll : async (req,res)=>{
        try {
            const Admin = await db.Admin.findAll({});
            res.json(Admin);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        res.status(200).send(req.user)
    },
    add : async (req,res)=>{
        try {
            const Admin= await db.Admin.create(req.body);
            res.json(Admin);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const Admin = await db.Admin.update(req.body,{where : { id : req.params.id}});
            res.json(Admin);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const Admin = await db.Admin.destroy({where : { id : req.params.id}});
            res.json(Admin);
        } catch (error) {
            console.log(error);
        }
    },

   
}