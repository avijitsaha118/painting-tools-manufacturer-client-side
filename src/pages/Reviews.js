import React from 'react';
import { useEffect, useState } from "react";
import Review from './Review';

const Reviews = () => {

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            fetch('https://paiting-tools-manufacturer-server-side.vercel.app/myreview')
                .then(res => res.json())
                .then(data => setItems(data))
        }, []);
     
        // return[items, setItems]
    

    return (
        <>
        <h4 className='text-center text-title text-2xl mt-16'>Client Reviews</h4>
        <div className='grid lg:grid-cols-3 gap-4 sm: grid-cols-1 mt-6 ml-5 mr-5 rounded shadow-xl'>
            {
                items.slice(0, 6).map(item => <Review
                    key={item._id}
                    item={item}
                ></Review>)
            }
        </div>
        </>
    );
};

export default Reviews;