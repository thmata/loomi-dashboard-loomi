import NavBarAndMenuBar from "@/components/TopNavBar/TopNavBar"

export const metadata = {
    title: "Dashboard - Logistica"
}

export default function LogLayout({ children }: any) {
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