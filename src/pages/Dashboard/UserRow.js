import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            // })

            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`successfully made an admin`);
                }
            })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Delete User</button></td>


        </tr>
    );
};

export default UserRow;