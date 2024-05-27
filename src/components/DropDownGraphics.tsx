import React, { useState } from 'react';

const DropDownGraphics = ({ disableProp = true }: { disableProp?: boolean }) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const years = ['2021', '2022', '2023', '2024'];

    const handleDropdownToggle = () => {
        if (disableProp) {
            return;
        }
        setIsOpen(!isOpen);
    };

    const handleYearSelect = (year: any) => {
        setSelectedYear(year);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-40">
            <div
                className={`${disableProp ? "bg-[#F3F5F6] text-[#d0d0d0]" : "bg-gray-100"} font-normal px-4 py-2 rounded-[9px] cursor-pointer flex justify-between items-center`}
                onClick={handleDropdownToggle}
            >
                {selectedYear || 'Ano'}
                <span className="ml-2"></span>
            </div>
            {isOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full shadow-lg z-10">
                    {years.map((year, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleYearSelect(year)}
                        >
                            {year}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownGraphics;
