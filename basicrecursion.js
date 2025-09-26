// Print name n times using recursion
console.log("Print name n times using recursion")
function printName(i,n) {
    if(i>n) return;
    process.stdout.write('Deep\n');
    printName(i+1,n)
}
printName(1,5);

console.log("\nPrint 1->N in linear fashion")
function printNumber1toNLinear(i,n) {
    if(i>n) return;
    process.stdout.write(`${i}\n`);
    printNumber1toNLinear(i+1,n)
}
printNumber1toNLinear(1,5);

console.log("\nPrint N->1 in linear fashion")
function printNumberNto1Linear(i,n) {
    if(i<1) return;
    process.stdout.write(`${i}\n`)
    printNumberNto1Linear(i-1,n)
}
printNumberNto1Linear(5,5)

console.log("\nPrint 1->N using backtracking")
function printNumber1toNBacktracking(i,n) {
    if(i<1) return;
    printNumber1toNBacktracking(i-1,n)
    process.stdout.write(`${i}\n`)
}
printNumber1toNBacktracking(5,5)

console.log("\nPrint N->1 using backtracking")
function printNumberNto1Backtracking(i,n) {
    if(i>n) return;
    printNumberNto1Backtracking(i+1,n)
    process.stdout.write(`${i}\n`)
}
printNumberNto1Backtracking(1,5)

console.log("\nSum of first n numbers using functional recursion")
function sumOfFirstNnumbersFunctional(n) {
    if(n==0) return 0;
    return n + sumOfFirstNnumbersFunctional(n-1);
}
console.log('sumOfFirstNnumbersFunctional => ', sumOfFirstNnumbersFunctional(6))

console.log("\nSum of first n numbers using parameterised recursion")
function sumOfFirstNnumbersParameterised(i,n) {
    if(i<=1) {
        process.stdout.write(`${n}`);
        return;
    }
    sumOfFirstNnumbersParameterised(i-1, n + i-1)
}
sumOfFirstNnumbersParameterised(6,6);

console.log("\nFactorial of N numbers")
function factorialOfNnumbers(n) {
    if(n<=1) return 1;
    return n*factorialOfNnumbers(n-1)
}
console.log(factorialOfNnumbers(5))

console.log("\nReverse an array - Two pointers")
function reverseArrayTwoPointers(arr) {
    for(let i=0; i<arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
}
reverseArrayTwoPointers([2,3,4,7,5,1,6])

console.log("\nReverse an array - Recursion")
function reverseArrayRecursion(l,r,arr) {
    if(l>=r) return arr;
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return reverseArrayRecursion(l+1,r-1,arr)
}
let arr = [5,6,7,3,2,1,9]
console.log('reverseArrayRecursion, ', reverseArrayRecursion(0,arr.length-1, arr))

console.log("\nCheck Palindrome - Recursion")
function checkPalindrome(l,r,arr) {
    if(l>=r) {
        return true;
    }
    if(arr[l] !== arr[r]) return false;
    return checkPalindrome(l+1,r-1,arr)
}
let stringVal = 'MALAYALAM'
let arrVal = stringVal.split('')
console.log('checkPalindrome, ',checkPalindrome(0,arrVal.length-1, arrVal))

// console.log("\nFibinacci series - Recursion")
// function fibinacciSeriesTillN(n) {
//     if(n<=1) return n;
//     l = n-1;
//     s = n-2; 
// }