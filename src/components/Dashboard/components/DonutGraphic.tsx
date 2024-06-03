"use client"
import Chart from "react-apexcharts";

const DonutGraphic = ({ values, title }: { values: { category: string[], value: number[] }, title: string }) => {


    const options = {
        series: [...values.value],
        chart: {
            type: 'donut',
        },
        labels: [...values.category],
        colors: ['#1E90FF', '#FF6347', '#32CD32', '#FFD700', '#8A2BE2'],
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };


    return (
        <div className="dashboard-card bg-white boxShadowCustom p-[25px] rounded-[12px] text-[#333333] font-bold w-[608px] h-[100%]">
            <div className='flex justify-between items-center'>
                <h2 className='text-[19px]'>{title}</h2>
            </div>
            {/* @ts-ignore */}
            <Chart options={options} series={options.series} type={options.chart.type} height={300} width={550} />
        </div>
    )
}

export default DonutGraphic;