module.exports = (connection, DataTypes) => {
    const Mesure = connection.define('mesure', {
        
        name: DataTypes.STRING,
        date: DataTypes.DATE,
        heure: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        data:DataTypes.STRING,

        
        
        
    });

    return Mesure;
};
