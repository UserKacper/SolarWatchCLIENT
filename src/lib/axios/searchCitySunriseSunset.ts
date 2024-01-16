import axios from "axios";

interface TCityData {
    name: string;
    sunset: Date;
    sunrise: Date;
}

export default async function searchCitySunriseSunset(date: Date | undefined, city: string | undefined, setFetchedData: (cityName: string, sunset: Date, sunrise: Date) => void): Promise<void> {
    try {
        if (!date || !city) {
            throw new Error("Date and city are required parameters");
        }
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');


        const body = {
            cityName: city,
            date: formattedDate,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const URL = process.env.REACT_APP_BASE_URL + "/SolarWatchApi";

        const response = await axios.post(URL, body, { headers: headers });

        const { name, sunset, sunrise }: TCityData = response.data;

        setFetchedData(name, sunset, sunrise);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
