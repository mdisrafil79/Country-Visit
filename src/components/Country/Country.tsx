import type { CountryType } from "../../Type"
import './Country.css'
export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return(
        <div className="coumtry">
            <h3>{country.name.common}</h3>
        </div>
    )
}