const readline = require("readline");

const limits =[0];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const GetPrimos = () => {
    let primos = [1, 2,];
    

    for (let i = 3; i <= limits[1]; i++) {
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

    }
    
    return  primos.filter(v => v >= limits[0])
}


const askMax =()=>{
    rl.question('End in (required): ', (max)=>{
        max = parseInt(max)
        if(!isNaN(max)){
            limits[1] =max ;
            console.log(GetPrimos());
            process.exit()
        }else{
            askMax()
        }
        
    })
}

rl.question('Start from (default : 0): ', (min)=>{
    min = parseInt(min)
    if(!isNaN(min)){
        limits[0] =min ;
    }

    askMax()
})




