import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K26vvDN484WNYDOTppG4gU9ne06nL8pUrmkL8M9y5tpDALMA9CLfD0GHCsmGIFOXcagPUQ4rRJlxLStdADX29ma00RjTcisNq');
const queryClient = new QueryClient();

const Payment = () => {
    const { id } = useParams();
    const url = `https://infinite-refuge-16711.herokuapp.com/booking/${id}`;
    const { data: item, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success'>Hello, {item.buyerName}</p>
                    <h2 class="card-title">Please Pay for {item.toolName} </h2>
                    {/* <p>We will see you on <span className='text-orange-400'>{appointment.date}</span> at {appointment.slot}</p> */}
                    <p>Please Pay: $ {item.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm item={item}/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <Payment />
    </QueryClientProvider>
    );
}