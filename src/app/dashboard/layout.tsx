import NavBarAndMenuBar from "@/components/TopNavBar/TopNavBar"

export const metadata = {
    title: "Dashboard - Início"
}

export default function DashboardLayout({ children }: any) {
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