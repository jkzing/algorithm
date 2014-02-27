var arr = [9, 4, 2, 8, 5, 1, 3, 6, 7, 0];

console.log(arr);
console.log(mergeSort(arr));

function mergeSort(array) {
    if(array.length > 1) {
        var midNum = array.length/2;
        var arr1 = array.slice(0, midNum);
        var arr2 = array.slice(midNum);
        arr1 = mergeSort(arr1);
        arr2 = mergeSort(arr2);

        return mergeArray(arr1, arr2);
    } else {
        return array;
    }
}

function mergeArray(arr1, arr2) {
    var i = 0;
    var j = 0;
    var mergedArr = [];
    // while(true) {
    //     if(arr1[i] < arr2[j]) {
    //         mergedArr.push(arr1[i]);
    //         ++i;
    //     } else {
    //         mergedArr.push(arr2[j]);
    //         ++j;
    //     }

    //     if(i == arr1.length) {
    //         mergedArr = mergedArr.concat(arr2.slice(j));
    //         break;
    //     } else if(j == arr2.length) {
    //         mergedArr = mergedArr.concat(arr1.slice(i));
    //         break;
    //     }
    // }

    //improve above code
    while(i < arr1.length && j < arr2.length) {
        arr1[i] < arr2[j] ? mergedArr.push(arr1[i++]) : mergedArr.push(arr2[j++]);
    }
    mergedArr = i == arr1.length ? mergedArr.concat(arr2.slice(j)) : mergedArr.concat(arr1.slice(i));
    return mergedArr;
}
