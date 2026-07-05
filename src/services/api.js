import axios from "axios";

const api = axios.create({
    baseURL: "https://demohotelsapi.pythonanywhere.com/",
    timeout: 10000,
});

export const getHotels = async () => {
    const response = await api.get("hotels/");

    // Return only the hotels array
    return response.data.data;
};

export default api;