// function plusMinus(array) {

//     arr = array;
//     let positivo = 0;
//     let negativo = 0;
//     let zero = 0;
//     let n = arr.length
//     for(let i = 0; i<n; i++){
//         if(arr[i] == 0){
//             zero++;

//         }else if(arr[i] >0){
//             positivo++;

//         }else{
//             negativo++;
//         }

//     }
//     // Write your code here

//     console.log(positivo/n.toFixed(6));
//     console.log((negativo/n).toFixed(6));
//     console.log((zero/n).toFixed(6))


// }

// plusMinus([-4, 3, -9, 0, 4, 1]);

const res = document.querySelector("#res")
function staircase(n) {
    // Write your code here
    
   
    for (let i = 0; i < n; i++) {
        
        for (let j = n; j > i+1; j--) { 
             

            res.innerText += "-" 


        }

        for(let k = n+i; k >= n; k--){
            res.innerText += "#" 
            

        }

        res.innerText += "\n"



    }
    



}

staircase(4)