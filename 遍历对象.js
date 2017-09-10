
function type(o){
    var toString = Object.prototype.toString;
    var map = {
        '[object Object]': 'object',
        '[object Array]': 'array'
    }

    var t = toString.call(o)
    return map[t]

}
function traverseObj(o){
    console.log(o)
    if(type(o) === 'array'){
        for(var i = 0; i < o.length; i++){
            traverseObj(o[i])
        }
    }else if(type(o) === 'object'){
        for(var i in o){
            traverseObj(o[i])
        }
    }
}