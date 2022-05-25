import React from 'react';
import useItems from '../../hooks/useItems';
import HomeTools from './HomeTools';

const SelectedTools = () => {
    const [items] = useItems();

    return (
        <>
            <h4 className='text-center mt-3 text-title text-2xl'>Tools</h4>
            <div className='grid grid-cols-3 gap-4'>
                {
                    items.slice(0, 6).map(item => <HomeTools
                        key={item._id}
                        item={item}
                    ></HomeTools>)
                }
            </div>
        </>

    );
};

export default SelectedTools;