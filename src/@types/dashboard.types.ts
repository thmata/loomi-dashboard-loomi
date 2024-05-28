interface GrowthData {
    value: number;
    growth: number;
}

interface ProductData {
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

interface Metrics {
    value: number;
    growth: number;
}

export interface ConversionsResume {
    "total-per-day": Metrics;
    "products-view-per-month": Metrics;
    "product-page-conversion-per-month": Metrics;
    "add-to-cart-per-month": Metrics;
    "checkout-email-per-month": Metrics;
    "checkout-payment-per-month": Metrics;
    "checkout-freight-per-month": Metrics;
}

export interface Product {
    createdAt: string;
    name: string;
    color: string;
    status: string;
    description: string;
    id: string;
}
