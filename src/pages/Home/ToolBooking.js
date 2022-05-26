import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useItemDetail } from '../../hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const ToolBooking = () => {

    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const mybooking = {
            buyer: user.email,
            // service: service.name,
            // serviceId: serviceId,
            buyerName: user.displayName,
            toolName: item.name,
            price: item.price,
            minimum: item.minimum,
            quantity: item.quantity,
            contact: event.target.contact.value,
            address: event.target.address.value,
            info: event.target.info.value,
        }

        axios.post(`http://localhost:5000/booking/${itemId}`, mybooking)
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
                <input className='w-full mb-2' type="text" name="toolName" placeholder={item.name} readOnly disabled></input>
                <br />
                <input className='w-full mb-2' type="number" name="minimum" placeholder={item.minimum}></input>
                <br />
                <input className='w-full mb-2' type="number" name="quantity" placeholder={item.quantity} readOnly disabled></input>
                <br />
                <input className='w-full mb-2' type="number" name="price" placeholder={item.price} autoComplete='off' required readOnly disabled></input>
                <input className='w-full mb-2' type="text" name="contact" placeholder="Contact Number" required></input>
                <br />
                <input className='w-full mb-2' type="text" name="address" placeholder='address' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="info" placeholder='Additional Information' required></input>
                <br />
                <input className='btn btn-secondary' type='submit' value='Booking'></input>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ToolBooking;