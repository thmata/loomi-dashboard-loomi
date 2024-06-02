import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './style.css';
import { useFormContext } from 'react-hook-form';


interface SubOptions {
    [key: string]: string[];
}

interface SelectedSubOptions {
    [key: string]: string[];
}

interface MultiLevelSelectProps {
    options: SubOptions;
    placeholder: string;
    title: string;
    onChange: (selected: SelectedSubOptions) => void;
    watch: () => void;
}

const MultiLevelSelect: React.FC<MultiLevelSelectProps> = ({ options, placeholder, title, onChange, watch }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedSubOptions, setSelectedSubOptions] = useState<SelectedSubOptions>({});
    const [openSubOptions, setOpenSubOptions] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const formState: any = watch();

    useEffect(() => {
        if (formState.name === undefined) {
            setSelectedOptions([]);
            setSelectedSubOptions({});
        }
    }, [formState])

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        if (option in options) {
            const updatedOpenSubOptions = [...openSubOptions];
            if (updatedOpenSubOptions.includes(option)) {
                const index = updatedOpenSubOptions.indexOf(option);
                updatedOpenSubOptions.splice(index, 1);
            } else {
                updatedOpenSubOptions.push(option);
            }
            setOpenSubOptions(updatedOpenSubOptions);
        }
    };

    const handleSubOptionClick = (mainOption: string, subOption: string) => {
        const updatedSubOptions = { ...selectedSubOptions };
        if (!updatedSubOptions[mainOption]) {
            updatedSubOptions[mainOption] = [];
        }

        if (!updatedSubOptions[mainOption].includes(subOption)) {
            updatedSubOptions[mainOption].push(subOption);
        } else {
            const index = updatedSubOptions[mainOption].indexOf(subOption);
            updatedSubOptions[mainOption].splice(index, 1);
        }

        if (updatedSubOptions[mainOption].length === 0) {
            delete updatedSubOptions[mainOption];
            setSelectedOptions(selectedOptions.filter(option => option !== mainOption));
        } else {
            if (!selectedOptions.includes(mainOption)) {
                setSelectedOptions([...selectedOptions, mainOption]);
            }
        }

        setSelectedSubOptions(updatedSubOptions);
        onChange(updatedSubOptions); // Call the onChange function passed as a prop
    };

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative max-w-[430px] w-full" ref={dropdownRef}>
            <div className="mb-4 flex items-center">
                <div className="w-[100%]">
                    <div
                        onClick={toggleDropdown}
                        className="cursor-pointer rounded-[9px] bg-[#F3F5F6] px-4 py-1 h-[37px] flex items-center justify-between"
                    >
                        <p className='opacity-[0.4] text-[#333333]'>{placeholder}</p>
                        <Image className={`${isOpen ? "rotate-180" : ""}`} src={"/svg/down-arrow.svg"} alt='' width={20} height={20} />
                    </div>
                    {isOpen && (
                        <div className="absolute bg-[#F5F5F5] mt-4 w-full z-10 rounded-2xl px-[24px] py-[16px] max-h-[420px] overflow-scroll overflow-x-hidden">
                            <p className="text-[#4E5D66] text-[18px] font-bold mb-3" >{title}</p>
                            {Object.keys(options).map(option => (
                                <div key={option} className="relative option-item">
                                    <div
                                        className="flex items-center py-2 cursor-pointer"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <span className='text-[#FFF] bg-[#EDA268] w-6 h-6 text-center rounded-[4px] mr-[8px]'>{openSubOptions.includes(option) ? '-' : '+'}</span>
                                        <p className='text-[#4E5D66] text-4'>{option}</p>
                                    </div>
                                    {options[option] && openSubOptions.includes(option) && (
                                        <div className="ml-8">
                                            {options[option].map(subOption => (
                                                <div
                                                    key={subOption}
                                                    className="relative flex items-center px-2 py-2 cursor-pointer suboption-item"
                                                    onClick={() => handleSubOptionClick(option, subOption)}
                                                >
                                                    <div className={`w-[24px] h-[24px] rounded-[5px] mr-[12px] bg-[#F5F5F5] flex justify-center ${selectedSubOptions[option]?.includes(subOption) ? "bg-[#C0D7E5]" : "border border-[#2F2D32]"}`}>{selectedSubOptions[option]?.includes(subOption) ? <Image src={"/svg/check-mark.svg"} width={14} height={14} alt='checkmark' /> : ''} </div>
                                                    <p className='text-[#4E5D66] text-4'>{subOption}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div>
                {selectedOptions.map(option => (
                    <div className='flex items-center mt-[24px] first:mt-[0]' key={option}>
                        <p className='text-[#4E5D66] mr-3 ' >{option}</p>
                        {selectedSubOptions[option]?.map((subOption, index) => (
                            <p style={{ background: "rgba(78, 93, 102, 0.24)" }} className=' rounded-[18px] px-3 py-[6px] text-[#333333] mr-[5px]' key={index}>{subOption}</p>
                        )) || ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiLevelSelect;
