var arr = [9, 4, 2, 8, 5, 1, 3, 6, 7, 0];

console.log(arr);
selectsort(arr);
console.log(arr);

function swap(array, a, b) {
    var tmp;
    tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

function selectsort(array) {
    for(var i = 0; i < array.length; ++i) {
        var minIt = i;
        for(var j = i + 1; j < array.length; ++j) {
            if(array[j] < array[minIt]) {
                minIt = j;
            }
        }
        swap(array, i, minIt);
    }
}