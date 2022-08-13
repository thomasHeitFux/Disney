const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports =(sequelize) =>{
    sequelize.define('Character',{
        img:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        weigth:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        history:{
            type:DataTypes.TEXT,
            allowNull:true
        },
    },{
        timestamps:false
    });
};