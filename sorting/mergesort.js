// Merge function to merge two sorted subarrays into one sorted array
function merge(arr, start, mid, end){
	const left = arr.slice(start, mid + 1);
	const right = arr.slice(mid + 1, end + 1);
	let i = 0, j = 0, k = start;
	
	//Merge left and right array into the main array
	while(i < left.length && j < right.length){
		if(left[i] <= right[j]){
			arr[k] = left[i];
			i++;
		}else{
			arr[k] = right[j];
			j++;
		}
		k++;
	}
	
	//Copy remaining elements from left array(if any)
	while(i < left.length){
		arr[k] = left[i];
		i++;
		k++;
	}
	
 // Copy remaining elements from right array (if any)
 	while(j < right.length){
 		arr[k] = right[j];
 		j++;
 		k++;
 	}
}


// MergeSort function that recursively splits and sorts the array
function mergesort(arr, start, end){
	if(start < end){
		const mid = Math.floor(start + (end-start)/2);
		
		// Recursively sort first and second halves
		mergesort(arr, start, mid);
		mergesort(arr, mid+1, end);
		
		// Merge the sorted halves
		merge(arr, start, mid, end);
	}
}

// Utility function to print the array
function printArray(arr){
	console.log(arr.join(' '));
}


//Usage
const arr = [12, 11, 13, 5, 6, 7];

console.log("Given array is: ");
printArray(arr);

mergesort(arr, 0, arr.length-1);

console.log("Sorted array is: ");
printArray(arr);











