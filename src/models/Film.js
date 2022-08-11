const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports =(sequelize) =>{
    sequelize.define('Film',{
        img:{
            type:DataTypes.TEXT
        },
        title:{
            type:DataTypes.STRING
        },
        date:{
            type:DataTypes.INTEGER
        },
        qualification:{
            type:DataTypes.INTEGER
        },
    },{
        timestamps:false
    });
};