import ConversionFunnel from '@/components/Dashboard/ConversionFunnel';
import Início from '@/components/Dashboard/Início';
import SaleDashboard from '@/components/Dashboard/SaleDashboard';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <Início />
            <ConversionFunnel />
            <SaleDashboard />
        </div>
    );
};

export default Dashboard;