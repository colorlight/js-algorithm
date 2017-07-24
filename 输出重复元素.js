//我的初级实现
//往repArr中push元素需要满足两个条件
// 第一已经有定义了，
// 第二还没有入栈

//维护是否被定义的是通过一个对象temp，来观察temp是否有相应属性
//维护是否入栈，旧查看对象temp的值是否是true， 如果是true未入栈
function duplicates(arr) {
    var temp = {};
    var repArr = [];
	arr.forEach(function(v,i,arr){
        if(!temp[v]){
            temp[v] = true;
        }else{
            if(temp[v] === true){
            	repArr.push(v);
                temp[v] = false;
            }
        }
    })

    return repArr;
}
