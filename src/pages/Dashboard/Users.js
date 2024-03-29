import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import UserRow from './../Dashboard//UserRow';

const queryClient = new QueryClient();
const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>All Users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                 refetch={refetch}
                                user={user}
                                index={index+1}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <Users />
    </QueryClientProvider>
    );
}