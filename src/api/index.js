import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        /*
        const { data } = await axios.get(url); 
         //To get data, write 'resopnse.data', disturctre it by '{data}'
         const modifiedData  = {
             confirmed: data.confirmed,
             recovered: data.recovered,
             deaths: data.deaths,
             lastUpdate: data.lastUpdate
         }
           return modifiedData;
                      OR  */

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        const modifiedData = { confirmed, recovered, deaths,lastUpdate };
        return modifiedData;
    } catch (error) {

    }
}


export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    }catch(error) {

    }
}
