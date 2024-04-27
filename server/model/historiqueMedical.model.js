
module.exports = (connection,DataTypes) => {
    const HistoriqueMedical = connection.define('historiqueMedical', {
       
        name: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        description:{
            type: DataTypes.STRING
        },

        bilan:{
            type: DataTypes.STRING ,
             allowNull: false ,

            
              }


    });

    return HistoriqueMedical;
};
