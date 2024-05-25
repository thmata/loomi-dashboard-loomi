import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const [name, setName] = useState("");

    const handleNameChange = (name: string) => {
        setName(name)
    }

    return <UserContext.Provider value={{ name, handleNameChange }}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
    useContext(UserContext)
}