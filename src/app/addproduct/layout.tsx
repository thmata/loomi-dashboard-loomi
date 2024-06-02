import NavBarAndMenuBar from "@/components/TopNavBar/TopNavBar"
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard - Adicionar Produto"
}
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function AddProductLayout({ children }: DashboardLayoutProps) {
    return (
        <html lang="en">
            <body>
                <NavBarAndMenuBar>
                    {children}
                </NavBarAndMenuBar>
            </body>
        </html>
    )
}