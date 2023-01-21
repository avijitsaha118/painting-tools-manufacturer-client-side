import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const ToolDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     console.log(data);

    const onSubmit = async data => {
        const formData = new FormData();
   
        

        const booking = {
            // toolId: _id,
            // toolName: name,
            // price,

            buyer: user.email,
            buyerName: user.displayName,
            // address: event.target.address.value,
            // phone: event.target.phone.value

        }

            fetch(`https://paiting-tools-manufacturer-server-side.vercel.app/booking/${itemId}`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log('success', data)
                alert('user added successfully!');
               
            })

            
    }

    return (


        <div>
        <h2 className='text-2xl text-purple-700'>Booking your Tools</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>

                </label>
                <input type="text" disabled placeholder={item.name} className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            // message: 'Name is Required'
                        }
                    })} />
                {/* <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Per Unit Price</span>

                </label>
                <input type="text" disabled placeholder={item.price} className="input input-bordered w-full max-w-xs"
                    {...register("price", {
                        required: {
                            value: true,
                            // message: 'Name is Required'
                        }
                    })} />
                {/* <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>

                </label>
                <input type="number" placeholder={item.minimum} className="input input-bordered w-full max-w-xs"
                    {...register("minimum", 
                    
                    {
                        required: {
                            value: true,
                            min: item.minimum, 
                            max: item.quantity,
                            // message: 'Minimum or Maximum Quantity is Reached'
                        }
                    })} />
                {/* <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Available Quantity</span>

                </label>
                <input type="text" disabled placeholder={item.quantity} className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                        required: {
                            value: true,
                            // message: 'Name is Required'
                        }
                    })} />
                {/* <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Buyer Name</span>

                </label>
                <input type="text" disabled placeholder={user?.displayName} className="input input-bordered w-full max-w-xs"
                    {...register("buyerName", {
                        required: {
                            value: true,
                            // message: 'Name is Required'
                        }
                    })} />
                {/* <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>

                </label>
                <input type="email" disabled placeholder={user?.email} className="input input-bordered w-full max-w-xs"
                    {...register("buyer", {
                        required: {
                            value: true,
                            // message: 'Email is Required'
                        },
                        // pattern: {
                        //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        //     message: 'Provide a valid email'
                        // }
                    })} />
                {/* <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                </label> */}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Contact No</span>

                </label>
                <input type="number" placeholder="Your phone Number" className="input input-bordered w-full max-w-xs"
                    {...register("phone", {
                        required: {
                            value: true,
                            message: 'Contact Number is Required'
                        }
                    })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}


                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Address</span>

                </label>
                <input type="text" placeholder="Your address" className="input input-bordered w-full max-w-xs"
                    {...register("address", {
                        required: {
                            value: true,
                            message: 'Address is Required'
                        }
                    })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Aditional Info</span>

                </label>
                <input type="text" placeholder="Additional information" className="input input-bordered w-full max-w-xs"
                    {...register("info", {
                        required: {
                            value: true,
                            message: 'Addtional info is Required'
                        }
                    })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.info.message}</span>}

                </label>
            </div>

            <input className='btn w-full max-w-xs text-primary' type="submit" value="Booking" />
        </form>

    </div>


        // <div class="card card-side bg-base-100 shadow-xl flex">
        //     <figure><img src={item.img} alt="Movie" /></figure>
        //     <div class="card-body">
        //         <h2 class="card-title">{item.name}</h2>
        //         <p> {item.description}</p>
        //         <p>price: {item.price}</p>
        //         <p>Available Qunatity: {item.quantity}</p>
        //         <p>Minimum Order: {item.minimum}</p>
        //         <div class="card-actions justify-end">
        //             <button onClick={handleUpdateItem} class="btn btn-primary">Delivered</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ToolDetails;