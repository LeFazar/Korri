import Body from './Body'  
import Footer from '../../components/Footer'; 
import MainNav from '../../components/MainNav'; 
import MainNavSmall from '../../components/MainNavSmall'; 
import {useLocation} from 'react-router-dom'
import { useEffect ,useState} from 'react';

function useWindowDimemsions(){
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)
  const location = useLocation() 
  const updateWidthAndHeight=()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
  }
  useEffect
  (() => {
  window.addEventListener("resize",updateWidthAndHeight)
  },[location])
  return{
      width,
      height
  }
}

function Store() { 
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
      // behavior:'auto'
    })
  }
  useEffect(()=>{
    scrollToTop()
  })
  const {width } = useWindowDimemsions()

  return (
    <>  
    {width >1017?
    <MainNav comp={'Store'}/>:  
    <MainNavSmall  /> }
    <Body/>
    <Footer/>
    </>
  );
}

export default Store;
