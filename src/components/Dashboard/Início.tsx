"use client";
import React, { useEffect, useState } from 'react';
import MiniCard from './MiniCard';
import axios from 'axios';
import { DashboardData } from "@/@types/dashboard.types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"

const Inicio = () => {
    const [data, setData] = useState<DashboardData>({
        averageTicketLast24h: { value: 0, growth: 0 },
        monthlyAverageTicket: { value: 0, growth: 0 },
        maintenanceProducts: [],
        lowStock: [],
        ordersPlacedThisMonth: { value: 0, growth: 0 },
        productsSoldThisMonth: { value: 0, growth: 0 },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day'),
                    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-month'),
                    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/alerts'),
                    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/orders-month'),
                    axios.get('https://628bf017667aea3a3e387e51.mockapi.io/sells-month'),
                ]);

                const [
                    avgTicketDayResponse,
                    avgTicketMonthResponse,
                    maintenanceProductsResponse,
                    ordersMonthResponse,
                    sellsMonthResponse,
                ] = responses;

                setData({
                    averageTicketLast24h: avgTicketDayResponse.data,
                    monthlyAverageTicket: avgTicketMonthResponse.data,
                    maintenanceProducts: maintenanceProductsResponse.data,
                    lowStock: maintenanceProductsResponse.data, // Assuming low stock is also from maintenanceProductsResponse
                    ordersPlacedThisMonth: ordersMonthResponse.data,
                    productsSoldThisMonth: sellsMonthResponse.data,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const formatCurrency = (value: number | undefined) => {
        if (!value) {
            return '0,00';
        }
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <div>
            <h1 className="pl-[20px] mb-[32px] text-left font-bold text-[28px] leading-7 tracking-wide text-[#4E5D66]">
                Início
            </h1>
            <div className="flex flex-wrap">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    centeredSlides={false}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="SwiperSlider"
                    style={{ marginLeft: 0, paddingBottom: 5, paddingTop: 5 }}
                >
                    <SwiperSlide><MiniCard
                        title="Ticket médio últimas 24h"
                        percentage={data.averageTicketLast24h.growth}
                        subtitleText="em relação a ontem"
                        textValue={formatCurrency(data.averageTicketLast24h.value)}
                        monetary={true}
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Ticket médio mensal"
                        percentage={data.monthlyAverageTicket.growth}
                        subtitleText="em relação a julho"
                        textValue={formatCurrency(data.monthlyAverageTicket.value)}
                        monetary={true}
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Produtos em manutenção"
                        since={data.maintenanceProducts?.[0]?.since}
                        subtitleText=" "
                        textValue={data.maintenanceProducts?.[0]?.value}
                        monetary={false}
                        mensageValue="produtos"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Acabando o estoque"
                        since={data.lowStock?.[1]?.since}
                        subtitleText="repor o quanto antes"
                        subtitleTextColor="RED"
                        textValue={data.lowStock?.[1]?.value}
                        monetary={false}
                        mensageValue="produtos"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Pedidos realizados no mês"
                        percentage={data.ordersPlacedThisMonth.growth}
                        subtitleText="em relação a julho"
                        textValue={data.ordersPlacedThisMonth.value}
                        monetary={false}
                        mensageValue="pedidos"
                    /></SwiperSlide>
                    <SwiperSlide><MiniCard
                        title="Produtos vendidos no mês"
                        percentage={data.productsSoldThisMonth.growth}
                        subtitleText="em relação a julho"
                        textValue={data.productsSoldThisMonth.value}
                        monetary={false}
                        mensageValue="produtos"
                    /></SwiperSlide >
                </Swiper >
            </div >
        </div >
    );
};

export default Inicio;
