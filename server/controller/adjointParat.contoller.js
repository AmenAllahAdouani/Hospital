const db = require('../database.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login : async (req, res) => {
        db.AdjointParat.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((AdjointParat) => {
                bcrypt
                    .compare(req.body.password, AdjointParat.password)
                    .then((passChedk) => {
                        if (!passChedk) {
                            res.status(400).send({
                                message: "Passwords does not match",
                                error,
                            });
                        }
                        const Token = jwt.sign(
                            {
                                AdjointId: AdjointParat.id,
                                email: AdjointParat.email,
                            },
                            "YourSuperSecretKeyHere",
                            { expiresIn: "24h" }
                        );
                        res.status(200).json({
                            message: "Login Successfull",
                            AdjointId: AdjointParat.id,
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
                    db.AdjointParat.create({
                        ...req.body,
                        password: hassedPass
                    })
                        .then((result) =>
                            res.status(201).json({
                                message: "AdjointParat Created Successfully",
                                result,
                            })
                        )
                        .catch((error) => {
                            res.status(500).send({
                                message: "Error creating AdjointParat",
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
            const AllAdjointPara = await db.AdjointParat.findAll({});
            res.json(AllAdjointPara);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        res.status(200).send(req.user)
    },
    add : async (req,res)=>{
        try {
            const OneAdjointPara = await db.AdjointParat.create(req.body);
            res.json(OneAdjointPara);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const OneAdjointPara = await db.AdjointParat.update(req.body,{where : { id : req.params.id}});
            res.json(OneAdjointPara);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const OneAdjointPara = await db.AdjointParat.destroy({where : { id : req.params.id}});
            res.json(OneAdjointPara);
        } catch (error) {
            console.log(error);
        }
    },


   
}