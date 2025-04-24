const readline = require("readline");

const limits =[];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const GetPrimos = () => {
    let primos = [1, 2,];
    let i = 3;

    do {
        let isPrimo = true;
        for (let j = 1; j < primos.length; j++) {
            
            if(i % primos[j] == 0){
                isPrimo = false
                break
            }
            
        }
        if(isPrimo){
            primos.push(i)
        }
        if(primos.length == limits[0]){
            break
        }
        i++

    } while (true);
    return primos
    // for (let i = 3; i <= limits[1]; i++) {
    //     let isPrimo = true;
       
        
    //     for (let j = 1; j < primos.length; j++) {
            
    //         if(i % primos[j] == 0){
    //             isPrimo = false
    //             break
    //         }
            
    //     }
    //     if(isPrimo){
    //         primos.push(i)
    //     }

    // }
    
    // return  primos.filter(v => v >= limits[0])
}



rl.question('Ammount of numbers (default : 0): ', (min)=>{
    min = parseInt(min)
    if(!isNaN(min)){
        limits[0] =min ;
        console.log(GetPrimos());
        process.exit()
    }

})




