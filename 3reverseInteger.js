function reverse(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let reversed = 0;
    while (x !== 0) {
        let digit = x % 10;
        x = parseInt(x / 10);

        if (reversed > parseInt(INT_MAX / 10) || (reversed === parseInt(INT_MAX / 10) && digit > 7)) return 0;
        if (reversed < parseInt(INT_MIN / 10) || (reversed === parseInt(INT_MIN / 10) && digit < -8)) return 0;

        reversed = reversed * 10 + digit;
    }

    return reversed;
}


let x1 = 123;
console.log(reverse(x1));


let x2 = -123;
console.log(reverse(x2)); 


let x3 = 120;
console.log(reverse(x3));
