"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SearchProductComponent from '../SearchProductComponent';
import { Product } from "@/@types/dashboard.types";
import axios from 'axios';

const ProductList: React.FC = () => {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalProducts, setTotalProducts] = useState(0);
    const limit = 7;

    const fetchProducts = async (search = '', pageNum = 1) => {
        try {
            const response = await axios.get(`https://628bf017667aea3a3e387e51.mockapi.io/products`, {
                params: {
                    page: pageNum,
                    limit: limit,
                    search: search
                }
            });
            setProdutos(response.data);

            const totalResponse = await axios.get(`https://628bf017667aea3a3e387e51.mockapi.io/products`, {
                params: {
                    search: search
                }
            });
            setTotalProducts(totalResponse.data.length);

        } catch (error) {
            console.error("## ERROR", error);
        }
    };

    useEffect(() => {
        fetchProducts(searchTerm, page);
    }, [searchTerm, page]);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term !== '') {
            setPage(1);
        }
    };

    const totalPages = Math.ceil(totalProducts / limit);

    return (
        <div className="p-[40px] boxShadowCustom bg-white mt-[40px] rounded-[20px] max-w-[1736px]">
            <div className='flex justify-between items-center mb-[56px]'>
                <h4 className="text-2xl font-normal">Listagem de Produtos</h4>
                <SearchProductComponent onSearch={handleSearch} />
            </div>
            <div className="overflow-x-auto">
                <div className="flex flex-col bg-white">
                    <div className="flex w-full mb-[32px]">
                        <div className="flex-1 px-[40px] py-2 font-bold bg-[#4E5D66] text-[16px] text-[#FFF] rounded-[9px] mr-[40px] max-w-[546px]">PRODUTO</div>
                        <div style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }} className="flex-1 px-[40px] py-2 font-bold bg-[#4E5D66] text-[16px] text-[#FFF] rounded-[9px] max-w-[420px]">CORES</div>
                        <div style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} className="flex-1 px-[40px] py-2 font-bold bg-[#4E5D66] text-[16px] text-[#FFF] rounded-[9px] max-w-[650px]">ESPECIFICAÇÕES</div>
                        <div style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} className="flex-1 px-[40px] py-2 font-bold bg-[#4E5D66] text-[16px] text-[#FFF] rounded-[9px] max-w-[200px]">STATUS</div>
                    </div>
                    {typeof produtos === "string" ? <p className="text-center">Nenhum produto encontrado</p> : produtos?.map((item) => (
                        <div key={item.id} className="flex w-full mt-2">
                            <div className="text-[#333333] flex items-center text-[20px] flex-1 px-4 py-2 border-b border-gray-300 truncate mr-[40px] max-w-[546px] whitespace-normal">
                                <Image src={"/img/productImage.png"} alt='' width={80} height={80} className='mr-[24px]' />
                                {item.name}
                            </div>
                            <div className="text-[#333333] flex items-center text-[20px] flex-1 px-4 py-2 border-b justify-center border-gray-300 truncate max-w-[420px] whitespace-normal">{item.color}</div>
                            <div className="text-[#333333] flex items-center text-[20px] flex-1 px-4 py-2 border-b justify-center border-gray-300 truncate max-w-[650px] whitespace-normal">{item.description}</div>
                            <div className="text-[#333333] flex items-center text-[20px] flex-1 px-4 py-2 border-b justify-center border-gray-300 truncate max-w-[200px] whitespace-normal">{item.status}
                                <Image src={"/svg/checkProduct.svg"} alt='' width={40} height={40} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end items-center mt-[40px]">
                <div className='flex mr-[16px]'>
                    {typeof produtos !== "string" ? <p className="text-[#333333] opacity-[40%]">{page} de {totalPages}</p> : <p className="text-[#333333] opacity-[40%]">0 de 0</p>}
                </div>
                <div className="flex">
                    <button disabled={typeof produtos === "string" || page === 1} onClick={() => setPage(prev => Math.max(prev - 1, 1))}>
                        <Image src={"/svg/prevPage.svg"} className='mr-[8px]' alt='prevPage' width={40} height={40} />
                    </button>
                    <button disabled={typeof produtos === "string" || page === totalPages} onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}>
                        <Image src={"/svg/nextPage.svg"} alt='nextPage' width={40} height={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
