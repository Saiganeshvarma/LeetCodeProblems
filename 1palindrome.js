var isPalindrome = function(x){
    if(x<0){
        return false
    }else{
        var str = x.toString()
        var reversedStr = str.split('').reverse().join('')
        if(str === reversedStr){
            return true
        }
    
    }return false
}
var number = 121
var result = isPalindrome(number)
console.log(result);