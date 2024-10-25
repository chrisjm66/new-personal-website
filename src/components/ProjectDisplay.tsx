import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const ProjectDisplay = ({name, description, img, githubHref, localHref}: any) => {
    return (
        <div className='w-80 h-1/2 sm:w-120 sm:h-136  transition duration-300 border-4 border-gray-500 bg-cyan-800 flex flex-col justify-center align-top justify-items-center rounded-xl px-6 py-2 hover:scale-105 hover:bg-cyan-700'>
            <h1 className='m-2 text-left font-semibold'>{name}</h1>

            <img className='w-1/2 rounded-md border-' src={img} alt='hi'/>
            
            <h2 className='text-left text-lg italic mt-5'>{description}</h2>

            <NavLink to={githubHref} className='flex flex-row items-center transition duration-300 hover:text-green-500'>
                <FontAwesomeIcon className='w-10 h-10' icon={faGithub}/>
                <h3 className='font-mono font-semibold text-lg ml-2 my-4 text-left'>chrisjm66/new-personal-website</h3>
                
            </NavLink>

            <NavLink to={'/projects/' + localHref}>
                <h3 className='font-bold text-lg my-2 text-left transition duration-300 hover:text-amber-500'>More Info</h3>
            </NavLink>
        </div>
    )
}

export default ProjectDisplay