import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const MyProfileUpdate = () => {

    const { itemId } = useParams();
    const [user] = useAuthState(auth);

    const handleUpdateUser = event => {
        event.preventDefault();
        const myprofile = {
            email: user.email,
            name: user.displayName,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,
            img: event.target.img.value,
        }

        axios.put('https://paiting-tools-manufacturer-server-side.vercel.app/myprofile/:id', myprofile)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Profile Information Added Successfully!');

                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>
                Update user: {user?.displayName}

            </h2>
            <form onSubmit={handleUpdateUser}>
                <input type='text' name='name' placeholder='Name'></input>
                <br />
                <input type='text' name='email' placeholder='Email'></input>
                <br />
                <input className='w-full mb-2' type="text" name="education" placeholder='Update Education Info' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="location" placeholder='Change Location (City/District)' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="number" name="phone" placeholder='Update Phone Number' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="linkedin" placeholder='Update LinkedIn Profile Link' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="img" placeholder='Change Profile Photo'></input>
                <br />
                <input className='btn btn-secondary' type='submit' value='Update User'></input>
            </form>
        </div>
    );
};

export default MyProfileUpdate;