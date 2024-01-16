
import { create } from "zustand";

export type TCityDataResponse = {
    cityName: string;
    sunset: Date | undefined;
    sunrise: Date | undefined;
    setCityData: (cityName: string, sunset: Date, sunrise: Date) => void;
};

export const cityDataStore = create<TCityDataResponse>((set) => ({
    cityName: "",
    sunset: undefined,
    sunrise: undefined,
    setCityData: (cityName: string, sunset: Date | undefined, sunrise: Date | undefined) =>
        set((state) => ({
            ...state,
            cityName: cityName,
            sunset: sunset,
            sunrise: sunrise,
        })),
}));
