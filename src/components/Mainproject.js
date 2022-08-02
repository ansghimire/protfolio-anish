import Image from "next/image"

const Mainproject = () => {
    return (
        <div className="container" id="main-project">
            <div className=" flex space-x-40">
                <div className="mt-10 ml-40">
                    <h1 className="text-white text-3xl tracking-wider">2. &nbsp; Main Project</h1>
                    <h2 className="text-white font-extralight text-xl mt-3">Ecommerce Applications(Online Shopping )</h2>
                    <h1 className='text-lg mt-8 w-[30rem] text-gray-400'>
                        This web applications is built with PHP, Html, CSS, JS. In this web applications customer can rate the product,
                        can add product to the cart, can order the product and can pay through the Stripe but only authorized user
                        can do. To be a authorized user they need to register and activate their account through mail. Reset pasword,
                        Upload profile that sort of things also available in this project.
                    </h1>
                    <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-thin tracking-wider">Source code</button>
                    <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-extralight tracking-wider bg-lime-400">Download Project Video</button>
                </div>

                <div className=" mt-24 w-[500]">
                    <Image src="/cart.png" width="600" height="400" layout="fixed" alt="project" />
                </div>
            </div>
            <div className=" flex space-x-40 flex-row-reverse">
                <div className="mt-32 ml-40 mr-32">
                    {/* <h1 className="text-white text-3xl tracking-wider">2. &nbsp; Main Project</h1> */}
                    <h2 className="text-white font-extralight text-xl mt-3">Ecommerce (Product Advertising )</h2>
                    <h1 className='text-lg mt-8 w-[30rem] text-gray-400'>
                        This web applications is built with Django, React, Tailwind css and MaterialUI. In this web applications customer can rate the product,
                        can add product to the cart, can order the product and can pay through the Stripe but only authorized user
                        can do. To be a authorized user they need to register and activate their account through mail. Reset pasword,
                        Upload profile that sort of things also available in this project.
                    </h1>
                    <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-thin tracking-wider">Source code</button>
                    <button className="mt-5 text-white border border-lime-500 p-3 text-lg font-extralight tracking-wider bg-lime-400">Download Project Video</button>
                </div>

                <div className=" mt-40 w-[500]">
                    <Image src="/ProfilePage.png" width="600" height="400" layout="fixed" alt="project"/>
                </div>
            </div>


        </div>
    )
}

export default Mainproject