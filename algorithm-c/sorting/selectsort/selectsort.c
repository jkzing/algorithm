#include <stdio.h>

void pnt(int arr[], int length);
void swap(int* arr, int a, int b);
void selectsort(int* arr, int length);

void pnt(int arr[], int length)
{
    int i = 0;
    while(i < length)
    {
        printf("%d%s", arr[i++], " ");
    }
    printf("\n");
}

void swap(int* arr, int a, int b)
{
    int tmp = 0;
    tmp = *(arr + a); *(arr + a) = *(arr + b); *(arr + b) = tmp;
}

void selectsort(int* arr, int length)
{
    int i = 0;
    while(i < length)
    {
        int minIndex = i;
        int j = i + 1;
        while(j < length)
        {
            if(*(arr + j) < *(arr + minIndex))
            {
                minIndex = j;
            }
            j++;
        }
        swap(arr, i, minIndex);
        i++;
    }
}

int main()
{
    int array[] = {5, 2, 0, 3, 1, 4};
    pnt(array, 6);
    selectsort(array, 6);
    pnt(array, 6);
    return 0;
}
