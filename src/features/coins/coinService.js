import axios from "axios"

export const fetchTredingCoins = async () => {
    const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
    );
    return response.data.coins;
};

export const fecthcoin = async (id) => {
    const response =  await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
} ;