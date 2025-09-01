function alphabetRightTrianglePattern(n) {
    let charCode = 'A'.charCodeAt(0);
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            process.stdout.write(String.fromCharCode(charCode)+' ');
            charCode++;
        }
        process.stdout.write('\n');
    }
}
alphabetRightTrianglePattern(5);

function alphabetInvertedRightTrianglePattern1(n) {
    for(let i=1; i<=n; i++) {
        let charCode = 'A'.charCodeAt(0);
        for(let j=1; j<=n-i+1; j++) {
            process.stdout.write(String.fromCharCode(charCode)+' ');
            charCode++;
        }
        process.stdout.write('\n');
    }
}
alphabetInvertedRightTrianglePattern1(5);

function alphabetInvertedRightTrianglePattern2(n) {
    for(let i=n; i>=1; i--) {
        let charCode = 'A'.charCodeAt(0);
        for(let j=1; j<=i; j++) {
            process.stdout.write(String.fromCharCode(charCode)+' ');
            charCode++;
        }
        process.stdout.write('\n');
    }
}
alphabetInvertedRightTrianglePattern2(5);

function alphabetRightTrianglePattern(n) {
    
    for(let i=1; i<=n; i++) {
        let charCode = 'A'.charCodeAt(0);
        for(let j=1; j<=i; j++) {
            process.stdout.write(String.fromCharCode(charCode)+' ');
            charCode++;
        }
        process.stdout.write('\n');
    }
}
alphabetRightTrianglePattern(5);

function alphabetRepeatingPattern(n) {
    let charCode = 'A'.charCodeAt(0);
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            process.stdout.write(String.fromCharCode(charCode)+' ');
        }
        charCode++;
        process.stdout.write('\n');
    }
}
alphabetRepeatingPattern(5);

function binaryRightTrianglePattern(n) {
  for(let i=1; i<=n; i++) {
    let start = i%2;
    for(let j=1; j<=i; j++) {
      process.stdout.write(`${start} `)
      start = Number(!start);
    }
    process.stdout.write('\n')
  }
}
binaryRightTrianglePattern(5);

function incrementalPatternRightTrianglePattern(n) {
    let num = 1;
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            process.stdout.write(`${num} `);
            num++;
        }
        process.stdout.write('\n');
    }
}
incrementalPatternRightTrianglePattern(5);

function sidebysideRightTrianglePattern(n) {
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            process.stdout.write(`${j}`)
        }
        for(let j=1; j<=2*(n-i); j++) {
            process.stdout.write(` `)
        }
        for(let j=i; j>=1; j--) {
            process.stdout.write(`${j}`)
        }
        process.stdout.write('\n')
    }
}
sidebysideRightTrianglePattern(5);

function pattern17(n) {
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n-i; j++) {
            process.stdout.write(" ");
        }
        let charCode = 'A'.charCodeAt(0);
        for(let k=1; k<=i; k++) {
            process.stdout.write(String.fromCharCode(charCode));
            charCode++;
        }
        let charCode2 = 'A'.charCodeAt(0);
        for(let l=1; l<= i-1; l++) {
            process.stdout.write(String.fromCharCode(charCode2));
            charCode2++;
        }
        process.stdout.write('\n')
    }
}
pattern17(5);

console.log('\nPattern 18');
function pattern18(n) {
    for(let i=1; i<=n; i++) {
        let charCode = 'A'.charCodeAt(0)+n-i;
        for(let j=1; j<=i; j++) {
            process.stdout.write(String.fromCharCode(charCode));
            charCode++;
        }
        process.stdout.write('\n')
    }
}
pattern18(5)

console.log('\nPattern 19');
function pattern19(n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-i; j++) {
            process.stdout.write("*")
        }
        for(let k=0; k<2*i; k++) {
            process.stdout.write(' ')
        }
        for(let l=0; l<n-i; l++) {
            process.stdout.write("*")
        }
        process.stdout.write('\n')
    }
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            process.stdout.write("*")
        }
        for(let k=1; k<=2*n-2*i; k++) {
            process.stdout.write(' ')
        }
        for(let l=1; l<=i; l++) {
            process.stdout.write("*")
        }
        process.stdout.write('\n')
    }
}
pattern19(5)

console.log('\nPattern 20');
function pattern20(n) {
    // for(let i=1; i<=n; i++) {
    //     for(let j=1; j<=i; j++) {
    //         process.stdout.write('*');
    //     }
    //     for(let k=1; k<=2*(n-i); k++) {
    //         process.stdout.write(' ');
    //     }
    //     for(let l=1; l<=i; l++) {
    //         process.stdout.write('*')
    //     }
    //     process.stdout.write('\n')
    // }
    // for(let i=1; i<=n-1; i++) {
    //     for(let j=1; j<=n-1-i+1; j++) {
    //         process.stdout.write('*');
    //     }
    //     for(let k=1; k<=2*(i-1)+2; k++) {
    //         process.stdout.write(' ');
    //     }
    //     for(let l=1; l<=n-1-i+1; l++) {
    //         process.stdout.write('*')
    //     }
    //     process.stdout.write('\n')
    // }
    for(let i=1; i<=2*n-1; i++) {
        let stars = i>n ? 2*n-i : i;
        for(let j=1; j<=stars;j++) {
            process.stdout.write('*')
        }
        let spaces = i > n ? 2*(i-n) : 2*(n-i);
        for(let j=1; j<=spaces; j++) {
            process.stdout.write(' ')
        }
        for(let j=1; j<=stars;j++) {
            process.stdout.write('*')
        }
        process.stdout.write('\n')
    }
}
pattern20(5);

console.log('\nPattern 21');
function pattern21(n) {
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n;j++){
            if(i==1 || i== n) {
                process.stdout.write('*')
                continue;
            }
            else {
                if(j== 1 || j==n){
                    process.stdout.write('*')
                }
                else {
                    process.stdout.write(' ')
                }
            }
        }
        process.stdout.write('\n')
    }
}
pattern21(10);

function min(n1,n2) {
    return n1 > n2 ? n2 : n1;
}
console.log('\n Pattern 22')
function pattern22(n) {
    for(let i=0; i<2*n-1; i++) {
        for(let j=0; j<2*n-1;j++){
            let top = i, bottom = (2*n-2) -  i;
            let left = j, right = (2*n-2) - j;
            process.stdout.write(String(n - min(min(top, bottom), min(left,right))))
        }
        process.stdout.write('\n')
    }
}
pattern22(4)