var arr = [9, 4, 2, 8, 5, 1, 3, 6, 7, 0];

console.log(arr);
bubblesort(arr);
console.log(arr);

function swap(array, a, b) {
    var tmp;
    tmp = array[a];array[a] = array[b];array[b] = tmp;
}

function bubblesort(array) {
    for (var i = array.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}