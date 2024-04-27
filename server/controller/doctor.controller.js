const db = require('../database.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login : async (req, res) => {
        db.Doctor.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((Doctor) => {
                bcrypt
                    .compare(req.body.password, Doctor.password)
                    .then((passChedk) => {
                        if (!passChedk) {
                            res.status(400).send({
                                message: "Passwords does not match",
                                error,
                            });
                        }
                        const Token = jwt.sign(
                            {
                                DoctorId: Doctor.id,
                                email: Doctor.email,
                            },
                            "YourSuperSecretKeyHere",
                            { expiresIn: "24h" }
                        );
                        res.status(200).json({
                            message: "Login Successfull",
                            DoctorId: Doctor.id,
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
                    db.Doctor.create({
                        ...req.body,
                        password: hassedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "Doctor Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating Doctor",
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
            const Doctor = await db.Doctor.findAll({});
            res.json(Doctor);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        res.status(200).send(req.user)
    },
    add : async (req,res)=>{
        try {
            const Doctor = await db.Doctor.create(req.body);
            res.json(Doctor);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const Doctor = await db.Doctor.update(req.body,{where : { id : req.params.id}});
            res.json(Doctor);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const Doctor = await db.Doctor.destroy({where : { id : req.params.id}});
            res.json(Doctor);
        } catch (error) {
            console.log(error);
        }
    },
   
}