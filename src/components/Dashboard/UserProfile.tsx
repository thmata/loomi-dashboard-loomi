"use client"
import React, { useEffect, useState } from 'react';
import OrdersPerMonth from './components/OrdersPerMonth';
import DonutGraphic from './components/DonutGraphic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"
import axios from 'axios';
import { UserProfileProps } from "@/@types/dashboard.types"

interface PropsInside {
    category: string[],
    value: number[]
}

interface ValuesProps {
    sessionPerPage: PropsInside;
    transactionsPerClientType: PropsInside;
    transactionsPerAge: PropsInside;
}

const UserProfile = () => {

    const [values, setValues] = useState<ValuesProps>({
        sessionPerPage: {
            category: [],
            value: []
        },
        transactionsPerClientType: {
            category: [],
            value: []
        },
        transactionsPerAge: {
            category: [],
            value: []
        }
    });

    const transformData = (data: any) => {
        const categories = Object.keys(data);
        const values = Object.values(data);
        return {
            category: categories.map((item: string) => { return item === "male" ? "Masculino" : "Feminino" }),
            value: values
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: { data: UserProfileProps } = await axios.get('https://628bf017667aea3a3e387e51.mockapi.io/users-resume');
                const sessionPerPage = transformData(response.data['sessions-per-sex']);
                const transactionsPerClientTypeCategory = response.data['transactions-per-client-type'].map((item: { category: string, value: number }) => { return item.category });
                const transactionsPerClientTypeValue = response.data['transactions-per-client-type'].map((item: { category: string, value: number }) => { return item.value });
                const transactionsPerAgeCategory = response.data['transactions-per-age'].map((item: { category: string, value: number }) => { return item.category });
                const transactionsPerAgeValue = response.data['transactions-per-age'].map((item: { category: string, value: number }) => { return item.value });
                setValues({
                    sessionPerPage: {
                        category: sessionPerPage.category,
                        value: sessionPerPage.value as number[]
                    },
                    transactionsPerClientType: {
                        category: transactionsPerClientTypeCategory.map((item: string) => { return item === "new" ? "Novo cliente" : "Cliente retornando" }),
                        value: transactionsPerClientTypeValue
                    },
                    transactionsPerAge: {
                        category: transactionsPerAgeCategory,
                        value: transactionsPerAgeValue
                    }
                })

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3 className="mt-[40px] pl-[20px] mb-[32px] text-left font-bold text-[28px] leading-7 tracking-wide text-[#5A4CA7]">
                Dashboard de vendas
            </h3>
            <div className="flex flex-wrap">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2.1}
                    centeredSlides={false}
                    className='SwiperSliderUserProfile'
                    style={{ marginLeft: 0, paddingBottom: 5, paddingTop: 5 }}
                    breakpoints={
                        {
                            360: {
                                slidesPerView: 1.1,
                                spaceBetween: 32
                            },
                            1024: {
                                slidesPerView: 1.7,
                                spaceBetween: 32
                            },
                            1445: {
                                slidesPerView: 2.1,
                                spaceBetween: 32
                            },
                            1736: {
                                slidesPerView: 2.5,
                                spaceBetween: 32
                            },
                        }
                    }
                >
                    <SwiperSlide> <DonutGraphic title={"Sessões por idade"} values={values.transactionsPerAge} /></SwiperSlide>
                    <SwiperSlide> <DonutGraphic title={"Sessões por página"} values={values.sessionPerPage} /></SwiperSlide>
                    <SwiperSlide> <DonutGraphic title={"Sessões por tipo de cliente "} values={values.transactionsPerClientType} /></SwiperSlide>
                </ Swiper>

            </div>
        </div>
    );
};

export default UserProfile;