import axios from "axios";

const URL_1 = 'https://api.thevirustracker.com/free-api';

const cTotal = async (query) => {
    const data = await axios.get(URL_1,{
        params : {
            countryTotal : query
        }
    });
    return data;
}

export default cTotal;