// Find the maximum Element in given array 

let A=[0, 2, 0, 6, 9];
let N=5;

let max=A[0];
for(let i=0; i<=N;i++){
    if(A[i]>max){
        max=A[i];
    }
}
console.log(max)