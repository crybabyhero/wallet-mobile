import { useAuth } from "../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { default: axios } = require("axios");


//const token = useAuth().user.token;
const api = axios.create({
    baseURL: "http://54.254.164.127/api/v1"
});

export const fetchPosts = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts', error.message);
    }
};

export const register = async (full_name, email, password, phone_number) => {
    try {
        console.log("ini api")
        const response = await api.post("auth/register", {
            full_name,
            email,
            password,
            phone_number
        })

        return response.data
    } catch (error) {
        console.log(error.response.data);
    }
}

export const login = async (email, password) => {
    try {
        const response = await api.post("auth/login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Transcation = async () => {
    const token = await AsyncStorage.getItem("userToken");
    try {
        if (!token) {
            throw new Error("Token is not available");
        }
        const response = await api.get("users/me", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch posts: ${error.message}`);
    }
};

export const historyTranscation = async () => {
    const token = await AsyncStorage.getItem("userToken");
    try {
        if (!token) {
            throw new Error("Token is not available");
        }
        const response = await api.get("transactions", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch posts: ${error.message}`);
    }
}

export const postTranscation = async (type, from_to, amount, description) => {
    const token = await AsyncStorage.getItem("userToken");
    try {
        const response = await api.post("transactions", {

            type,
            from_to,
            amount,
            description,
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        )
        return response.data
    } catch (error) {
        console.log(error.response.data);
    }
}




export default api;