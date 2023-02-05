import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import DeleteConfirmation from './DeleteConfirmation';
import ProductRow from './ProductRow';

const queryClient = new QueryClient();

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/item', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-purple-700'>Manage Product: {products.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((doctor, index) => <ProductRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingProduct}
                            ></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmation
                deletingDoctor={deletingProduct}
                refetch={refetch}
                setDeletingDoctor={setDeletingProduct}
            ></DeleteConfirmation>}

        </div>
    );
};

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <ManageProducts />
    </QueryClientProvider>
    );
}