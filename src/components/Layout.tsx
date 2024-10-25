import { NavLink, Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <div className="top-0 p-5 mt-0 w-screen bg-slate-600 text-purple-900">
                <nav>
                    <NavLink to='home'>Home</NavLink>
                </nav>
            </div>

            <Outlet/>
        </div>
        
    )
}

export default Layout