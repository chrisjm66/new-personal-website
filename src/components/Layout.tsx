import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <div className="top-0 mt-0 w-screen bg-slate-600">
                navbar here
            </div>

            <Outlet/>
        </div>
        
    )
}

export default Layout