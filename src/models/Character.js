const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports =(sequelize) =>{
    sequelize.define('Character',{
        img:{
            type:DataTypes.TEXT
        },
        name:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        weigth:{
            type:DataTypes.INTEGER
        },
        history:{
            type:DataTypes.TEXT
        },
    },{
        timestamps:false
    });
};