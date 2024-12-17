import { NavLink } from "react-router-dom"
import ProjectDisplay from "./ProjectDisplay"
import obama from '../../public/obama.png'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col bg-cyan-900 py-5'>
                <h1 className='text-2xl sm:text-4xl'>Hello! My name is Chris. Welcome to my website.</h1>

                <div className='m-5 text-lg sm:text-3xl text-nowrap md:text-wrap flex flew-row justify-center'>
                    <h2>I enjoy</h2>
                    <h2 className="text-amber-500 mx-2">web development, aviation, and music.</h2>
                </div>

                <NavLink to='/about' className='bg-gray-800 p-4 rounded-xl border-2 border-gray-800 w-50 h-15 transition hover:border-amber-500'>Learn more about me</NavLink>
            </div>

            <div className='pt-5'>
                <h1 className='font-bold'>My Projects</h1>

                <div className='flex flex-row justify-center p-10'>
                    <ProjectDisplay name='This Website' description='This website is a project in and of itself! It uses React and Node primarily!' img={obama} localHref='personal-website' githubHref='https://github.com/chrisjm66/new-personal-website' />
                </div>
            </div>
        </div>
    )
}

export default Home