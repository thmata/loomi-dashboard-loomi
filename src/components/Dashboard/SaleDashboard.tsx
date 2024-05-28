import React from 'react';
import OrdersPerMonth from './components/OrdersPerMonth';
import ExpectedProfit from "./components/ExpectedProfit";

const SaleDashboard = () => {
    return (
        <div>
            <h3 className="mt-[40px] pl-[20px] mb-[32px] text-left font-bold text-[28px] leading-7 tracking-wide text-[#5A4CA7]">
                Dashboard de vendas
            </h3>
            <div className="flex flex-wrap">
                <OrdersPerMonth />
                {/* <ExpectedProfit /> */}
            </div>
        </div>
    );
};

export default SaleDashboard;