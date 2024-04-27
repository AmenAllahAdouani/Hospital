const db = require('../database.js');

module.exports = {
    getAll : async (req,res)=>{
        try {
            const RendezVous= await db.RendezVous.findAll({});
            res.json(RendezVous);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        try {
            const rendezVous = await db.RendezVous.findOne({where : { id : req.params.id}});
            res.json(rendezVous);
        } catch (error) {
            console.log(error);
        }
    },
    add : async (req,res)=>{
        try {
            const OneRendezVous = await db.RendezVous.create(req.body);
            res.json(OneRendezVous);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const OneRendezVous= await db.RendezVous.update(req.body,{where : { id: req.params.id}});
            res.json(OneRendezVous);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const OneRendezVous = await db.RendezVous.destroy({where : { id: req.params.id}});
            res.json(OneRendezVous);
        } catch (error) {
            console.log(error);
        }
    },

   
}