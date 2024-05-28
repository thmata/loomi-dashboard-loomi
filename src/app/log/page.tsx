import React from 'react';
import Map from '@/components/Map';

const Log = () => {
    return (
        <>
            <h1 className='text-[#4E5D66] text-[28px] mb-[40px] ' > Regiões de entrega </h1>
            <div className='max-w-[1736px] max-h-[824px] '>
                <Map />
            </div>
        </>
    );
};

export default Log;