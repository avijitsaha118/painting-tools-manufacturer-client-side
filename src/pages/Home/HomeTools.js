import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeTools = ({ item }) => {
    const { _id, name, img, description, price, quantity, minimum } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
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
            </div>
          
        </div>
    );
};

export default HomeTools;