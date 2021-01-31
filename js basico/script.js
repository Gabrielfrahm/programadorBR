
//01

// const compareNumbers = (numb1, numb2) => {
//    return  numb1 > numb2 ? 'numero 01 maior ' + numb1 : 'numero 02 maior ' + numb2;
// }



// console.log(compareNumbers(5,40));

//02

// const printArray = (arr = []) => {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// printArray([8,4,7]);

// 03 

// const biggerNumber = (arr = []) => {
//     arr.sort((a,b) => b - a);
//     console.log(arr[0]);
// }

// biggerNumber([805,45,8987,521,666,48471]);

//04
// const mediaArray = (arr= []) => {
//     const sum = arr.reduce((acc, arr) => (arr + acc));
//     return  result = sum / 5;

// }

// console.log(mediaArray([5,5,1,8,4]));

//05

// const isParOrImp = (nub) => {
//     if(nub % 2 == 0){
//         console.log('o numero é par');
//     }else{
//         console.log('o numero é impar');
//     }
// }
// isParOrImp(9851651564)

// 06


// const foo = [];

// for(let i = 0; i < 101; i++){
//     if( i % 4 == 0) {
//         foo.push('pi');
//     }else{
//         foo.push(i);
//     }
// }

// console.log(foo);

//07

// const printObject = (ob= {}) => {
//     console.log(ob);
// }


// printObject({
//     modelo: 'honda',
//     placa : 'sadsad',
//     cor: 'azul'
// });

//08 

// const funcDate = (data) => {
    
//     return dates = {
//         dia: new Date(data).getDate() + 1,
//         mes : new Date(data).getMonth() + 1,
//         ano : new Date(data).getFullYear(),
//     }
// }

// console.log(funcDate('1999-02-07'))

//09

// function pessoas(listaDePessoas){
//     var maiorAltura = 0;
//     var menorAltura = 999;
//     var idades = []
//     for(let pessoa of listaDePessoas){
//         maiorAltura = maiorEntreDois(maiorAltura,pessoa.altura)
//         menorAltura = menorEntreDois(menorAltura, pessoa.altura)
//         idades.push(pessoa.idade)
//     }
//     console.log(maiorAltura)
//     console.log(menorAltura)
//     console.log(media(idades))

// }

//     pessoas([{altura:1.8,idade:23},
//      {altura:1.9,idade:27},
//      {altura:1.65,idade:33},
//      {altura:1.83,idade:44},
//      {altura:1.91,idade:45},
//      {altura:1.54,idade:16}])


//10

// function escada(altura){
//     for(let i = 1; i <=altura;i++){
//         let string = ""
//         for(let j =1 ;j<= i; j++){
//             string +="* "
//         }
//         console.log(string)
//     }
// }

// console.log(escada(5));

// let s = 'ACCGGGTTTT';



// function dnaComplement(s){
//     const revert = s.split('').reverse();
   
//     for(let i = 0; i < revert.length; i++){
//         if(revert[i] === 'A' ){
//             revert[i].replace(revert[i], 'T');
//             revert[i] = 'T';
//         }else if(revert[i] === 'T'){
//             revert[i].replace(revert[i], 'A');
//             revert[i] = 'A';
//         } else if(revert[i] === 'C'){
//             revert[i].replace(revert[i], 'G');
//             revert[i] = 'G';
//         }else if (revert[i] === 'G'){
//             revert[i].replace(revert[i], 'C');
//             revert[i] = 'C';
//         }
        
//         console.log(revert.join(''));
//     }
    
  
// }

// dnaComplement(s);


const lo = 2;
const hi = 4;
const k = 8;

function maxXor(lo, hi, k) {
    const arr = [lo,hi,k];
    let result = 0; 
    
    for(let i = 0; i < arr.length; i++){
        let xor = 0;
        for(let j = i + 1 ; j < arr.length ; j++){
            xor = arr[j] ^ xor;
            
            if( xor <= k  ){
              result = Math.max(result,xor);
            }
        }
       
    } 
    return result;
}

console.log(maxXor(lo,hi,k));


