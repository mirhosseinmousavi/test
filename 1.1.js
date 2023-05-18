//imperative
function getArray(numbers){
	let items = [];
	numbers.foreach(item => {
		items.push(item);
	});
	return items;
}

//declarative
function getArrayInDeclerative(numbers){
	let items = [];
	numbers.map(item => {
		items.push(item);
	});
	return items;
}

func execute(){
	inputs = [1,2,3];
	console.log(getArray(inputs);
	
	console.log(getArrayInDeclerative(numbers);
}
