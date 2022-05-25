import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useItemDetail } from '../../hooks/useItemDetail/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Reviews from '../Reviews';

const AddAReview = () => {

    const { itemId } = useParams();
    // const [item] = useItemDetail(itemId);
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const myreview = {
            email: user.email,
            // service: service.name,
            // serviceId: serviceId,
            name: user.displayName,
            description: event.target.description.value,
            ratings: event.target.ratings.value,
            img: event.target.img.value,
        }

        axios.post('http://localhost:5000/myreview', myreview)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Item Added Successfully!');

                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Add Item </h2>
            <form onSubmit={handleAddReview}>
                <br />
                <input className='w-full mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled></input>
                <br />
                <input className='w-full mb-2' type="text" value={user?.displayName} name="name" placeholder='Item Name' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="description" placeholder='Write Your Review' required></input>
                <br />
                <input className='w-full mb-2' type="number" name="ratings" placeholder='Ratings' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="img" placeholder='Img Url of Your Avatar' required></input>
                <br />
                <input className='btn btn-secondary' type='submit' value='Add Review'></input>
            </form>
            <ToastContainer></ToastContainer>
            <Reviews></Reviews>
        </div>
    );
};

export default AddAReview;