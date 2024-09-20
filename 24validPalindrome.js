var isPalindrome = function(s) {
    var cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split("").reverse().join("");
    if (cleanedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car")); 
console.log(isPalindrome(" ")); 
