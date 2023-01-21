import React from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading';
const queryClient = new QueryClient();
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: items, isLoading } = useQuery('items', () => fetch('https://paiting-tools-manufacturer-server-side.vercel.app/item').then(res => res.json()))


    const imageStorageKey = 'e7129c29e256c12c32f599e89fea3719';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const items = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        minimum: data.minimum,
                        quantity: data.quantity,
                        img: img
                    }
                    //send to your database
                    fetch('https://paiting-tools-manufacturer-server-side.vercel.app/item', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(items)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added succefully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })
                }
                console.log('imgbb', result);
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-purple-700'>Add a new Tool Item</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Name</span>

                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Product Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Product Price is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Product Description is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>

                    </label>
                    <input type="number" placeholder="Minimum Order Number" className="input input-bordered w-full max-w-xs"
                        {...register("minimum", {
                            required: {
                                value: true,
                                message: 'Product Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>

                    </label>
                    <input type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Product Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn btn-primaryw-full max-w-xs' type="submit" value="Add a Product" />
            </form>

        </div>
    );
};

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <AddProduct />
    </QueryClientProvider>
    );
}