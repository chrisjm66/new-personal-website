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
                    <div className=''>
                        <img src='/obama.png' alt='obama' className="w-96"/>
                        <h2 className='text-2xl italic mt-2'>Barack Obama, confused</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home