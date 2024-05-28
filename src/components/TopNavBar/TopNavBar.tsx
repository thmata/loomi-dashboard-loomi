"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import "./style.css"
import Link from 'next/link';
import { CatSvg, HomeSvg, LogSvg, CatSelectedSvg, LogSelectedSvg } from '../../../public/svg/menuIcons';

const NavBarAndMenuBar = ({ children }: { children: ReactNode }) => {
    const [pathValue, setPathValue] = useState('');

    const [user, setUser] = useState({
        name: "",
        username: "",
        avatar: ""
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = new URL(window?.location?.href);
            const path = url.pathname;
            const valorDepoisDaBarra = path.split('/')[1];
            setPathValue(valorDepoisDaBarra);
        }
    }, []);


    async function getUserInformation() {
        const response = await fetch("https://628bf017667aea3a3e387e51.mockapi.io/me").then(res => res.json())
        setUser(response)
    }

    useEffect(() => {
        getUserInformation()
    }, [])


    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white bg-padding-box shadow-md text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <img src="/svg/logo-loomi-dashboard.svg" alt="Logo da sua empresa" className="w-[69px] h-[60px] mr-2" />
                </div>
                <div className="flex items-center" >
                    <span className="text-sm text-[#4E5D66] text-[16px] font-medium mr-[13px]">{user && user.name}</span>
                    <img className="w-[40px] h-[40px] rounded-full" src={user.avatar} alt="" />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="flex flex-1 overflow-hidden mt-[107px]">
                <div className="bg-white ml-[16px] text-white w-[88px] h-[964px] overflow-y-auto rounded-lg boxShadowCustom">
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/menu.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    <Link style={{ opacity: pathValue !== "dashboard" ? 0.6 : 1 }} href={"/dashboard"} className={`flex flex-col items-center cursor-pointer wrapperIcon ${pathValue === "dashboard" ? "active" : ""}`}>
                        <HomeSvg width={40} height={40} className="m-[24px]" />
                    </Link>
                    {pathValue === "product" ? <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon active`}>
                        <CatSelectedSvg width={40} height={40} className="m-[24px]" />
                    </Link> : <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <CatSvg width={40} height={40} className="m-[24px]" />
                    </Link>}
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/services.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    {pathValue === "log" ? <Link href={"/log"} className={`flex flex-col items-center cursor-pointer wrapperIcon active logsvg`}>
                        <LogSelectedSvg fill={"#fff"} width={40} height={40} className="m-[24px]" />
                    </Link> : <Link href={"/log"} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <LogSvg fill={"#fff"} width={40} height={40} className="m-[24px]" />
                    </Link>}
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/Buy.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/card.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/text.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/person.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                    <Link href={""} className={`flex flex-col items-center cursor-pointer wrapperIcon`}>
                        <Image width={40} height={40} src="/svg/menuIcons/gear.svg" className="w-[40px] h-[40px] m-[24px]" alt={''} />
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto p-6 pl-[40px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavBarAndMenuBar;
