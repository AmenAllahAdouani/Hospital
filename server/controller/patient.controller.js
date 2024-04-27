const db = require('../database.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    getOneById : async (req,res)=>{
        try {
            const patient = await db.Patient.findOne({where : { id : req.params.id}})
            res.json(patient)
        } catch (error) {
            console.log(error);
        }
    },

    login : async (req, res) => {
        db.Patient.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((Patient) => {
                bcrypt
                    .compare(req.body.password, Patient.password)
                    .then((passChedk) => {
                        if (!passChedk) {
                            res.status(400).send({
                                message: "Passwords does not match",
                                error,
                            });
                        }
                        const Token = jwt.sign(
                            {
                                PatientId: Patient.id,
                                email: Patient.email,
                            },
                            "YourSuperSecretKeyHere",
                            { expiresIn: "24h" }
                        );
                        res.status(200).json({
                            message: "Login Successfull",
                            PatientId: Patient.id,
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
                    db.Patient.create({
                        ...req.body,
                        password: hassedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "Patient Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating Patient",
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
            const Patient= await db.Patient.findAll({});
            res.json(Patient);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        res.status(200).send(req.user);
    },
    add : async (req,res)=>{
        try {
        
            const Onepatient = await db.Patient.create(req.body);
            res.json(Onepatient);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const Onepatient= await db.Patient.destroy({where : { id : req.params.id}});
            res.json(Onepatient);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const Onepatient = await db.Patient.update(req.body,{where : { id : req.params.id}});
            res.json(Onepatient);
        } catch (error) {
            console.log(error);
        }
    },


   
}