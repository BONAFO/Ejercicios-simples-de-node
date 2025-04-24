const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

const salts = 10;
const str = "qwertyuiopasdfghjklzxcvbnm".concat("qwertyuiopasdfghjklzxcvbnm".toUpperCase()).split("");
const numb = '0123456789'.split("");
const symbols = `!#$%&/()=?+-*`.split("");


function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}

const GetSymbol = () => {
    let s;
    for (let i = 0; i <= salts; i++) {
        s = symbols[random(symbols.length)]
    }
    return s
}

const GetNumber = () => {
    let s;
    for (let i = 0; i <= salts; i++) {
        s = numb[random(numb.length)]
    }
    return s
}

const GetLet = () => {
    let s;
    for (let i = 0; i <= salts; i++) {
        s = str[random(str.length)]
    }
    return s
}

const GenPassword = (params) => {
    let password = [];
    let cyph = '';

    for (let i = 0; i < params[1]; i++) {
        const res = GetSymbol();
        if (params[3] && cyph.includes(res)) {
            i--
        } else {
            cyph += res
        }
    }
    for (let i = 0; i < params[2]; i++) {
        const res = GetNumber();
        if (params[3] && cyph.includes(res)) {
            i--
        } else {
            cyph += res
        }
    }
    for (let i = 0; i < (params[0] - params[1] - params[2]); i++) {
        const res = GetLet();
        if (params[3] && cyph.includes(res)) {
            i--
        } else {
            cyph += res
        }
    }

    cyph = cyph.split("")


    for (let i = 0; i < params[0]; i++) {
        let c = cyph[i];
        let index = ""
        for (let j = 0; j <= salts; j++) {
            index = random(params[0])
        }
        if (password[index] != undefined) {
            i--
        } else {
            password[index] = c
        }
    }

    password = password.join('')
    console.log(password);



}


const AskAction = () => {

    const AskPassword =(params)=>{
        rl.question('Ammount of passwords:', (len) => {
            if (parseInt(len) > 0) {
                for (let i = 0; i < parseInt(len); i++) {
                    GenPassword(params)
                }
                process.exit()

            } else {
                console.clear()
                console.error("Invalid length");
                AskPassword(params)

            }
        })
    }

    const AskRepeat = (params) => {
        rl.question('Allow repeat?[s/n]', (resp) => {
            if (resp.toLowerCase() == 'y' || resp.toLowerCase() == 's' || resp.toLowerCase() == 't' || resp.toLowerCase() == 'yes' || resp.toLowerCase() == 'si' || resp.toLowerCase() == 'true') {
                params[3] = true
                AskPassword(params)

            

            } else if (resp.toLowerCase() == 'n' || resp.toLowerCase() == 'f' || resp.toLowerCase() == 'no' || resp.toLowerCase() == 'false') {
                params[3] = false
                AskPassword(params)
          

            } else {
                console.clear()
                console.error("Invalid length");
                AskRepeat(params)
            }
        })
    }

    const AskNumbers = (params) => {
        rl.question('Ammount of numbers:', (len) => {
            if (parseInt(len) + params[1] <= params[0]) {
                console.clear()
                params[2] = parseInt(len);
                AskRepeat(params)

            } else {
                console.clear()
                console.error("Invalid length");
                AskNumbers(params)

            }
        })
    }

    const AskSymbols = (params) => {
        rl.question('Ammount of symbols:', (len) => {
            if (parseInt(len) <= params[0]) {
                console.clear()
                params[1] = parseInt(len);
                AskNumbers(params)
            } else {
                console.clear()
                console.error("Invalid length");
                AskSymbols(params)

            }
        })
    }

    rl.question('Length of the password:', (len) => {
        if (parseInt(len) > 0 && parseInt(len) <= 50) {
            AskSymbols([parseInt(len)])
        } else {
            console.clear()
            console.error("Invalid length");
            AskAction()

        }
    })
}



AskAction()