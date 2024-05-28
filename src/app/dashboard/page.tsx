import ConversionFunnel from '@/components/Dashboard/ConversionFunnel';
import Início from '@/components/Dashboard/Início';
import ProductList from '@/components/Dashboard/ProductList';
import SaleDashboard from '@/components/Dashboard/SaleDashboard';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <Início />
            <ConversionFunnel />
            <SaleDashboard />
            <ProductList />
        </div>
    );
};

export default Dashboard;