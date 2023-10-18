{
	const size = parseInt(prompt("enter the size of array: "));
	const array = [];
	for(let i=0; i<size; i++) {
		
		//Taking Input from user
		const value = parseInt(prompt('Enter Element: ',i+1));
		  array.push(value);
	}
	array.sort((a,b) => b-a);
	console.log("sorted array in desending order: ", array);
	}
	