/*常规函数方法*/
/*非递归*/
function fibonacci(n){
	let res = [0, 1];

	for(let i = 2; i <= n; i ++){
		let curr = res[i - 1] + res[i - 2];
		res[i] =  curr;
	}

	return res[n];
}


/*闭包改进*/
function fibonacci_witchClosure(){
	let res = [0, 1];

	return function(n){
		if(res[n])
			return res[n];

		for(let i = 2; i <= n; i++){
			if(res[i]) 
				continue;

			res[i] = res[i - 1] + res[i -2]	;
		}

		return res[n];
	}
}

/*递归*/
function fibonacci_recursion(n){
	if(n === 0 || n === 1 ){
		return n;
	}

	let curr = fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2);

	return curr;
}

/*generator*/

function *gen_fabonacci(){

	let a = 0;
	let b = 1;
	
	while(true){
		yield c = a + b;
		a = b;
		b = c;
	}

}