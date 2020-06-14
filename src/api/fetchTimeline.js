import axios from "axios";

const URL_1 = 'https://api.thevirustracker.com/free-api';

const cTimeline = async (query) => {
    const {data_2} = await axios.get(URL_1, {
        params : {
            countryTimeline : query
        }
    });
    return data_2;
}