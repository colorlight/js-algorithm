function statistic(arr, item){
	let cnt = 0;
	arr.forEach(function(ele, index){
		if(ele === item){
			cnt++;
		}
	})

	return cnt;
}