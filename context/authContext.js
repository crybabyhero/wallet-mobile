import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (token) => {
        setUser(token);
        await AsyncStorage.setItem("userToken", token);
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem("userToken");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);