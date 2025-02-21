import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex flex-nowrap justify-center items-center top-0 p-6 mt-0 w-screen bg-cyan-950'>
            <div className='absolute flex flex-nowrap flex-row left-10'>
                <h1 className='text-2xl invisible lg:visible'>ChrisMangan</h1>
                <h1 className='text-2xl font-bold text-violet-400 invisible lg:visible'>.net</h1>
            </div>
            <div>
                <nav className="flex flex-row flex-nowrap">
                    <NavLink to='/' className='text-sm md:text-lg font-bold text-gray-100 no-underline hover:bg-sky-500 rounded-md py-3 px-3 md:px-6 mx-2 md:mx-4 transition ease-in-out delay-15 duration-300'>Home</NavLink>
                    <NavLink to='https://ezlog.chrismangan.net' className='text-sm md:text-lg font-bold text-gray-100 no-underline hover:bg-sky-500 rounded-md py-3 px-3 md:px-6 mx-2 md:mx-4 transition ease-in-out delay-15 duration-300'>Ezlog</NavLink>
                    
                </nav>
           </div>
        </div>
        
    )
}

/*
<NavLink to='/about' className='text-sm md:text-lg font-bold text-gray-100 no-underlin hover:bg-sky-500 rounded-md py-3 px-3 md:px-6 mx-2 md:mx-4 transition ease-in-out delay-15 duration-300'>About Me</NavLink>
                    <NavLink to='/contact' className='text-sm md:text-lg font-bold text-gray-100 no-underline hover:bg-sky-500 rounded-md py-3 px-3 md:px-6 mx-2 md:mx-4 transition ease-in-out delay-15 duration-300'>Contact</NavLink>
                    <NavLink to='/portfolio' className='text-sm md:text-lg font-bold text-gray-100 no-underline hover:bg-sky-500 rounded-md py-3 px-3 md:px-6 mx-2 md:mx-4 transition ease-in-out delay-15 duration-300'>Portfolio</NavLink>
*/
export default Navbar