var arr = [5, 2, 4, 6, 1, 3];
console.log(arr);
console.log(insertion_sort(arr));

function insertion_sort(array) {
    for(var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}
