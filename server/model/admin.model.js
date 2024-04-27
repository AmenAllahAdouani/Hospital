
module.exports = (connection,DataTypes) => {
    
    const Admin = connection.define('admin', {
        
        
        
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type : DataTypes.STRING,
            deaultValue : "https://friconix.com/png/fi-cnsuxl-user-circle.png"
         },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        sexe: {
            type: DataTypes.STRING,
            allowNull: false
        },
            password: {  
                type: DataTypes.STRING,
                allowNull: false
            },
            phone:{
                type:DataTypes.INTEGER,
               
        
            },


            
    });

    return Admin;
};


