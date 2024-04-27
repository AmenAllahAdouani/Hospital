module.exports = (connection,DataTypes)=>{
    const IdentifiantCsb = connection.define('identifiantcsb',{
        name:DataTypes.STRING,
        lieu:DataTypes.STRING,
        
    })
    return IdentifiantCsb;
}