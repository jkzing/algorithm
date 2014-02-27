#include <stdio.h>

inline void swap(int* a, int* b)
{
    int tmp;
    tmp = *a; *a = *b; *b = tmp;
}

int main()
{
    void pnt(int arr[], int length);
    void quicksort(int* arr, int left, int right);

    int array[] = {8, 4, 7, 5, 1, 0, 8, 9, 2, 6, 9, 5, 3};
    pnt(array, 13);
    quicksort(array, 0, 12);
    pnt(array, 13);
    return 0;
}

void pnt(int arr[], int length)
{
    int i = 0;
    while(i < length)
    {
        printf("%d%s", arr[i], " ");
        ++i;
    }
    printf("\n");
}

void quicksort(int* arr, int left, int right)
{
    int pivot = *(arr + left);
    swap(arr + left, arr + right);
    int storeIndex = left;
    int i = 0;
    for(i = left; i <= right - 1; ++i)
    {
        if(arr[i] < pivot)
        {
            swap(arr + storeIndex, arr + i);
            storeIndex++;
        }
    }
    swap(arr + storeIndex, arr + right);
    if((storeIndex - left) > 1) quicksort(arr, left, storeIndex);
    if((right - storeIndex - 1) > 1) quicksort(arr, storeIndex + 1, right);
}
