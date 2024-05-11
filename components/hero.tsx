import React from 'react'
import Image from 'next/image'
const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Before they sold out
                            <br className="hidden lg:inline-block"></br>
                             Connecting Innovators Empowering Futures
                        </h1>
                        <p className="mb-8 text-gray-200 leading-relaxed">Unlocking the potential of AI, One marketplace at a time</p>
                    <button className="inline-flex bg-none border-2 border-white text-white hover:text-black py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">Button</button>
                    </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        height={28}
                        width={32}
                        src="/"/>
                        
                </div>
            </div>
        </section>
    )
}

export default Hero