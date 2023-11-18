

Promises and Asyn/Await
            Lecture Outcomes
1 Define asynchronous and synchronous Programing
2 Identify use-cases for asynchronous code
3 Explain the relationship between Promises and async/await
4 Use the async/await keywords to make acynchronous API calls
5 apply Promise chain for erro handling.

Synchronous vs Asynchronous 

1 Synchronous program 
Make Request-> wait for Response-> use response -> Do something else....
 const result =makeCalltoBackend();
 process(result);
 const nextResult=makeADifferenceCall();
 process(nextResult);

 2 Asynchrouos Programming
 Tasks executed concurrently
 Multiple requests can be started at the same time(simultaneously)
 Potential for completing more task in a shorter period of time.

 Considerations
 Depandencies between tasks require sychronicity.
 e.g ensuring a credit card has bee charged before sending an order confimation to the factory. if you do those aynchronously to each other then you might put in a successuful order while the charge fail.
 Good condidates for aynchronous programe are anything talking over a network such as calling on API a database call, or a request to the bankend.

                      java Script and Multi-Threading.
javascript is single threaded programming language.
Note everytime we enter a function we get on top of the stack. and when leave the function we are removed from the stack.

                              Promises
javascript objects that help perform asynchrous operation.
you-if you are the person creating the promises define what to do when the promise successfully complete(When it is resolved)
The person creating the Promise also defines what to do when promise fails(when it rejests)
Use then() to handle sucessful respose(resolved)
use catch|() to handle unsuccessfully reponse is rejested.










import { setDefaultHighWaterMark } from "stream";
import { setTimeout } from "timers";

function firstFunction(){
  console.log("first");
  console.trace();
}

function secondFunction(){
  console.log("second");
  //console.trace();
  firstFunction();
}

function thirdFunction(callback){
  console.log("third");
  //console.trace();
  secondFunction();
  callback();
}
// thirdFunction();//output is Third Second first trace.
///////////////example 2
const someCallback=secondFunction;
thirdFunction(someCallback);

function printMe(){
  console.log("its me");
}
function printTest(){
  console.log('test');
}
console.log("hello");
setTimeout(printMe,2000); //time in ms
printTest();  //output is hello test it's me.

///////////////////Example 3/////////////////////

function sayHello(){
  console.log("hello");
}
function performsSlowOperation(callback){
  console.log('Starting slow Operation.....');
  /* this code is simulating a slow operation - we usually wouldn't want to actually delay by 2000ms*/
 setTimeout(callback,2000);
}
performsSlowOperation(sayHello);
console.log("Meanwhile , other code runs here.......");

// out put starting slow operation // Meanwile, other code runs here... //hello

////////////////////Promises//////////////////
const promise  = new Promise(function(resolve,reject){
setTimeout(()=>resolve("done"),2000)
});
//define what to do when the promise successfully completes
promise.then((response)=>{ 
  console.log(` Promise completed with response:${response}`);
});
console.log("Some other code excute......");

const promise2  = new Promise(function(onSuccess,onError){
  setTimeout(()=>onSuccess({sucess:true, message:"hoorah"}),2000)
  });
  //define what to do when the promise successfully completes
  const result=(response)=>{ 
    console.log(` Promise completed with response:${JSON.stringify(response)}`);
  }
  promise.then(result);// Always calls the first Parameter which is successful.
  console.log("Some other code excute......");
  
  //////////////////////////////Example 2///////////////////
 
const promise3 = new Promise(function(resolve, reject) {
  // generate random numbers between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);
  if (randomInt % 2 === 0) {
    // success
    setTimeout(() => resolve("don"), 2000);
  } else {
    // failure
    setTimeout(() => reject("error"), 2000);
  }
});

//defines what to do on success
promise3
//defines what to do on success
.then((Response)=>{
  console.log(` Promise resolve with resnpone:${Response}`)
})
//defines what to do on rejection
.catch((reject)=>{
  console.log(`|Promise rejected with respose:${reject}`)
});
console.log('Resto of programs.....');

/////////////////////////////////////example3////////////////////////
//saveUser is a function that returns a promise
// very commonly we will call fuction that retrun promises, e.g.fetch
const saveUser=()=>{
  return new promise4(function(resolve,reject){
    //simulates saving a user email address somewhere quickly
    console.log( `j.smith@techreturners.com`);
  });
};
const fetechUser=(userEmail)=>{
  return new Promise(function(resolve,reject){
 console.log(`Fetching full details for user with emal${userEmail}...`);
 //simulate getting the full user details in 2s
 setTimeout(function(){
  const user = {
    name:'jane Smith',
    email: 'j.smith@techreturner.com',
    contactNumber: "1234555",
    friend:{
      name: "steve",
    },
  };
  resolve(user);
},2000);
 });
  
};
/*saveUser();
const saveUsers: ()=> promise<map>
saveUser()
.then(function(userEmail){
  console.log(`User saved with email ${userEmail}`);
  return fetechUser(userEmail);
})
.then(function(user){
  console.log(`user details : ${JSON.stringify(user)}`);
});
*/
//for all this commented code above we can write bellow code
async function handleUser(){
  const userEmail= await saveUser();
  console.log(`User saved with email ${userEmail}`);
  const user = await fetechUser(userEmail);
  console.log(`user details : ${JSON.stringify(user)}`);
}

console.log(` More code executing  here.....`)

/////////////////////////Real Example now
async function fetchGoogletext(){
  try{
    const response = await fetch("http://google.com");
    const text= await response.text();
    return text;
  }catch(e){
    console.error(e);
  }
}
const googleText = await fetchGoogletext();
console.log(googleText);

