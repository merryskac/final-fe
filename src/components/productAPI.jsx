export const getProducts = (id) =>{
  const get = fetch('https://final-term-ashen.vercel.app/play/products/'+id, {
    headers:{
      authorization: 'Bearer '+ localStorage.getItem('access_token')
    }
  })
  .then(data=>data.json())
  .then(data=>data)

  return get

}