#include <stdio.h>

void pnt(int arr[], int length);
void swap(int* arr, int a, int b);
void bubblesort(int* arr, int length);

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
    int tmp = *(arr + a);
    *(arr + a) = *(arr + b); *(arr + b) = tmp;
}

void bubblesort(int* arr, int length)
{
    int i = length;
    while(i > 0)
    {
        int j = 0;
        while(j < i - 1)
        {
            if(*(arr + j) > *(arr + j + 1))
            {
                swap(arr, j, j + 1);
            }
            j++;
        }
        i--;
    }
}

int main()
{
    int array[] = {5, 2, 0, 3, 1, 4};
    pnt(array, 6);
    bubblesort(array, 6);
    pnt(array, 6);
    return 0;
}
