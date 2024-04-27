module.exports = (connection,DataTypes) => {
    
    const listePatient = connection.define('listePateint', {
        
        
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name :{
        
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        age :{
            type:DataTypes.INTEGER,
            allowNull:false


        }


    
    });

    return listePatient;
};