export interface GrowthData {
    value: number;
    growth: number;
}

export interface ProductData {
    type: string;
    value: number;
    since: string;
}

export interface DashboardData {
    averageTicketLast24h: GrowthData;
    monthlyAverageTicket: GrowthData;
    maintenanceProducts: ProductData[];
    lowStock: ProductData[];
    ordersPlacedThisMonth: GrowthData;
    productsSoldThisMonth: GrowthData;
}