import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const ToolDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     console.log(data);

    const onSubmit = async data => {
        const formData = new FormData();
console.log(item.name);


        const booking = {
            // toolId: _id,
            // toolName: name,
            // price,

            buyer: user.email,
            buyerName: user.displayName,
            // address: event.target.address.value,
            // phone: event.target.phone.value

        }

        fetch(`https://infinite-refuge-16711.herokuapp.com/booking/${itemId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added successfully!');

            })


    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={item.name} {...register("name", { required: true, maxLength: 80 })} />
            
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                <input class='btn w-full max-w-xs text-primary' type="submit" value="Booking" />
            </form>
        </div>
    );
};

export default ToolDetail;