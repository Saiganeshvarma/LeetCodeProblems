function fizzBuzz(n){
    var array = []
    for(var i = 1 ; i<=n ; i++){
        if(i%3 == 0 && i%5 == 0){
             array.push("fizzBuzz")
        }else if(i%3 == 0){
             array.push("fizz")
        }else if(i%5 == 0){
             array.push("buzz")
        }else{
             array.push(i.toString())
        }


    }
    return array
    
}
console.log(fizzBuzz(3));