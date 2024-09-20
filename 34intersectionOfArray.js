function intersectionOfArray(array1,array2){
    var newArray = []
    for(var i = 0 ; i<array1.length ; i++){
        if(!newArray.includes(array1[i])){
            newArray.push(array1[i])
        }
    }
    for(var j = 0 ; j<array2.length ; j++){
        if(!newArray.includes(array2[j])){
            newArray.push(array2[j])
        }
    }
    return newArray

}
console.log(intersectionOfArray([1,2,2,1],[2,2]));