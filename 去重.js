function delRep(a){
  var b = {},
      c = []

  a.forEach(function(v){
    if(!b[v]){
      b[v] = true
      c.push(v)
    }
  })

  return c
}
