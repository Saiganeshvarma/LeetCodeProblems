function isPowerOfThree(n){
 for(var i = 0 ; i<=30 ; i++){
    var ans = Math.pow(3,i)
    if(ans == n){
        return true
    }
 }
 return false
}
console.log(isPowerOfThree(27));