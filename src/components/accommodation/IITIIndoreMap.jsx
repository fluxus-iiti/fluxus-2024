import React from 'react'

export default function IITIIndoreMap() {
    return (
        <div className='mainBackdrop'>
            <section className="text-gray-600 body-font border-0">
                <div className="px-5 pb-10 mx-auto lg:grid grid-cols-2">
                    <div className=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative w-full h-[500px] lg:h-full">
                    
                        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.274798805754!2d75.9026986554199!3d22.520359700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1707743786988!5m2!1sen!2sin" ></iframe>
                        
                    </div>
                    <div className="  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="container py-8 px-10 mx-auto !text-white">
                            <h1 className="text-5xl font-bold text-center mb-6">Directions to IIT Indore Campus</h1>
                            <ul className="divide-y  divide-gray-200">
                                <li className="py-4">
                                    <p className="text-2xl">The IIT Indore campus is located on Khandwa Road, Simrol which is around 20 km from the city.</p>
                                </li>
                                <li className="py-4">
                                    <p className="text-2xl">Outstation participants can reach the IIT Indore campus via bus, auto or call-taxi which is available just outside the station.</p>
                                </li>
                                <li className="py-4">
                                    <p className="text-2xl">From the station or airport, you may take an auto or taxi to Tantya Bheel Square (Bhawarkuan), and from there you can catch the M-19 bus which is the direct bus to IIT Indore campus (Gate No. 1).</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .mainBackdrop {
                      backdrop-filter: blur(10px);
                    }
                `}
            </style>
        </div>
    )
}
