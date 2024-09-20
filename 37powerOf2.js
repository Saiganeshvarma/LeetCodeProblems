function powerOfTwo(n){
    for(var i = 0; i<=3000 ; i++){
        var ans = Math.pow(2,i)
        if(ans == n){
            return true
        }
    }
    return false

}
console.log(powerOfTwo(16));


