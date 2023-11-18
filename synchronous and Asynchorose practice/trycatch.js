function getData(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      //resolve('Here is your DATA')
      reject('Something Went Wrong')
    },10
    )
  })
}
async function start(){
  try{
    const restult= await getData()
    // Success code
  }catch(error){
  console.log(`ERROR: ${error}`)
  // Failure code 
  }
}
/*
// THIS CODE WAS STILL EXECUTING EVEN THOUGH CATCH EXECUTED IN TRY CATCH BLOCK WHICH IS A PROMBLEM IS REAL WORLD.
async function start2(){
  const result = await getData()
  .catch(error=>{
    console.log(`Error: $(error)`)
  })
  console.log('start2  '+result)
}*/
start2()