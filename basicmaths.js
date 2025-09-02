function countDigits(n) {
    let newNum = n, counter = 0;
    while(newNum>0) {
        newNum = Math.floor(newNum/10);
        counter++;
    }
    return counter;
}
console.log('countDigits: ',countDigits(45789))

function digitReverse(n) {
    let reverse = 0;
    let sign = Math.sign(n);
    n = Math.abs(n);
    while(n>0) {
        let rem = n%10;
        reverse = reverse*10 + rem;
        n = Math.floor(n/10);
    }
    return reverse*sign;
}
console.log('digitReverse: ', digitReverse(1534236469))

function checkPalindrome(n) {
    let reverse = 0;
    let dup = n;
    while(dup>0) {
        let rem = dup%10;
        reverse = reverse*10 + rem;
        dup = Math.floor(dup/10);
    }
    if(n<0) return false;
    else return n==reverse;
}
console.log('checkPalindrome: ', checkPalindrome(-121));

function checkArmstrong(n) {
    let sum = 0;
    let dup = n;
    while(dup>0) {
        let rem = dup%10;
        sum = sum + rem*rem*rem;
        dup = Math.floor(dup/10);
    }
    return n == sum ? true : false;
}
console.log('checkArmstrong: ', checkArmstrong(371));

function allDivisors(n) {
    let divisors = [];
    for(let i=1; i<=Math.sqrt(n); i++) {
        // or check i*i < n
        if(n%i == 0) {
            divisors.push(i);
            if(n%i != i) {
                divisors.push(n/i)
            }
        }
    }
    return divisors.sort();
}
console.log("allDivisors: ", allDivisors(12345));

function checkPrime(n) {
    let counter = 0;
    for(let i=1; i<=Math.sqrt(n); i++) { 
        // or check i*i < n   
        if(n%i == 0) {
            counter++;
            if(n%i !== i) {
                counter++;
            }
            if(counter > 2) return false;
        }
    }
    // if(counter > 2) return false;
    return true;
}
console.log("checkPrime: ", checkPrime(7));

function gcdMinNum(a,b) {
    let gcd = 1;
    for(let i=1; i<=(a<b?a:b);i++) {
        // or check Math.abs(a-b)
        if(a%i==0 && b%i==0) {
            gcd = i;
        }
    }
    return gcd;
}
console.log("gcdMinNum ", gcdMinNum(3,5))

function gcdBetterCase(a,b) {
    for(let i=(a<b?a:b); i>=1; i--) {
        // or initialize to Math.abs(a-b)
        if(a%i==0 && b%i==0) {
            return i;
        }
    }
}
console.log("gcdBetterCase ", gcdBetterCase(30,50))

function gcdEuclidAlgo(a,b) {
    while(Number(a)>0 && Number(b)>0) {
        if(a>b) a=a%b; else b=b%a;
        // or a=a-b; else b=b-a;
        gcdEuclidAlgo(a,b)
    }
    return a==0 ? b : a;
}
console.log("gcdEuclidAlgo ", gcdEuclidAlgo(10,12))
