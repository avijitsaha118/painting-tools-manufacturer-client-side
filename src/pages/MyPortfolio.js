import React from 'react';

const MyPortfolio = () => {
    return (
        <>
        <h1 class="text-center text-2xl">My Portfolio</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Introduction</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Name: Avijit Saha</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: sahaavijit908@gmail.com</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Educational Background: B.Sc (Hons) in Computer Science & Engineering. </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Technologies or Skills: HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React</p>
                </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project Links</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Project Name: Best Sounds Review <br/> (Live Link: https://best-sounds-reviews-f8efc4.netlify.app/)</p>
                    <a href="https://best-sounds-reviews-f8efc4.netlify.app/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View live
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <p class="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">Project Name: Warehouse Management Website <br/> (Live Link: https://warehouse-management-web-593c9.web.app/)</p>
                    <a href="https://warehouse-management-web-593c9.web.app/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View live
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <p class="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">Project Name: Money Maestro <br/> (Live Link: https://money-maestro-d446e8.netlify.app/)</p>
                    <a href="https://money-maestro-d446e8.netlify.app/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View live
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                
                </div>
            </div>
        </div>
        </>
    );
};

export default MyPortfolio;