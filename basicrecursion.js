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