function plusOne(array) {
    let n = array.length;

    

    for (let i = n - 1; i >= 0; i--) {
        if (array[i] < 9) {
            array[i] += 1;

            return array;
        }
        array[i] = 0;
    }
    

    array.unshift(1);
    return array;
}


let array = [1, 2, 3];
console.log(plusOne(array)); 
