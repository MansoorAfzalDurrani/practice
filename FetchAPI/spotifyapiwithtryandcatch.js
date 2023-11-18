const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8'

  const request =new Request(url,{
    headers: {
    'Authorization':'abad'
    }
    })
   // fetch(request)
   // .then(Response => Response.json())
   //.then(data=> console.log('Success',data))
   //.catch(error=>console.log(`Error: ${error}`))
   // same thing with try catch now
   async function getData(){
    try{
      const response = await fetch(request)
      const data = await response.json()
      if(response.status === 200){
        console.log('Success',data)
      }else{
        console.log('Server Error', data.error.message)
      }
    }catch(error){
     console.log('Fetch Error',error)
    }
   }
   getData();
