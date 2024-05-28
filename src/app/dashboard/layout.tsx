import NavBarAndMenuBar from "@/components/TopNavBar/TopNavBar"
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard - Início"
}
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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