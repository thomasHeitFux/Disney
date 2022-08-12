const { Router } = require("express");
const {callChars}  = require("../utils/chars")
const router = Router();


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