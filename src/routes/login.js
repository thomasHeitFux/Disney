// const { Router } = require("express");
const express = require('express');
// const app = Router();
const app = express();
const jwt = require('jsonwebtoken');
const keys = require('../settings/keys');

app.set('key',keys.key);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/login',async (req,res)=>{
    if (req.body.usuario=='admin'&&req.body.pass=='12345') {
        const payload ={
            check:true
        };
        const token=jwt.sign(payload,app.get('key'),{
            expiresIn:'3d'
        });
        res.json({
            message:'LOGUEO EXITOSO!',
            token
        })
    }else{
        res.json({
            message:'usuario y/o contrasenia invalidos'
        })
    }
});

///////////////////////////
const verificacion =express.Router();
verificacion.use((req,res,next)=>{
    let token = req.headers['x-accses-token'] || req.headers['authorization'];
    if(!token){
        res.status(401).send('ES NECESARIO UN TOKEN!')
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7,token.length);
        console.log(token);
    }
    if (token) {
        jwt.verify(token,app.get('key'),(error,decoded)=>{
            if(error){
                res.send('el token no es valido')
            }else{
                req.decoded = decoded
                next();
            }
        })
    }
})

app.get('/info',verificacion,(req,res)=>{
    res.json("INFORMACION IMPORTANTE")
})

module.exports = app