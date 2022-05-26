import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';


const ToolPurchase = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const [user] = useAuthState(auth);

    const bookingHandler = event => {
        event.preventDefault()
        const buyerName = event.target.buyerName.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const toolName = event.target.toolName.value;
        const price = event.target.price.value;
        const info = event.target.info.value;
        const minimum = event.target.minimum.value;
        const quantity = parseInt(event.target.quantity.value);

        const data = {
            buyerName: buyerName,
            email: email,
            toolName: toolName,
            minimum: minimum,
            quantity: quantity,
            price: price,
            number: number,
            address: address,
            info: info
        }


        if (quantity < item.minimum) {
            toast.error("You cant booking", { id: 'defined' })
        }
        if (quantity > item.quantity) {
            toast.error("You cant booking", { id: 'undefined' })
        }
        else {
            fetch(`https://infinite-refuge-16711.herokuapp.com/booking`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }

            })
                .then(res => res.json())
                .then((data) => {
                    // console.log(data)
                    toast.success("Booking Complete", { id: "booking-complete" });
                    event.target.reset();

                })
        }
    }

    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.img} alt="painting-product" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{item.name}</h2>
                                <p>{item.description}</p>

                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={bookingHandler}>
                            <br />
                            <label>Your Email:</label>
                            <input className='w-full mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled></input>
                            <br />
                            <label>Your Name:</label>
                            <input className='w-full mb-2' type="text" value={user?.displayName} name="buyerName" placeholder='Item Name' disabled required readOnly></input>
                            <br />
                            <label>Item Name:</label>
                            <input className='w-full mb-2' type="text" name="toolName" value={item.name} placeholder="Tool Name" readOnly disabled></input>
                            <br />
                            <label>Minimum Order:</label>
                            <input className='w-full mb-2' type="number" name="minimum" placeholder={item.minimum}></input>
                            <br />
                            <label>Available Quantity:</label>
                            <input className='w-full mb-2' type="number" name="quantity" value={item.quantity} placeholder="" required readOnly disabled></input>
                            <br />
                            <label>Per Unit Price:</label>
                            <input className='w-full mb-2' type="number" name="price" value={item.price} placeholder="" required readOnly disabled></input>
                            <br />
                            <input className='w-full mb-2' type="number" name="number" placeholder="Your Contact Number" required></input>
                            <br />
                            <input className='w-full mb-2' type="text" name="address" placeholder='Your Address' required></input>
                            <br />
                            <input className='w-full mb-2' type="text" name="info" placeholder='Additional Information' required></input>
                            <br />
                            <input className='btn btn-secondary' type='submit' value='Booking'></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolPurchase;