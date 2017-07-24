function deleteItem(oldArray, item){
	let newArray = [];
	for(let i = 0, currItem; currItem = oldArray[i++];){
		if(currItem !== item){
			newArray.push(currItem);
		}
	}
}

function delteItemWithFilter(arr, item){
	return arr.filter((ele) =>{
		if(ele === item)
			return false;
		else
			return true;
	});
}

function filter(fn){
	let a = [];
	
	for(let i = 0, ele; ele = this[i++];){
		if(fn(ele))
			a.push(ele);
	}

	return a;
}

