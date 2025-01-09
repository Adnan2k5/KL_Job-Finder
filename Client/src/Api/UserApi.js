import client from "../AxiosClient/AxiosClient";

export const registerUser = async (data) => {
    return await client.post("/api/register", data)
}

export const login = async (data) => {
    return await client.post("/api/login", data)
}