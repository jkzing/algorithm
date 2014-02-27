var arr = [5, 2, 4, 6, 1, 3];

console.log(arr);
quicksort(arr, 0, 5);
console.log(arr);

function swap(array, a, b) {
    var tmp = 0;
    tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

function quicksort(array, left, right) {
    var pivot = array[left];
    var storeIndex = left;
    swap(array, storeIndex, right);
    for(var i = left; i <= right - 1; ++i) {
        if(array[i] < pivot) {
            swap(array, i, storeIndex);
            ++storeIndex;
        }
    }
    swap(array, storeIndex, right);
    if((storeIndex - left) > 1) quicksort(array, left, storeIndex);
    if((right - storeIndex - 1) > 1) quicksort(array, storeIndex - 1, right);
}
