// ---------------------------- Assignment # 6 ----------------------
// -------------------------------- Q # 1 ----------------------------
// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// var num:string | null = prompt("Enter any number: ");
// var number:number = Number(num);
// var i = 1;
// while (i <= number) {
//     console.log(i);
//     i++;
// }
// -------------------------------- Q # 2 ---------------------------
// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var num:string | null = prompt("Enter any number: ");
// var number:number = Number(num);
// var i = number;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// -------------------------------- Q # 3 ---------------------------
// 3. Write a ts program to print all alphabets from a to z. - using while loop
// var i = 1;
// var largecharacter:string;
// var smallcharacter:string;
// console.log("Large Alphabet\t\tSmall Alphabet");
// while (i <= 26) {
//     largecharacter = String.fromCharCode(64 + i);
//     smallcharacter = String.fromCharCode(96 + i);
//     console.log("\t",largecharacter,"\t\t\t\t\t\t",smallcharacter);
//     i++;
// }
// ------------------------------- Q # 4 ----------------------------
// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
// var evenNum = 1;
// while (evenNum <= 100) {
//     if (evenNum % 2 == 0) {
//         console.log(evenNum);
//     }
//     evenNum++;
// }
// ------------------------------- Q # 5 -----------------------------
// 5. Write a ts program to print all odd number between 1 to 100.
// var oddNum = 1;
// do{
//     if (oddNum % 2 != 0) {
//         console.log(oddNum);
//     }
//     oddNum++;
// }while (oddNum <= 100);
// ------------------------------ Q # 6 -----------------------------
// 6. Write a ts program to find sum of all natural numbers between 1 to n.
// var num:string | null = prompt("Enter any number: ");
// var naturalNum:number = Number(num);
// var i = 1;
// var result = 0;
// while (i <= naturalNum) {
//     result = result + i;
//     i++;
// }
// console.log(result);
// ----------------------------- Q # 7 ------------------------------
// 7. Write a ts program to find sum of all even numbers between 1 to n.
// var num:string | null = prompt("Enter any even number: ");
// var evenNum:number = Number(num);
// if (evenNum % 2 != 0) {
//     console.log("Wrong Input!!, Please enter even Number");
// }
// else{
//     var sum = 0;
// for (let index = 1; index <= evenNum; index++) {
//     if (index % 2 == 0) {
//         sum = sum + index;
//     }
// }
// console.log(sum);
// }
// ----------------------------- Q # 8 -----------------------------
// 8. Write a ts program to find sum of all odd numbers between 1 to n.
// var num:string | null = prompt("Enter any odd number: ");
// var oddNum:number = Number(num);
// if (oddNum % 2 == 0) {
//     console.log("Wrong Input!!, Please enter even Number");
// }
// else{
//     var sum = 0;
// for (let index = 1; index <= oddNum; index++) {
//     if (index % 2 != 0) {
//         sum = sum + index;
//     }
// }
// console.log(sum);
// }
// ----------------------------- Q # 9 -----------------------------
// 9. Write a ts program to print multiplication table of any number.
// var num:string | null = prompt("Enter any number: ");
// var numTable:number = Number(num);
// var answer = 0;
// for (let index = 1; index <= 10; index++) {
//     answer = numTable * index;
//     console.log(numTable, "*" ,index, "="  , answer);
// }
// ----------------------------- Q # 10 -----------------------------
// 10. Write a ts program to count number of digits in a number.
// var noOfDigit:string | null = prompt("Enter any  number : ");
// var digit:number = Number(noOfDigit);
// var count = 0;
// while (digit > 1) {
//     digit = digit / 10;
//     count++;
// }
// console.log("Number of digit in a given number is : ",count);
// ----------------------------- Q # 11 -----------------------------
// Write a ts program to find first and last digit of a number.
// function firstdigit(numb:number) {
//     while (numb >= 10 ) {
//         numb = numb / 10;
//     }
//     return Math.floor(numb);
// }
// function lastdigit(numb:number) {
//     return Math.floor(numb % 10);
// }
// var num:string | null = prompt("Enter any number: ");
// var numb:number = Number(num)
// console.log("First digit is = ",firstdigit(numb),"\n","Last digit is = ",lastdigit(numb));
// ----------------------------- Q # 12 -----------------------------
// 12. Write a ts program to find sum of first and last digit of a number.
// var num:string | null = prompt("Enter any number : ");
// var digit:number = Number(num);
// var lastdigit = 0;
// lastdigit = digit % 10;
// while (digit >= 10) {
//     digit = digit / 10;
// }
// console.log("First digit is : ",Math.floor(digit));
// console.log("Last digit is : ",lastdigit);
// console.log("Sum of first and last digit is : ",Math.floor(digit + lastdigit));
// ----------------------------- Q # 13 -----------------------------
// 13. Write a ts program to swap first and last digits of a number.
// var num:string | null = prompt("Enter any number : ");
// var swap:number = Number(num);
// var a,b = 0;
// var digitCount = Math.log10(swap)
// var firstdigit = (swap / Math.pow(10,digitCount));
// var lastdigit = swap % 10;
// a = firstdigit * (Math.pow(10,digitCount));
// b = swap % a;
// swap = b / 10;
// var swapNum = lastdigit * (Math.pow(10,digitCount)) + (swap * 10 + firstdigit);
// console.log(Math.floor(swapNum));
// ----------------------------- Q # 14 -----------------------------
// 14. Write a ts program to calculate sum of digits of a number.
// var num:string | null = prompt("Enter any number : ");
// var Num:number = Number(num);
// var sum:number = 0,digit:number;
// while (Num != 0) {
//     digit = Math.floor(Num % 10);
//     sum += digit;
//     Num = Num / 10;
// }
// console.log("Sum of digits in a number : ",sum);
// ----------------------------- Q # 15 -----------------------------
// 15. Write a ts program to calculate product of digits of a number.
// var num:string | null = prompt("Enter any number : ");
// var Num:number = Number(num);
// var product:number = 1,digit:number;
// while (Num >= 1) {
//     digit =  Math.floor(Num % 10);    
//     product = product * digit;    
//     Num = Num / 10;
// }
// console.log("Product of digits in a number : ",product);
// ----------------------------- Q # 16 -----------------------------
// 16. Write a ts program to enter a number and print its reverse.
// var num:string | null = prompt("Enter any number : ");
// var reverse:number = Number(num);
// var lastdigit:number = 0,result:number = 0;
// while (reverse >= 1) {
//     lastdigit = reverse % 10;
//     reverse = reverse / 10;
//     result = Math.floor((result * 10) + lastdigit); 
// }
// console.log(result);
// ----------------------------- Q # 17 -----------------------------
// 17. Write a ts program to check whether a number is palindrome or not.
// var num:string | null = prompt("Enter any number : ");
// var palindrome:number = Number(num);
// var a:number = palindrome;
// var reminder:number = 0,reverse:number = 0;
// while (palindrome >= 1) {
//     reminder = palindrome % 10;
//     palindrome = palindrome / 10;
//     reverse = Math.floor((reverse * 10) + reminder);
// }
// console.log(reverse);
// if (a == reverse) {
//     console.log("Your number is palindrome!!!");
// }
// else{
//     console.log("Your number is not palindrome!!!");
// }
// ----------------------------- Q # 18 -----------------------------
// 18. Write a ts program to find frequency of each digit in a given integer.
// var number:string | null = prompt("Enter any number : ");
// var num:number = Number(number);
// var a:string | null = prompt("Enter the number which you want to find the frequency  : ");
// var b:number = Number(a);
// var count:number = 0,reminder:number = 0;
// while (num >= 1) {
//     reminder = num % 10;
//     if (reminder == b) {
//         count++;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(count);
// ----------------------------- Q # 19 -----------------------------
// 19. Write a ts program to enter a number and print it in words.
// var num:number = 24;
// while (num >= 0) {
// }
// ----------------------------- Q # 20 -----------------------------
// 20. Write a ts program to print all ASCII character with their values.
// var i:number = 0;
// while (i <= 255) {
//     var asci:string = String.fromCharCode(i);
//     console.log(i,"     ",asci);
//     i++;
// }
// ----------------------------- Q # 21 -----------------------------
// 21. Write a ts program to find power of a number using for loop.
// var power:number=2;
//   var value:number=3;
//   var num:number=value;
//   var i:number=1;
//   while(i<power){
//    value=value*num;
//     i++;
//   }
//   console.log(value);
// ----------------------------- Q # 22 -----------------------------
// 22. Write a ts program to find all factors of a number.
// var number:string | null = prompt("Enter any number : ");
// var num:number = Number(number);
// var result:number = 0;
// for (let index = 1; index <= num; index++) {
//     if (num % index == 0) {
//         result = index;
//         console.log(result);
//     }
// }
// ----------------------------- Q # 23 -----------------------------
// 23. Write a ts program to calculate factorial of a number.
// var number:string | null = prompt("Enter any number : ");
// var num:number = Number(number);
// var result:number = 1;
// for (let index = 0; index < num; index++) {
//     result = result * (num - index);
// }
// console.log("Factorial of a given number is = ",result);
// ----------------------------- Q # 24 -----------------------------
// 24. Write a ts program to find HCF (GCD) of two numbers.
// var a:number = 35;
// var b:number = 55;
// var hcf:number = 1;
// for (let index = 0; index <= a || index <= b ; index++) {
//     if (a % index == 0 && b % index == 0) {
//         hcf = index;
//     }    
// }
//     console.log(hcf);
// ----------------------------- Q # 26 -----------------------------
// 26. Write a ts program to check whether a number is Prime number or not.
// var a:number = 100;
// var m:number = 0,flag:number = 0;
// m = a / 2;
// if (a == 0 || a == 1) {
//     console.log("Your number is not prime number!!!");
// }
// else{
// for (let index = 2; index <= m ; index++) {
//     if (a % index == 0) {
//         console.log("Your number is not prime number!!!");
//         flag == 1;
//         break;
//     }
// }
//     if(flag == 0){
//         console.log("Your number is prime number!!!");
//     }
// }
// ----------------------------- Q # 30 -----------------------------
// var a:number=371;
//   var c:number=a;
//   var b:number=0;
//   var sum:number=0;
//   while(a>=1){
//     b=a%10;
//     a=Math.floor(a/10)
//     sum=sum+(b*b*b);
//   }
//   if(sum==c){
//     console.log("this is armstrong number "); }
//   else{
//     console.log("It is not armstrong number"); }
// ----------------------------- Q # 32 -----------------------------
// var sum:number=0;
// var i:number=1;
// var num:number=8128;
// while(i<num){
//     if(num%i==0){
//         sum=sum+i;
//     }
//     i++
// }
// if(sum==num){
//     console.log("it is perfect number");}
//     else{
//         console.log("it is not perfect number")}
