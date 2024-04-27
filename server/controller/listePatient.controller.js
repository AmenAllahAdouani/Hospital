const db = require('../database.js');

module.exports = {
    getAll : async (req,res)=>{
        try {
            const listePateint = await db.listePateint.findAll({});
            res.json(listePateint);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        try {
            const OneListePatient = await db.listePateint.findOne({where : { id : req.params.id}});
            res.json(OneListePatient);
        } catch (error) {
            console.log(error);
        }
    },
    add : async (req,res)=>{
        try {
            const OneListePatient = await db.listePateint.create(req.body);
            res.json(OneListePatient);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const OneListePatient= await db.listePateint.update(req.body,{where : { id : req.params.id}});
            res.json(OneListePatient);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const OneListePatient = await db.listePateint.destroy({where : { id : req.params.id}});
            res.json(OneListePatient);
        } catch (error) {
            console.log(error);
        }
    },



}