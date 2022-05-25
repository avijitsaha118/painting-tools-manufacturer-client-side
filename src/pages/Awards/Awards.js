import React from 'react';
import webImg from '../../assets/svg/Business_SVG.svg';
const Awards = () => {
    return (
        <>
            <div class="min-h-full w-full bg-gray-300">
                <div class="max-w-screen-md mx-auto px-10 pt-20">
                    <div class="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
                        <div class="w-full md:w-1/2 p-4">
                            <img src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="" class="w-8" />
                            <h3 class="text-3xl font-bold">Fast Food & Cola</h3>
                            <p>Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats or DoorDash.</p>
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