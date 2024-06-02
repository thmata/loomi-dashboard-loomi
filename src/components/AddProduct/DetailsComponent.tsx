import React, { useState } from 'react';
import { UseFormRegister, UseFormHandleSubmit, UseFormWatch, FieldErrors } from 'react-hook-form';
import MultiLevelSelect from './MultiLevelSelect';

interface DetailsComponentProps {
    register: UseFormRegister<any>;
    handleSubmit: UseFormHandleSubmit<any>;
    watch: UseFormWatch<any>;
    errors: FieldErrors<any>;
    onSubmit: (data: any) => void;
    setSelectedTags: (selected: any) => void;
    selectedTags: string[] | {};
    setSelectedCategories: (selected: any) => void;
    selectedCategories: string[] | {};
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ register, errors, onSubmit, setSelectedCategories, setSelectedTags, watch }) => {
    const optionsCategory = {
        'Ambientes': [],
        'Aparadores': ['Moderno', 'Clássico'],
        'Área externa': ['Cadeiras', 'Mesas', 'Poltronas'],
        'Estofados': ['Poltronas', 'Clássico', 'Moderno'],
        'Mesas': []
    };

    const optionsTags = {
        'Características': ["fixa, acústico", "quente"],
        'Ambientes': ["home office", "aberto"],
        'Material': ['Melamínico', 'Metal Pintado', 'Madeira Natural', "Vidro", "Tecido", "Tela", "Vidro", "Couro", "Pintura/Laca"],
        'Estofados': [],
        'Mesas': []
    };


    return (
        <div className='p-[40px] boxShadowCustom bg-white mt-[40px] rounded-[20px] max-w-[1736px]'>
            <div className="grid grid-cols-3 gap-8">
                <div>
                    <h3 className="text-4 font-normal mb-5 text-[#333333] ">Detalhes</h3>
                    <div className="mb-5 relative flex items-center">
                        <label className="w-full max-w-[69px] text-[#4E5D66] mr-[57px]">Nome:</label>
                        <input {...register('name', { required: true })} className="w-2/3 rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                        {errors.name && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                    </div>
                    <div className="mb-5 relative flex items-center">
                        <label className="w-full max-w-[69px] text-[#4E5D66] mr-[57px]">ID:</label>
                        <input {...register('id', { required: true })} className="w-2/3 rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                        {errors.id && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                    </div>
                    <div className="mb-5 relative flex items-center">
                        <label className="w-full max-w-[69px] text-[#4E5D66] mr-[57px]">Código:</label>
                        <input {...register('code', { required: true })} className="w-2/3 rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                        {errors.code && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                    </div>
                    <div className="mb-5 relative flex items-center">
                        <label className="w-full max-w-[69px] text-[#4E5D66] mr-[57px]">Seller:</label>
                        <input {...register('seller', { required: true })} className="w-2/3 rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                        {errors.seller && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                    </div>
                    <div className="mb-5 relative flex items-center">
                        <label className="w-full max-w-[69px] text-[#4E5D66] mr-[57px]">Prazo de entrega:</label>
                        <input {...register('deliveryTime', { required: true })} className="w-2/3 rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                        {errors.deliveryTime && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                    </div>
                </div>

                <div>
                    <h3 className="text-4 font-normal mb-5 text-[#333333]">Categorias</h3>
                    <div className="mb-5 relative flex items-center">
                        <MultiLevelSelect
                            options={optionsCategory}
                            placeholder={"Selecionar categorias"}
                            title={"Categorias"}
                            onChange={(selected) => setSelectedCategories(selected)}
                            watch={watch}
                        />
                        {errors.category && <span className="text-red-500 text-xs absolute left-0 bottom-[-20px]">Obrigatório</span>}
                    </div>
                </div>

                <div>
                    <h3 className="text-4 font-normal mb-5 text-[#333333]">Tags</h3>
                    <div className="mb-5 relative flex items-center">
                        <MultiLevelSelect
                            options={optionsTags}
                            placeholder={"Selecionar tags"}
                            title={"Categorias e tags"}
                            onChange={(selected) => setSelectedTags(selected)}
                            watch={watch}
                        />
                        {errors.tags && <span className="text-red-500 text-xs absolute left-0 bottom-[-20px]">Obrigatório</span>}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-4 font-normal mb-5 text-[#333333]">Especificações</h3>
                <div className="mb-5 relative flex items-center">
                    <label className="w-full max-w-[98px] text-[#4E5D66] mr-[28px]">Subtítulo:</label>
                    <input {...register('subtitle', { required: true })} className="w-[100%] rounded-[9px] bg-[#F3F5F6] px-2 py-1 h-[37px]" />
                    {errors.subtitle && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                </div>
                <div className="mb-5 relative flex">
                    <label className="w-full max-w-[98px] text-[#4E5D66] mr-[28px]">Informações:</label>
                    <textarea rows={3} {...register('information', { required: true })} className="w-[100%] rounded-[9px] bg-[#F3F5F6] px-2 py-1 resize-none" />
                    {errors.information && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                </div>
                <div className="mb-5 relative flex items-center">
                    <label className="w-full max-w-[98px] text-[#4E5D66] mr-[28px]">Limpeza e cuidados:</label>
                    <textarea rows={3} {...register('care', { required: true })} className="w-[100%] rounded-[9px] bg-[#F3F5F6] px-2 py-1 resize-none" />
                    {errors.care && <span className="text-red-500 text-xs absolute left-[33%] bottom-[-20px]">Obrigatório</span>}
                </div>
            </div>


        </div>
    );
}

export default DetailsComponent;
