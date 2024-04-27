const db = require('../database.js');

module.exports = {
    getAll : async (req,res)=>{
        try {
            const IdentifiantCsb = await db.IdentifiantCsb.findAll({});
            res.json(IdentifiantCsb);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        try {
            const IdentifiantCsb = await db.IdentifiantCsb.findOne({where : { id : req.params.id}});
            res.json(IdentifiantCsb);
        } catch (error) {
            console.log(error);
        }
    },
    add : async (req,res)=>{
        try {
            const IdentifiantCsb = await db.IdentifiantCsb.create(req.body);
            res.json(IdentifiantCsb);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const IdentifiantCsb = await db.IdentifiantCsb.update(req.body,{where : { id : req.params.id}});
            res.json(IdentifiantCsb);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const IdentifiantCsb = await db.IdentifiantCsb.destroy({where : { id : req.params.id}});
            res.json(IdentifiantCsb);
        } catch (error) {
            console.log(error);
        }
    },
   
}