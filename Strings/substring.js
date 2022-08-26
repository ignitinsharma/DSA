//--> Genrate the sub string in given string
// abcab
// bcab
// cab 
// ab 
// b

let str = 'abcab';

for(let i=0; i<str.length; i++){
    let bag=""
    for(let j=i; j<str.length; j++){
        bag+=str[j]
    }
    console.log(bag);
}