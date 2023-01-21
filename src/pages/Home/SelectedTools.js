import React from 'react';
import useItems from '../../hooks/useItems';
import HomeTools from './HomeTools';

const SelectedTools = () => {
    const [items] = useItems();

    return (
        <div className='bg-gray-100'>
            <div className='card-body'>
                <h4 className='card-title mt-3 text-2xl bg-orange-100 h-20 rounded shadow-xl'>Paintbrush</h4>
                
            </div>
            <div className='grid lg:grid-cols-3 gap-4 sm: grid-cols-1 ml-5 mb-12'>
                {
                    items.slice(-6).map(item => <HomeTools
                        key={item._id}
                        item={item}
                    ></HomeTools>)
                }
            </div>
        </div>

    );
};

export default SelectedTools;