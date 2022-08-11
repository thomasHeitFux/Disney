const readline = require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('Bienvenido, ingresa tu usuario: ',(rta)=>{
    if(rta=='thomas'){
        console.log(`Bienvenido ${rta}`);
    }else{
        process.stdout.write('Usted no esta autorizado')
    }
    rl.close();
})