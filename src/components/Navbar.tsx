import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex flex-nowrap justify-center items-center top-0 p-6 mt-0 mb-5 w-screen bg-cyan-950'>
            <div className='absolute flex flex-nowrap left-10'>
                <h1 className='text-3xl'>ChrisMangan</h1>
                <h1 className='text-3xl font-bold text-violet-400'>.net</h1>
            </div>
            <div className="">
                <nav>
                    <NavLink to='/' className='text-lg font-bold text-gray-100 no-underline hover:bg-sky-200 rounded-md py-3 px-6 mx-4 transition ease-in-out delay-15 duration-300'>Home</NavLink>
                    <NavLink to='/about' className='text-lg font-bold text-gray-100 no-underlin hover:bg-sky-200 rounded-md py-3 px-6 mx-4 transition ease-in-out delay-15 duration-300'>About Me</NavLink>
                    <NavLink to='/contact' className='text-lg font-bold text-gray-100 no-underline hover:bg-sky-200 rounded-md py-3 px-6 mx-4 transition ease-in-out delay-15 duration-300'>Contact</NavLink>
                    <NavLink to='/portfolio' className='text-lg font-bold text-gray-100 no-underline hover:bg-sky-200 rounded-md py-3 px-6 mx-4 transition ease-in-out delay-15 duration-300'>Portfolio</NavLink>
                </nav>
           </div>
        </div>
        
    )
}

export default Navbar