function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}


console.log(romanToInt("II"));
console.log(romanToInt("XII")); 
console.log(romanToInt("XXVII")); 
console.log(romanToInt("IV")); 
console.log(romanToInt("IX")); 
console.log(romanToInt("XL"));
console.log(romanToInt("XC")); 
console.log(romanToInt("CD")); 
console.log(romanToInt("CM")); 
