module.exports = (connection,DataTypes)=>{
    const RendezVous= connection.define('rendezVous',{
        lieu:DataTypes.STRING,
        date:DataTypes.DATE,
        heure: {
            type: DataTypes.STRING,
          },  
          
         




    })
    return RendezVous;
}