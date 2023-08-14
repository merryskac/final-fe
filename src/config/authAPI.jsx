import Cookies from "universal-cookie"

const cookies = new Cookies()

export const cekToken = () =>{
  try{
  const cek = fetch('https://final-term-git-main-wheytosharepalu-gmailcom.vercel.app/play/cektoken',{
    method:'POST',
    credentials:'include',
    headers:{
      authorization: "Bearer "+localStorage.getItem('access_token')
    },
    body:JSON.stringify({
      refreshToken: cookies.get('refreshToken')}
    )
  }).then(data=>data.json())
  .then(data=>data)
  return cek
}catch(err){
  console.log(err)
}
}