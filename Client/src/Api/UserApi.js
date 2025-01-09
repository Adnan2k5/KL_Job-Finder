import client from "../AxiosClient/AxiosClient";




export const getAllUser = async () => {
    return await client.get("/api/user");
}

export const registerUser = async (data) => {
    return await client.post("/api/register", data)
}