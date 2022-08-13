const { Router } = require("express");
const {callChars}  = require("../utils/chars")
const router = Router();

const express = require('express');
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
            message:'LOGUO EXITOSO!',
            token
        })
    }else{
        res.json({
            message:'usuario y/o contrasenia invalidos'
        })
    }
})


router.get('/characters', async (req, res) => {
    try {
        const allCharacters = await callChars()
        res.status(200).send(allCharacters);
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})


module.exports = router