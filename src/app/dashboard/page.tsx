"use client"
import ConversionFunnel from '@/components/Dashboard/ConversionFunnel';
import Início from '@/components/Dashboard/Início';
import ProductList from '@/components/Dashboard/ProductList';
import SaleDashboard from '@/components/Dashboard/SaleDashboard';
import UserProfile from '@/components/Dashboard/UserProfile';
import React from 'react';

const Dashboard = () => {

    if (typeof window === 'undefined') {
        return null
    }

    return (
        <div>
            <Início />
            <SaleDashboard />
            <ConversionFunnel />
            <UserProfile />
            <ProductList />
        </div>
    );
};

export default Dashboard;