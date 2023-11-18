
async function start(){
  const data = await fetch('http://api.weather.gov/gridpointts/OKX/35,35/forecast');
  const result = await data.json();
  console.log(result)
  // tutorial use this bottom command Ask someone to help u to execute this command
  //console.log(restult.properties.periods[1].shortForecast)
}
async function start2(){
  fetch('http://api.weather.gov/gridpointts/OKX/35,35/forecast')
  .then(data =>data.json())
  .then(result=>{
    console.log(result.properties.period[1].shortForecast)
  })
}
start()

 
/*
1 async and await must be used together Exception:JS Modules & Chrome DevTools Console
2 async/await only affects Promise Reciever
3 you can await any function that returns a Promise
4 Any Function can be converted to async
5 all async fuctions return a promise.
6 Error handing  with try Catch.

*/
