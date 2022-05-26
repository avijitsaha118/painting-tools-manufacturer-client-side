import React from 'react';
import { useEffect, useState } from "react";
import Review from './Review';

const Reviews = () => {

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            fetch('https://infinite-refuge-16711.herokuapp.com/myreview')
                .then(res => res.json())
                .then(data => setItems(data))
        }, []);
     
        // return[items, setItems]
    

    return (
        <>
        <h4 className='text-center mt-5 text-title text-2xl'>Client Reviews</h4>
        <div className='grid grid-cols-3 gap-4'>
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