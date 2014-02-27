var arr1 = [{name: "a", value: 7}, {name: "b", value: 4}, {name: "c", value: 1},
            {name: "d", value: 3}, {name: "e", value: 0}, {name: "f", value: 8},
            {name: "g", value: 5}, {name: "h", value: 9}, {name: "i", value: 2},
            {name: "j", value: 6}];
var arr2 = [{name: "a", value: 7}, {name: "b", value: 4}, {name: "c", value: 1},
            {name: "d", value: 3}, {name: "e", value: 0}, {name: "f", value: 8},
            {name: "g", value: 5}, {name: "h", value: 9}, {name: "i", value: 2},
            {name: "j", value: 6}];

function insertion_sort(array) {
    for(var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while(j >= 0 && array[j].value > key.value) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

function sortJson(obj1, obj2) {
    if (obj1.value > obj2.value) {
        return 1;
    } else {
        return -1;
    }
}

console.log(arr1);
console.log("\n");
console.log(insertion_sort(arr1));
console.log("\n");
console.log(arr2);
console.log("\n");
arr2.sort(sortJson);
console.log(arr2);
var result = arr2.slice(0, 5);
console.log("\n");
console.log(result);

