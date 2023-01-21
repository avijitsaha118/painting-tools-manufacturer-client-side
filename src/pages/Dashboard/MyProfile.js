import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Profiles from './Profiles';

const MyProfile = () => {

    const { itemId } = useParams();
    const [user] = useAuthState(auth);

    const handleAddReview = event => {
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

        axios.post('https://paiting-tools-manufacturer-server-side.vercel.app/myprofile', myprofile)
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
            <h2>Add Item </h2>
            <form onSubmit={handleAddReview}>
                <br />
                <input className='w-full mb-2' type="email" value={user?.displayName} name="email" placeholder='email' required readOnly disabled></input>
                <br />
                <input className='w-full mb-2' type="text" value={user?.email} name="name" placeholder='Item Name' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="education" placeholder='Education Info' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="location" placeholder='Location (City/District)' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="number" name="phone" placeholder='Your Phone Number' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="linkedin" placeholder='LinkedIn Profile Link' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="img" placeholder='Image URL of your Recent Photo' required></input>
                <br />
                <input className='btn btn-secondary' type='submit' value='Add Information'></input>
            </form>
            <ToastContainer></ToastContainer>
            <Profiles></Profiles>
           
        </div>
    );
};

export default MyProfile;