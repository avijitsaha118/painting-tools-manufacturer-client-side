import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";


const HomeTools = ({ item }) => {
    const { _id, name, img, description, price, quantity, minimum } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }


    const ReadMore = ({ description }) => { }
    const text = description;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    return (
        <div>
            {/* <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: $ {price}</p>
                    <p>Minimum Order Quantity: {minimum}</p>
                    <p>Available Quantity: {quantity}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateToItemDetail(_id)} class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div> */}
            

            <div className="card bg-white w-96 shadow-xl">
                <figure className="px-4 py-2 pt-4">
                    <img src={img} alt="Shoes" className="rounded h-72 w-96" />
                </figure>
                <div className="px-5 pb-5 items-center text-start">
                    <h2 className="card-title text-black text-xl mt-3">{name}</h2>

                    <p className="text mt-1">
                        {isReadMore ? text.slice(0, 70) : text}
                        <span onClick={toggleReadMore} className="cursor-pointer text-xs font-semibold text-cyan-900">
                            {isReadMore ? "... read more" : " ...show less"}
                        </span>
                    </p>

                    <p className='mt-2'><span className='text-4xl font-bold text-red-600'> {price} $</span></p>
                    <p className=''>Minimum Order Quantity: <span className='text-xl font-bold'>{minimum}</span></p>
                    <p className=''>Available Quantity: <span className='text-xl font-bold'>{quantity}</span></p>


                    <div className="card-actions justify-end">
                        <button onClick={() => navigateToItemDetail(_id)} class="btn btn-link btn-primary">Order <HiArrowLongRight className='ml-1'></HiArrowLongRight> </button>
                    </div>
                </div>
            </div>

            

         
{/* <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={img} />
    </a>
    <div class="px-5 pb-5">
        <span>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <h3 class="text-xl tracking-tight text-gray-900 dark:text-white">{description}</h3>
            
                    <p className="text">
                        {isReadMore ? text.slice(0, 77) : text}
                        <span onClick={toggleReadMore} className="cursor-pointer text-xs font-semibold text-cyan-900">
                            {isReadMore ? "... read more" : " ...show less"}
                        </span>
                    </p>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Minimum Order Quantity: {minimum}</h3>
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Available Order Quantity: {quantity}</h3>
        </span>
        <div class="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <button onClick={() => navigateToItemDetail(_id)} class="btn btn-outline btn-primary">Order <HiArrowLongRight className='ml-1'></HiArrowLongRight> </button>
        </div>
    </div>
</div> */}

        </div>
    );
};

export default HomeTools;