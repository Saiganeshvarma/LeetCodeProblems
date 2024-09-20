function isHappy(n){
    while(n != 1){
        var digits = n.toString().split('');
        var firstDigit = parseInt(digits[0], 10);
        var secondDigit = parseInt(digits[1], 10);
         n = firstDigit*firstDigit+secondDigit*secondDigit

    }
    if(n== 1){
        return true
    }else{
        false
    }



}
console.log(isHappy(2));