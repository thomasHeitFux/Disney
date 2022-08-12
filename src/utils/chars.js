const axios = require('axios')

async function callChars(){
    const pageOne = await axios('https://api.disneyapi.dev/characters');
    const pageTwo = await axios(pageOne.data.nextPage);
    const pageThree = await axios(pageTwo.data.nextPage);
    const pageFour = await axios(pageThree.data.nextPage);
    const concatChars = pageOne.data.data.concat(pageTwo.data.data.concat(pageThree.data.data.concat(pageFour.data.data)));
    const allCharacters = concatChars.map(e => {
        return{
           img:e.imageUrl,
           name:e.name
        };

    })
    console.log(allCharacters.length);
    return allCharacters
}
module.exports = {callChars}