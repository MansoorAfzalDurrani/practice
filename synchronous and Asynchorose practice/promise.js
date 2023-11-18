function getData(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(46)
    }, 1)
  })
}

async function start(){
const result = await getData();
console.log(result);
}
/*
// this fuctions and upper start both doing the same things. upperstart is simplified version.
async function start2(){
  getData()
  .then(result=>{
    console.log(result);
  })
}*/
start();