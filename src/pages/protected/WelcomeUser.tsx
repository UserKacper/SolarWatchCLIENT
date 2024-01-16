import { DatePicker } from '../../features/main-datePicker/DatePicker'
import { Input } from '../../components/ui/input'
import { userData } from '../../stores/auth-store'
import { Button } from '../../components/ui/button'
import searchCitySunriseSunset from '../../lib/axios/searchCitySunriseSunset'
import { useState } from 'react'
import { cityDataStore } from "../../stores/cityData-store";
import { CardHeader } from '../../components/ui/card'
import * as datefns from "date-fns"

const WelcomeUser = () => {
    const user = userData()
    const [date, setDate] = useState<Date | undefined>()
    const [city, setCity] = useState<string>()
    const cityData: any = cityDataStore()
    return (
        <div className='w-full h-screen bg-slate-200'>
            <div className='flex justify-center'>
                <div className='w-2/4 h-screen bg-slate-100 -100'>
                    <div className='flex flex-col justify-center text-center shadow-md bg-slate-300 pb-5'>
                        <p className='font-bold mt-2'>WelcomeUser</p>
                        <p className=''>{user.username}</p>
                    </div>
                    <div className='w-full flex flex-col justify-center'>
                        <div className='w-full mt-5 text-center'>Check Sunset and Sunrise Time:</div>
                        <div className='flex justify-center flex-col'>
                            <div className='flex justify-center mt-3 gap-3'>
                                <Input placeholder='city...' className=' flex justify-center w-1/3 ' onChange={(e) => setCity(e.target.value)} />
                                <DatePicker setDate={setDate} date={date} />
                            </div>
                            <div className='w-full flex justify-center mt-4'>
                                <Button className='w-1/2' disabled={!date || !city && true} onClick={() => { searchCitySunriseSunset(date, city, cityData.setCityData) }}>Search</Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center mt-20'>
                        <div className={`${!cityData.sunset && !cityData.sunrise ? "hidden" : "w-1/2 flex flex-col bg-slate-300 text-center"}`}>
                            <CardHeader>{cityData.cityName}</CardHeader>
                            <div>Sunrise: {datefns.getHours(cityData.sunrise) + ":" + datefns.getMinutes(cityData.sunrise) + ":" + datefns.getSeconds(cityData.sunrise)}</div>
                            <div>Sunset: {datefns.getHours(cityData.sunset) + ":" + datefns.getMinutes(cityData.sunset) + ":" + datefns.getSeconds(cityData.sunset)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeUser