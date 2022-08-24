import Image from "next/image"

const Aboutpage = () => {
    return (
        <div id="about" className="container h-[90vh] flex space-x-60 mb-16">
            <div className="  mt-20 ml-36">
                <h1 className="text-white text-3xl tracking-wider">1. About Me</h1>
                <h1 className="text-lg mt-8 w-[30rem] text-gray-400">
                    Hi, I m Anish Ghimire, a Fullstack Developer From Chitwan,Nepal. I m a self taught Developer. I love to explore new technology and skills. Although I have no experience with world project work in a company,I have done many projects.
                </h1>
                <h1 className="text-lg mt-8 w-[30rem] text-gray-400">
                    Here are few technologies that I"ve been working with recently.
                </h1>
                <div className="flex space-x-20 text-white mt-5 font-mono">
                    <ul className="flex flex-col space-y-3 ">
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Typescript</li>
                        <li>HTML and CSS</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>

                    </ul>
                    <ul className="flex flex-col space-y-3" >
                        <li>React</li>
                        <li>Next Js</li>
                        <li>Django </li>
                        <li>Docker</li>
                        <li>Material UI</li>
                        <li>Redux</li>
                    </ul>
                </div>

            </div>
            <div className=" mt-40">
                <Image src="/me.jpg" width="400" height="400" className="cursor-pointer" alt="myimg" />
            </div>

        </div>
    )
}

export default Aboutpage