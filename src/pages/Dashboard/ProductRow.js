import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, speciality, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
            <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                {/* <button onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</button> */}
                </td>
        </tr>
    );
};

export default ProductRow;