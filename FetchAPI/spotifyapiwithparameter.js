const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8'
async function getData(){
  const request =new Request(url,{
    'Authorization':'abad'
  })
  const response = await fetch(request)
  const data = await response.json()
  console.log(data)
}
getData();