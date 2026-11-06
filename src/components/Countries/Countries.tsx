import { use, useState } from "react";
import type { CountryType } from "../../Type"
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const [visitedCountries,setVisitedCountries] = useState<CountryType[]>([])

    const [visitedFlag,setVisitedFlag] = useState<string[]>([]);

    const countries = use(countriesPromise);

    const handleVisitedCountry = (country : CountryType):void => {
        //bad way to cheke object/array
        // visitedCountries.includes(country)

        //good
        const exist = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3)
        if(exist){
            const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3)
            setVisitedCountries(remainingCountries);
        }
        else{
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }

    const handleVisitedFlag = (flags:string): void => {
        console.log('Flag Visited', flags);
        if(visitedFlag.includes(flags)){
            const remainingFlags = visitedFlag.filter(f => f !== flags)
            setVisitedFlag(remainingFlags);
        }
        else{
            const newVisitedFlags = [...visitedFlag, flags];
        setVisitedFlag(newVisitedFlags);
        }
    }
    // console.log(countries)
    return (
        <div>
            <h2>Countries:{countries.length} </h2>
            <h4>Visited Countries : {}</h4>
            <h4>Visited Flags: {visitedFlag.length}</h4>
            <div>
                <ul>
                    {visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)}
                </ul>
            </div>
            <div className="visited-flags">
                {
                    visitedFlag.map((flag , index) => <img key={index} src={flag} alt = 'Visited flag'/>)
                }
            </div>
               <div className="countries">
                 {
                    countries.map(country => <Country 
                        key={country.ccn3.ccn3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
               </div>
        </div>
    )
}