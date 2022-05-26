import React from 'react';
import webImg from '../../assets/svg/Business_SVG.svg';
const Awards = () => {
    return (
        <>
            <div class="min-h-[75%] w-full bg-gray-300 bg-opacity-50">

                <div class="max-w-screen-md mx-auto px-10 pt-20">
                    <div class="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
                        <div class="w-full md:w-1/2 p-4">

                            <h3 class="text-3xl font-bold">We Make It Easy in Global Market </h3>

                            <p>Our delivary and communication system make it possible. Wholesale price of our product may helpfull for our client or shop owner.</p>
                        </div>
                        <div class="w-full md:w-1/2 p-4 md:p-0">
                            <img src={webImg} alt="" class="w-64 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Awards;