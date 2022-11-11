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

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="card-title text-xl">{name}</h2>

                    <p className="text">
                        {isReadMore ? text.slice(0, 77) : text}
                        <span onClick={toggleReadMore} className="cursor-pointer text-xs font-semibold text-cyan-900">
                            {isReadMore ? "... read more" : " ...show less"}
                        </span>
                    </p>

                    <p>Price: <span className='text-3xl font-bold text-red-600'> {price} $</span></p>
                    <p>Minimum Order Quantity: <span className='text-xl font-bold'>{minimum}</span></p>
                    <p>Available Quantity: <span className='text-xl font-bold'>{quantity}</span></p>


                    <div className="card-actions justify-end">
                        <button onClick={() => navigateToItemDetail(_id)} class="btn btn-outline btn-primary">Order <HiArrowLongRight className='ml-1'></HiArrowLongRight> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeTools;