function singeNumber(array){

    for(var i = 0 ; i<array.length ; i++){
        var isSingle = true
        for(var j = 1 ; j<array.length ; j++){
            if(array[i] == array[j]){
                isSingle = false
                break


                

            }
        }
        if(isSingle == true){
            return  array[i]
        }else{
            return -1
        }

    }


}
console.log(singeNumber(array = [4,1,2,1,2]));