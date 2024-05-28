"use client"

import { UserProvider } from "@/context/user"
import { SessionProvider } from "next-auth/react"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SessionProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </SessionProvider>
        </>
    )
}