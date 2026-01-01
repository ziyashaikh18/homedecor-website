#include<iostream>
using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void printarray(int array[], int size) {
    for(int i = 0; i < size; i++) {
        cout << array[i] << " "; // Corrected to print the array values
    }
    cout << endl;
}

void selectionsort(int array[], int size) {
    for(int step = 0; step < size - 1; step++) {
        int min_idx = step; // Corrected variable name to `min_idx` for ascending order

        for(int i = step + 1; i < size; i++) {
            if(array[i] < array[min_idx]) {
                min_idx = i;
            }
        }

        // Swap only if the min index is different from the current step index
        if(min_idx != step) {
            swap(&array[min_idx], &array[step]);
        }
    }
}

int main(){
    int data[] = {2,8,4,9,1};
    int size = sizeof(data) / sizeof(data[0]);
    selectionsort(data,size);
    cout<<"\nSorted in Ascending order";
    printarray(data,size);
}