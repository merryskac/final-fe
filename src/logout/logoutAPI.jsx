export const logout = () =>{
  const out = fetch('https://final-term-git-main-wheytosharepalu-gmailcom.vercel.app/play/logout',{
    credentials: 'include'
  }).then(
    data=>data.json()
  ).then(data=>data)

  return out
}