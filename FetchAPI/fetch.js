const url = 'http://worldtimeapi.org/api/timezone/America/New_York';
const url2='https://api.thenewsapi.com/v1/news/top?'
//token used and was not accepted.
async function getData(){
  const response = await fetch(url2);
  const data = await response.json()
  console.log(data);
}
getData();