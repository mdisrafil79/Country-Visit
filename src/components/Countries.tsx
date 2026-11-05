import { use } from "react";
import type { CountryType } from "../Type"
import Country from "./Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise);
    console.log(countries)
    return (
        <div>
            <h2>Countries: </h2>
            <ul>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </ul>
        </div>
    )
}