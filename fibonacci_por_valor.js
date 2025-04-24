const readline = require("readline");

const limits =[0];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const Fibro =()=>{
    let fibro =[0,1];

//     if(limits[0] != 0){
//         limits[0] --
//     }

//     for (let i = 3; i < limits[1]; i++) {
//         fibro[i] = fibro[i-1] + fibro[i-2]  
        
//     }

//    return fibro.slice(limits[0]);
    
let i = 2;
do {

    const newvalue = fibro[i-1] + fibro[i-2]
     
    if(newvalue <= limits[1]){
        i++
        fibro.push(newvalue)
    }else{
        break
    }
    
} while (true);
    
return fibro.filter(v => v <= limits[1] && v >= limits[0])
}   


const askMax =()=>{
    rl.question('End in (required): ', (max)=>{
        max = parseInt(max)
        if(!isNaN(max)){
            limits[1] =max ;
            console.log(Fibro());
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




