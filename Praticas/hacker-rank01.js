
// function compareTriplets(a, b) {

//   let arrayRes = [0,0]
//   for(let i = 0; i < a.length; i++){
//     if(a[i] == b[i]){
//       //ninguem ganha pontos

//     }else if(a[i] > b[i]){
//       //Alice ganha pontos
//       arrayRes[0] += 1

//     }else{
//       //Bob ganha pontos
//       arrayRes[1] += 1

//     }

//   }

//   return console.log(arrayRes)


// }
// compareTriplets([5,6,7],[3,6,10])

// function aVeryBigSum(ar) {
//   // Write your code here
//   let soma = 0;
//   for(let i = 0; i < ar.length; i++){
//     soma += ar[i]

//   }
//   return console.log(soma)

// }

// aVeryBigSum([5,1000,1000,1000])



function diagonalDifference() {
  // Write your code here
  let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];


  let diagonalEsq = 0;
  let diagonalDir = 0;
  let n = arr.length;


  
  for (let i = 0; i < n; i++) {

    diagonalEsq += arr[i][i];

    console.log(arr[i][i]);

    diagonalDir += arr[i][n - 1 - i]

    console.log(arr[i][n - 1 - i]);
   

  }

  return Math.abs(diagonalDir - diagonalEsq); 

  //tamanho da coluna -1 e linha 0
  // tamnho da culuna -1 -index e linha 1 ou seja linha +1

}

console.log(diagonalDifference())