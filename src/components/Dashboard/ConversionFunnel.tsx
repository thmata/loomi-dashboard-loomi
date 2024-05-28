"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ConversionsResume } from "@/@types/dashboard.types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"
import MiniCard from './components/MiniCard';

const ConversionFunnel = () => {

    const [data, setData] = useState<ConversionsResume>({
        "total-per-day": {
            value: 0,
            growth: 0
        },
        "products-view-per-month": {
            value: 0,
            growth: 0
        },
        "product-page-conversion-per-month": {
            value: 0,
            growth: 0
        },
        "add-to-cart-per-month": {
            value: 0,
            growth: 0
        },
        "checkout-email-per-month": {
            value: 0,
            growth: 0
        },
        "checkout-payment-per-month": {
            value: 0,
            growth: 0
        },
        "checkout-freight-per-month": {
            value: 0,
            growth: 0
        }
    });

    useEffect(() => {
        axios.get('https://628bf017667aea3a3e387e51.mockapi.io/conversions-resume')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);


    return (
        <div>
            <h1 className="mt-[40px] pl-[20px] mb-[32px] text-left font-bold text-[28px] leading-7 tracking-wide text-[#5A4CA7]">
                Funil de conversão
            </h1>
            <div className="flex flex-wrap">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={7}
                    centeredSlides={false}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="SwiperSlider"
                    style={{ marginLeft: 0, paddingBottom: 5, paddingTop: 5 }}
                    breakpoints={
                        {
                            1024: {
                                slidesPerView: 4.1,
                                spaceBetween: 32
                            },
                            1480: {
                                slidesPerView: 5.1,
                                spaceBetween: 32
                            },
                            1736: {
                                slidesPerView: 7,
                                spaceBetween: 32
                            },
                        }
                    }
                >
                    <SwiperSlide><MiniCard
                        title="Sessões"
                        percentage={data?.['total-per-day']?.growth}
                        subtitleText="em relação a ontem"
                        textValue={data?.['total-per-day']?.value}
                        monetary={false}
                        mensageValue="visualizações"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Visualizações de Produto"
                        percentage={data?.['products-view-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['products-view-per-month'].value}
                        monetary={false}
                        mensageValue="visualizações"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Conversão para a página de produtos"
                        percentage={data?.['product-page-conversion-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['product-page-conversion-per-month'].value}
                        monetary={false}
                        mensageValue="%"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Adições ao Carrinho"
                        percentage={data?.['add-to-cart-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['add-to-cart-per-month'].value}
                        monetary={false}
                        mensageValue="produtos"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Checkout - Frete"
                        percentage={data?.['checkout-freight-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['checkout-freight-per-month'].value}
                        monetary={false}
                        mensageValue="usuários"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Checkout - E-mail"
                        percentage={data?.['checkout-email-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['checkout-email-per-month'].value}
                        monetary={false}
                        mensageValue="usuários"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Checkout - Pagamento"
                        percentage={data?.['checkout-payment-per-month'].growth}
                        subtitleText="em relação a julho"
                        textValue={data?.['checkout-payment-per-month'].value}
                        monetary={false}
                        mensageValue="usuários"
                    /></SwiperSlide>
                </Swiper >

            </div>
        </div>
    );
};

export default ConversionFunnel;