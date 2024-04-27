const db = require('../database.js');

module.exports = {
    getAll : async (req,res)=>{
        try {
            const Mesure = await db.Mesure.findAll({});
            res.json(Mesure);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        try {
            const Mesure = await db.Mesure.findOne({where : { id : req.params.id}});
            res.json(Mesure);
        } catch (error) {
            console.log(error);
        }
    },
    add : async (req,res)=>{
        try {
            const Mesure = await db.Mesure.create(req.body);
            res.json(Mesure);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const Mesure = await db.Mesure.update(req.body,{where : { id : req.params.id}});
            res.json(Mesure);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const Mesure = await db.Mesure.destroy({where : { id : req.params.id}});
            res.json(Mesure);
        } catch (error) {
            console.log(error);
        }
    },
   
}