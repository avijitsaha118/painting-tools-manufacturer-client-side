import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const UpdateQuantity = () => {
    const { itemId } = useParams();
    // console.log(itemId);

    const [item, setItem] = useItemDetail(itemId);
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId, item]);

    const handleUpdateItem = event => {
        event.preventDefault();
       
        const quantity = parseInt(event.target.quantity.value) + item.quantity ;
        // console.log(quantity);

        const updatedItem = { quantity };

        //send data to the server
       const url= `http://localhost:5000/item/${itemId}`;
       fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data)
                alert('Quantity Added Successfully!');
                event.target.reset();
            })
    }

    return (
        <div>
            {/* <h2>
                Update Qunatity of {item.name}

            </h2> */}
            <form onSubmit={handleUpdateItem}>
                <input type='number' name='quantity' placeholder='Add Quantity' required></input>
                <br />
                <input type='submit' value='Update Quantity'></input>
            </form>
        </div>
    );
};

export default UpdateQuantity;