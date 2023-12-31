import Navbar from "../components/navbar";
import { 
  Box,
  Flex 
} from "@chakra-ui/react";
import SideBar from "../components/sideBar";
import VideoContent from "./videoContent";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Detail = () => {
  if(!localStorage.getItem('nama')||localStorage.getItem('nama')===undefined){
    window.location.href = '/login'
  }
  const id = useParams('id').id
  
  const {response:data, pending, error} = useFetch('https://final-term-git-main-wheytosharepalu-gmailcom.vercel.app/play/thumbnails');

  const filter = data && data.thumbnails.filter(data=>{
    return data._id===id
  })

  return ( <>
  <Navbar/>
    <Box >
      <SideBar/>
      {pending && <p>{pending}</p>}
      {error && <p>{error}</p>}
      {data && <Flex as='main' mt='20' mr={'10px'} ml='10px' mb={{sm:'10px',base:'300px'}}>

      <VideoContent url={filter[0].url} title={filter[0].title}/>

      </Flex>}
    
    </Box>
  </> );
}
 
export default Detail;