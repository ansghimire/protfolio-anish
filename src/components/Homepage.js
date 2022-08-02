import Link from 'next/link'
import Navbar from './Navbar'

const Homepage = () => {
    return (
        <div className='h-[90vh]'>
            <Navbar />


            <div className='text-white mt-20 ml-36 '>
                <h1 className='text-xl text-lime-500 font-mono'>Hi, My Name is</h1>
                <h2 className='text-8xl font-mono mt-3'>Anish Ghimire.</h2>
                <h2 className='text-6xl font-mono mt-3 text-lime-200'>I turn my passion into code.</h2>
                <h1 className='text-lg mt-8 w-[20rem] text-gray-400'>I am Fullstack Developer with the skill in React and Django but not yet worked in company.</h1>
                <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-thin tracking-wider hover:bg-lime-500 hover:border-white cursor-pointer ">
                    <Link href="/resume.pdf">
                        <a>Resume</a>
                    </Link>
                </button>
            </div>



        </div>
    )
}

export default Homepage