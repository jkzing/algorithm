#include <stdio.h>

int main()
{
    void insertion_sort(int* array, int length);
    void print_array(int* array, int length);
    int arr[] = {5, 2, 4, 6, 1, 3};
    int len = sizeof(arr)/sizeof(arr[0]);
    print_array(arr, len);
    insertion_sort(arr, len);
    print_array(arr, len);
    return 0;
}

void insertion_sort(int* array, int length)
{
    int i = 0;
    for(i = 1; i < length; i++)
    {
        int key = array[i];
        int j = i - 1;
        while(j >= 0 && array[j] > key)
        {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}

void print_array(int* array, int length)
{
    int i = 0;
    for(i = 0; i < length; i++)
    {
        printf("%d%s", array[i], " ");
    }
    printf("%s", "\n");
}
