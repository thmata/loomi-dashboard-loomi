"use client"
import { signOut } from 'next-auth/react'

export function LogoutButton() {
    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}