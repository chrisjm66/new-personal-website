import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <div>
                navbar here
            </div>

            <Outlet/>
        </div>
        
    )
}

export default Layout