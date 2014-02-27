var arr = [5, 2, 4, 6, 1, 3];

console.log(arr);
console.log(quicksort(arr));

function quicksort(array) {
    var less = [], greater = [];
    var pivot;
    if(array.length <= 1) {
        return array;
    } else {
        pivot = array[0];
        var l = array.length;
        for(var i = 1; i < l; ++i) {
            if(array[i] < pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }
        var sorted = [];
        return sorted.concat(quicksort(less), pivot, quicksort(greater));
    }
}
