const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




const AskTemp = (action) => {
    rl.question(`Which temperature do you want to convert?`, (temp) => {
        if (!isNaN(parseFloat(temp))) {
            if (action == 1) {
                console.log(`${temp}°F= ${(FromFtoC(parseFloat(temp))).toFixed(2)}°C`);
                
            } else {
                console.log(`${temp}°C= ${(FromCtoF(parseFloat(temp))).toFixed(2)}°F`);
                
            }
            AskAction()
        } else {
            console.clear()
            AskTemp(action)
        }50
    })
}

const AskAction = () => {
    rl.question(`What do you want to do?\n 
        1) F=> C
        2) C=> F
        0) Exit
        `,
        action => {
            if (parseInt(action) == 1 || parseInt(action) == 2) {
                console.clear()
                AskTemp(action)
            } else if (parseInt(action) == 0 || action.toLowerCase() == 'exit') {
                rl.close()
            } else {
                console.clear()
                AskAction()

            }
        }
    )
}


const FromCtoF = (temp) => (9 / 5 * temp) + 32


const FromFtoC = (temp) => (temp - 32) * (5 / 9)



AskAction()