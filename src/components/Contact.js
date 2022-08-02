import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="mt-20 ml-36 " id="contact">
            <h1 className="text-white text-3xl tracking-wider">4. &nbsp; Get In Touch Through Socia Media</h1>
            <div className='mt-10 flex space-x-20 '>

                <Link href="https://fb.com/">
                    <a><FaFacebookF size="3rem" className='text-blue-600 hover:text-blue-300' /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/anish-ghimire-495b931ba">
                    <a><FaLinkedinIn size="3rem" className='text-blue-600 hover:text-blue-300' /></a>
                </Link>
                <Link href="https://github.com/ansghimire">
                    <a> <FaGithub size="3rem" className='text-white hover:text-blue-300' /></a>
                </Link>
                   
            </div>


        </div>
    )
}

export default Contact