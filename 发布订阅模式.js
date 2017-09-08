var observer = {}
var observer.clientList = [] // 订阅者列表

// 将订阅者添加至列表
observer.addClient = function(fn){
    observer.clientList.push(fn)
}

// 触发事件
observer.emit = function(){
    observer.clentList.forEach(function(fn){
        fn.apply(this, arguments)   //给回调函数中添加函数
    })
}

// observer.emit('click', 300)



/*********************进阶版本*******************/
var observer = {}
var observer.clientList = {}

// 订阅行为有两个参数决定， 订阅者， 订阅事件
observer.addClient = function(event, fn){
    if(!observer.clientList[event]){
        observer.clientList[event] = []
    }
    observer.clientList[event].push(fn)
}

//触发事件， 也有一个参数决定
observer.emit = function(event){
    var fns = observer.clentList[event],
        parm = Array.prototype.shift.call(arguments)

    if(fns && !fns.length ){
        fns.forEach(function(fn){
            fn.apply(this,parm)
        })
    }
}



//终极版本
function superObject(observer){
    var observer.clientList = {}

    // 订阅行为有两个参数决定， 订阅者， 订阅事件
    observer.addClient = function(event, fn){
        if(!observer.clientList[event]){
            observer.clientList[event] = []
        }
        observer.clientList[event].push(fn)
    }

    //触发事件， 也有一个参数决定
    observer.emit = function(event){
        var fns = observer.clentList[event],
            parm = Array.prototype.shift.call(arguments)

        if(fns && !fns.length ){
            fns.forEach(function(fn){
                fn.apply(this,parm)
            })
        }
    }
}



//符合单一职责的代码
var event = {
    clientList: {},
    addClient: function(){},
    emit: function()
}

function installEvent(o){
    for(var i in event){
        o[i] = event[i]
    }
}


// 取消订阅
event.remove = function(type, fn){
    var fns = this.clientList[type]

    if(!fns){
        return false
    }

    if(!fn){
        fns.length = 0
    }else{
        for( var l = fns.length - 1; l >= 0; l--){
            var _fn = fns[l]
            if(_fn === fn){
                fns.splice(l, 1)
            }
        }
    }
}
