const db = require('../database.js');

module.exports = {
    getAll : async (req,res)=>{
        try {
            const HistoriqueMedical = await db.HistoriqueMedical.findAll({});
            res.json(HistoriqueMedical);
        } catch (error) {
            console.log(error);
        }
    },
    getOne : async (req,res)=>{
        try {
            const HistoriqueMedical = await db.HistoriqueMedical.findOne({where : { id : req.params.id}});
            res.json(Doctor);
        } catch (error) {
            console.log(error);
        }
    },
    add : async (req,res)=>{
        try {
            const HistoriqueMedical = await db.HistoriqueMedical.create(req.body);
            res.json(HistoriqueMedical);
        } catch (error) {
            console.log(error);
        }
    },
    update : async (req,res)=>{
        try {
            const HistoriqueMedical = await db.HistoriqueMedical.update(req.body,{where : { id : req.params.id}});
            res.json(HistoriqueMedical);
        } catch (error) {
            console.log(error);
        }
    },
    remove : async (req,res)=>{
        try {
            const HistoriqueMedical = await db.HistoriqueMedical.destroy({where : { id : req.params.id}});
            res.json(HistoriqueMedical);
        } catch (error) {
            console.log(error);
        }
    },
   
}