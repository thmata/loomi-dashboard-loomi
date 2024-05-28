"use client"
import DropDownGraphics from '@/components/DropDownGraphics';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const OrdersPerMonth = () => {
    const [values, setValues] = useState<Number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month');
                const valueArray = response.data.map((item: { month: number, value: number }) => item.value);
                setValues(valueArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const options = {
        series: [{
            data: values
        }],
        chart: {
            toolbar: {
                show: false
            },
            height: 150,
            type: 'bar',
            events: {
                click: function ({ chart, w, e }: any) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: ['#393C56'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['JAN'],
                ['FEV'],
                ['MAR'],
                'ABR',
                ['MAI'],
                ['JUN'],
                ['JUL'],
                ['AGO'],
                "SET",
                "OUT",
                "NOV",
                "NOV"

            ],
            labels: {
                style: {
                    colors: ['#393C56'],
                    fontSize: '12px',
                }
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            show: false,
        }
    };

    return (
        <div className="dashboard-card bg-white boxShadowCustom p-[25px] rounded-[12px] text-[#333333] font-bold w-[608px]">
            <div className='flex justify-between items-center'>
                <h2 className='text-[19px]'>Pedidos por mês</h2>
                <DropDownGraphics />

            </div>
            {/* @ts-ignore */}
            <Chart options={options} series={options.series} type={options.chart.type} height={300} width={550} />
        </div>
    );
};

export default OrdersPerMonth;
