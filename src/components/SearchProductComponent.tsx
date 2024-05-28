"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const SearchProductComponent = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="flex items-center h-[60px] bg-[#F3F5F6] border-gray-300 rounded-[8px] p-2 px-[40px] w-[388px] ">
      <input
        type="text"
        placeholder="Pesquisar produtos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-none outline-none flex-1 bg-[#F3F5F6]"
      />
      <Image src={"/svg/searchIcon.svg"} alt='search' width={19} height={19} />
    </div>
  );
};

export default SearchProductComponent;
