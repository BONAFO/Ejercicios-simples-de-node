const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const Filtrar = (frase) => {
    const toDel = (`°!"#%$&/():¿=?¡',.;` + '`').split("");

    for (let i = 0; i < toDel.length; i++) {
        frase = frase.replaceAll(toDel[i], "")

    }
    return frase
}
const Match = (frase, palabra) => {
    let c = 0;
    frase.map(f => {
        if (f.toLowerCase() == palabra.toLowerCase()) {
            c++
        }
    })
    return [palabra, c]
}
rl.question("Dame un frase:", (frase) => {
    const fraseOriginal = frase;
    frase = Filtrar(frase).split(" ")
    frase = frase.filter(f => f.replaceAll(" ", "").length != 0)
    let max = [];
    let min = [];

    for (let i = 0; i < frase.length; i++) {
        const word_data = Match(frase, frase[i]);
        if (max[1] == undefined || max[1] < word_data[1]) {
            max = word_data
        }


        if (min[1] == undefined || min[1] > word_data[1]) {
            min = word_data
        }
    }

    console.log(`En la frase: [${fraseOriginal}]`);
    console.log(`La palabras mas usada es: "${max[0]}" con ${max[1]} repeticiones.`);
    console.log(`La palabras menos usada es: "${min[0]}" con ${min[1]} repeticiones.`);



    process.exit()


})