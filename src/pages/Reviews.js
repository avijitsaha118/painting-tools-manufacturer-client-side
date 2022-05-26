import React from 'react';
import { useEffect, useState } from "react";
import Review from './Review';

const Reviews = () => {

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:5000/myreview')
                .then(res => res.json())
                .then(data => setItems(data))
        }, []);
     
        // return[items, setItems]
    

    return (
        <>
        <h4 className='text-center mt-6 text-title text-2xl'>Client Reviews</h4>
        <div className='grid lg:grid-cols-3 gap-4 sm: grid-cols-1 mt-5'>
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