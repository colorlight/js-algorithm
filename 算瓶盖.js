function calbottle(n){
  let totalBottle = n
  while(n = Math.floor(n/3)){
    totalBottle += n
  }

  console.log(totalBottle)
}
