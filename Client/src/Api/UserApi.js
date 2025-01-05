import client from "../AxiosClient/AxiosClient";




export const getAllUser = async () => {
    return await client.get("/api/user");
}