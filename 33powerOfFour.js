function isPowerOfFour (n){
    for(var i = 0 ; i<=30 ; i++){
        var ans = Math.pow(4,i)
        if(ans == n){
            return true
        }
    }
    return false
}
console.log(isPowerOfFour(17));