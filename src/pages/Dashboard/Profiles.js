import React from 'react';
import { useEffect, useState } from "react";
import Profile from './Profile';

const Profiles = () => {

        const [items, setItems] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:5000/myprofile')
                .then(res => res.json())
                .then(data => setItems(data))
        }, []);
     
        // return[items, setItems]
    

    return (
        <>
        <h4 className='text-center mt-5 text-title text-2xl'>Profile </h4>
        <div className='grid grid-cols-3 gap-4'>
            {
                items.map(item => <Profile
                    key={item._id}
                    item={item}
                ></Profile>)
            }
        </div>
        </>
    );
};

export default Profiles;