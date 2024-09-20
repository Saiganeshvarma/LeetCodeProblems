function majorityElement(array){
    var count = 0

    if(array.length == 1){
        return array
    }

    for(var i = 0 ; i<array.length ; i++){
        for(var j = 1 ; j<array.length ; j++){
            if(array[i] === array[j]){
                return array[i]
            }
        }
    }
}
console.log(majorityElement([8,8,7,7,7]));



