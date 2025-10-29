import { Outlet } from "react-router-dom"
import  Navbar from '../Compounets/Navbar'

 

const Mainlayout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
    
    </>
  )
}

export default Mainlayout;