"use client"
import DetailsComponent from '@/components/AddProduct/DetailsComponent';
import FormComponent from '@/components/AddProduct/FormComponent';
import React from 'react';

const AddProduct = () => {

    return (
        <div>
            <h1 className="pl-[20px] mb-[32px] text-left font-bold text-[28px] leading-7 tracking-wide text-[#4E5D66]">
                Adicionar produto
            </h1>

            <div>
                <FormComponent />
            </div>

        </div>
    );
};

export default AddProduct;