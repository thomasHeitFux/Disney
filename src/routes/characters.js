const { Router } = require("express");
const axios = require('axios')
const router = Router();


router.get('/', async (req, res) => {
    try {
        const pageOne = await axios('https://api.disneyapi.dev/characters');
        const pageTwo = await axios(pageOne.data.nextPage);
        const pageThree = await axios(pageTwo.data.nextPage);
        const pageFour = await axios(pageThree.data.nextPage);
        const concatChars = pageOne.data.data.concat(pageTwo.data.data.concat(pageThree.data.data.concat(pageFour.data.data)));
        const allCharacters = concatChars.map(e=>e.name);
        console.log(allCharacters.length);
        res.status(200).send(allCharacters)
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})


module.exports = router