import NavBarAndMenuBar from "@/components/TopNavBar/TopNavBar"
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard - Logistica"
}
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function LogLayout({ children }: DashboardLayoutProps) {
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