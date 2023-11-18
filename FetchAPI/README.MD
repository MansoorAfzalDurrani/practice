APIKEYS.MD

MDN WEB DOC IS GOOD RESOURCE FOR STUDING THIS TOPIC

fetch() is a built in function. it send requests to APIs fetch a request and receive as response.
const response =fetch('website.com') fetch is more then a url. e.g
const request = new Reguest('SomeApi.com',{
  method: 'Get' 'POST' OR ANY 
})
const response =fetch(request) fetch is an asynchrouse operation, which bring a promise which take time.
GET Request Parameters
music.com/api?type=aplbums&artist=sbcd&beforeYear=2000
sometimes API needs paramter to send more secure way
GET Request Header(s) for this we have to creat a response object 
const request = new Request('backend.com/api',{ headers:....})

POST Request 
const request =  new request('backendApi.com',{
  header:.....,
  body:.......
})