// Identify Prime
// A prime number is a number, that is divisible by only 1 and the number itself

/* 
    pseudo code

    iterate in loop

    for(i=2; i<=number; i++){

        check condintion if that particular element devide by
        any number between that main number
        means ex- number=13
        so we check 13%2==0, 13%3==0, 13%4==0 .. and so one then if we get more than
        one divide so simply not a prime if only one so its a prime

        if(number%i==0){
            count++
        }
    }

    then check if ==1 so its a prime

    if(count==1)
    console.log(yes)
    console.log(No)

*/

let count = 0;
for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 1) {
  console.log("Yes");
} else {
  console.log("No");
}
