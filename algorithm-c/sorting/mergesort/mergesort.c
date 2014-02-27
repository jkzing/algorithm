#include <stdio.h>

int main()
{
    void pnt(int arr[], int len);
    void merge_array(int* arr1, int len1, int* arr2, int len2);
    void merge_sort(int* arr, int length);

    int array[] = {6, 2, 0, 8, 3, 1, 7, 9, 4, 5};
    pnt(array, 10);
    merge_sort(array, 10);
    pnt(array, 10);
}

void pnt(int arr[], int len)
{
    int i = 0;
    while(i < len)
    {
        printf("%d%s", arr[i++], " ");
    }
    printf("\n");
}

void merge_array(int* arr1, int len1, int* arr2, int len2)
{
    int i, j, k;
    i = j = k = 0;
    int merged_arr[len1 + len2];
    while(i < len1 && j < len2)
    {
        merged_arr[k++] = *(arr1 + i) < *(arr2 + j) ? *(arr1 + i++) : *(arr2 + j++);
    }

    while(i < len1)
    {
        merged_arr[k++] = *(arr1 + i++);
    }

    while(j < len2)
    {
        merged_arr[k++] = *(arr2 + j++);
    }

    int ii = 0;
    while(ii < k)
    {
        *(arr1 + ii) = merged_arr[ii];
        ii++;
    }
}

void merge_sort(int* arr, int length)
{
    if(length > 1)
    {
        int mid = (int)length/2;
        int* arr1 = arr;
        int* arr2 = arr + mid;
        merge_sort(arr1, mid);
        merge_sort(arr2, length - mid);

        merge_array(arr1, mid, arr2, length - mid);
    }
    
}
