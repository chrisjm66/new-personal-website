import { NavLink } from "react-router-dom"
import ProjectDisplay from "./ProjectDisplay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col bg-cyan-900 py-5'>
                <h1 className='text-2xl sm:text-4xl'>Hello! My name is Chris. Welcome to my website.</h1>

                <div className='m-5 text-lg sm:text-3xl text-nowrap md:text-wrap flex flew-row justify-center'>
                    <h2>I enjoy</h2>
                    <h2 className="text-amber-500 mx-2">web development, aviation, and music.</h2>
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                    <NavLink to='/about' className='bg-gray-800 flex items-center p-4 rounded-xl border-2 border-gray-800 w-50 h-14 transition hover:border-amber-500'>Learn more about me</NavLink>

                    <div className='flex-row flex justify-center mx-2'>
                        <NavLink to='https://github.com/chrisjm66' className='m-4 transition duration-300 hover:text-amber-500'><FontAwesomeIcon className='w-10 h-10' icon={faGithub}/></NavLink>
                        <NavLink to='https://linkedin.com/manganchris' className='m-4 transition duration-300 hover:text-amber-500'><FontAwesomeIcon className='w-10 h-10' icon={faLinkedin}/></NavLink>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <h1 className='font-bold'>My Projects</h1>

                <div className='flex flex-col sm:flex-row justify-center p-10'>
                    <ProjectDisplay name='This Website' subtext='React, NodeJS, Docker, Linux' description='This website is a project in and of itself! It uses React and Node primarily!' img='obama.png' localHref='personal-website' githubHref='chrisjm66/new-personal-website' />
                    <ProjectDisplay name='Tioli - COMP271 Final' subtext='Java, JavaFX, MySQL' description='Enjoy Take It or Leave It Poker without the stress of losing all of your money at the casino.' img='obama.png' localHref='personal-website' githubHref='chrisjm66/comp271-final' />
                </div>
            </div>
        </div>
    )
}

export default Home