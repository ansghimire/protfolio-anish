import Link from "next/link"


const Miniproject = ({ repos }) => {
    return (
        <div className="container" id="mini-project">
            <div className="mt-40 ml-36">
                <h1 className="text-white text-3xl tracking-wider">3. &nbsp; Mini Project</h1>
                <h1 className='text-lg mt-8 w-[30rem] text-gray-400'>
                    Some of the project that i have done link was given below:
                </h1>

                {
                    repos.map((repo, i) => (
                        <div className="flex" key={i}>
                            <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-thin tracking-wider hover:bg-lime-500 hover:border-white cursor-pointer ">
                                <Link href={repo.html_url}>
                                    <a>{repo.name}</a>
                                </Link>
                            </button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Miniproject

