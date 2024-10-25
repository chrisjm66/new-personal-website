import ProjectDisplay from "./ProjectDisplay"

const Home = () => {
    return (
        <div>
            <div className='flex justify-center flex-col bg-cyan-900 py-5'>
                <h1>Hello! My name is Chris. Welcome to my website.</h1>

                <div className='m-5 text-3xl flex flew-row justify-center'>
                    <h2>I enjoy</h2>
                    <h2 className="text-amber-500 mx-2">web development, aviation, and music.</h2>
                </div>
            </div>

            <div className='pt-5'>
                <h1>My Projects</h1>

                <div className='flex flex-row justify-center p-10'>
                    <ProjectDisplay name='This Website' description='This website is a project in and of itself! It uses React and Node primarily!' img='obama.png' localHref='personal-website' githubHref='https://github.com/chrisjm66/new-personal-website' />
                </div>
            </div>
        </div>
    )
}

export default Home