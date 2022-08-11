const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports =(sequelize) =>{
    sequelize.define('Genre',{
        img:{
            type:DataTypes.TEXT
        },
        name:{
            type:DataTypes.STRING
        }
    },{
        timestamps:false
    });
};