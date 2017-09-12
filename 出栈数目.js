function popOrder(n, t){
    t = t || [1]
    if(t[n]){
        return t[n]
    }else{
        var tmp = 0, first,second;
        for(var i = 0; i< n; i++){
            first = popOrder(i,t)
            t[i] = first
            second = popOrder(n-1-i,t)
            t[n-1-i] = second
            tmp += first * second
        }
        return tmp
    }
}

popOrder(3)


核心是那个递归的公式

f(n) = f(n-1-0) * f(0) + f(n-1-1)*f(1).....f(n-1-i)*f(i)
i = 0 ~ n-1

上边的 实现是改进，为了避免多次计算相同的值，传入一个数组，如果已经计算过了就直接取出
