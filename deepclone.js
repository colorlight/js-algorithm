function type(obj) {
	var toString = Object.prototype.toString;
	var map = {
	    '[object Boolean]'  : 'boolean',
	    '[object Number]'   : 'number',
	    '[object String]'   : 'string',
	    '[object Function]' : 'function',
	    '[object Array]'    : 'array',
	    '[object Date]'     : 'date',
	    '[object RegExp]'   : 'regExp',
	    '[object Undefined]': 'undefined',
	    '[object Null]'     : 'null',
	    '[object Object]'   : 'object'
	};
	return map[toString.call(obj)];
}

function deepClone(data) {
	var t = type(data), o, i, ni;

	if(t === 'array') {
	    o = [];
	}else if( t === 'object') {
	    o = {};
	}else {
	    return data;
	}

	if(t === 'array') {
	    for (i = 0, ni = data.length; i < ni; i++) {
	        o.push(deepClone(data[i]));  // 生成一个数组
	    }
	    return o;
	}else if( t === 'object') {
	    for( i in data) {
	        o[i] = deepClone(data[i]);  // 生成一个对象
	    }
	    return o;
	}
}

// Object.prototype.$isFunction(){
//   return typeof this === 'function'
// }
//
// Object.prototype.$isPlainObject(){
//   return typeof this === 'object'
// }
// Object.prototype.$clone =  function (srcStack, dstStack) {
//         var obj = Object.create(Object.getPrototypeOf(this)),
//             keys = Object.keys(this),
//             index,
//             prop;
//
//         srcStack = srcStack || [];
//         dstStack = dstStack || [];
//         srcStack.push(this);
//         dstStack.push(obj);
//
//         for (var i = 0; i < keys.length; i++) {
//             prop = this[keys[i]];
//             if (prop === null || prop === undefined) {
//                 obj[keys[i]] = prop;
//             }
//             else if (!prop.$isFunction()) {
//                 if (prop.$isPlainObject()) {
//                     index = srcStack.lastIndexOf(prop);
//                     if (index > 0) {
//                         obj[keys[i]] = dstStack[index];
//                         continue;
//                     }
//                 }
//                 obj[keys[i]] = prop.$clone(srcStack, dstStack);
//             }
//         }
//         return obj;
//     }
//
//

function type(obj){
  var toString = Object.prototype.toString
  var map = {
    '[object Object]' : 'object',
    '[object Array]'  : 'array'
  }

  return map[toString.call(obj)]
}

function deepClone(obj){
  var len, o , i, t = type(obj)
  if( t === 'object' ){
     o = {}
  }else if( t === 'array'){
     o = []
  }else{
    return obj
  }

  if( t === 'object' ){
    for( i in obj){
      o[i] = deepClone(obj[i])
    }
  }else{
    for( i = 0, len = obj.length; i < len; i++){
        o.push(deepClone(obj[i]))
    }
  }

  return o
}



function type(obj){
  var toString = Object.prototype.toString
  var map = {
    '[object Object]' : 'object',
    '[object Array]'  : 'array'
  }

  return map[toString.call(obj)]
}

function deepClone(obj, srcStack){
  var index, len, o , i, t = type(obj)
	srcStack = srcStack || []
	srcStack.push(obj)

  if ( t === 'object' ){
      o = {}
  }else if( t === 'array'){
	  o = []
  }else{
	  return obj
  }

  if( t === 'object' ){
    for (i in obj) {
		index = srcStack.indexOf(obj[i])
		if(index < 0 ){
			o[i] = deepClone(obj[i])
		}else{
			o[i] = srcStack[index]
		}
    }
  }else{
    for( i = 0, len = obj.length; i < len; i++){
		index = srcStack.indexOf(obj[i])
		if (index < 0) {
			o.push(deepClone(obj[i]))
		}else{
			o[i] = srcStack[index]
		}
    }
  }

  return o
}
