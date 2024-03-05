import { useEffect, useState } from "react"
import IExchangeRate from "./ExchangeRate.interface"
import ExchangeRateTable from "../ExchangeRateTable"


export default function ExchangeRateSection() {
    const [rate, setRate] = useState<IExchangeRate[]>([])
    const [loading, setLoading] = useState(false)

    console.log("render ExchangeRateSection")

    useEffect(()=>{
        console.log("useEffect ExchangeRateSection")
        async function fetchExchangeRate() {
            setLoading(true)
            const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            const data: IExchangeRate[] = await response.json()
            console.log(JSON.stringify(data))
            setRate(data)
            setLoading(false)
        }
        fetchExchangeRate()
    }, [])

    return (
        <>
            { loading && <p>Loading...</p>}
            { !loading && <ExchangeRateTable rate={rate}/>}
        </>
    )
}
