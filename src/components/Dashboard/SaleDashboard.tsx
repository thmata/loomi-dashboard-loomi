"use client"
import React, { useEffect, useState } from 'react';
import OrdersPerMonth from './components/OrdersPerMonth';
import DonutGraphic from './components/DonutGraphic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"
import axios from 'axios';

interface ValuesProps {
    category: string[];
    value: number[];
}

const SaleDashboard = () => {

    const [values, setValues] = useState<ValuesProps>({
        category: [],
        value: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://628bf017667aea3a3e387e51.mockapi.io/orders-per-category');
                const values = response.data.map((item: { category: string, value: number }) => { return item.value })
                const categories = response.data.map((item: { category: string, value: number }) => { return item.category })
                setValues({
                    category: categories,
                    value: values
                });
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
                    slidesPerView={2}
                    centeredSlides={false}
                    style={{ marginLeft: 0, paddingBottom: 5, paddingTop: 5 }}
                    className='SwiperSliderUserProfile'
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
                    <SwiperSlide> <OrdersPerMonth /></SwiperSlide>
                    <SwiperSlide> <DonutGraphic title={"Pedidos por categorias"} values={values} /></SwiperSlide>
                </ Swiper>

            </div>
        </div>
    );
};

export default SaleDashboard;