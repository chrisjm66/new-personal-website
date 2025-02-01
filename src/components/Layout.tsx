import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className='scroll-smooth'>
            <Navbar/>

            <div>
                <Outlet/>
            </div>
        </div>
        
    )
}

export default Layout