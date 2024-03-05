import IExchangeRate from "./ExchangeRateSection/ExchangeRate.interface";

interface IExchangeRateTableProp{
    rate: IExchangeRate[]
}

export default function ExchangeRateTable({rate}: IExchangeRateTableProp){
    return(
        <table style={{width: "500px"}}>
            <thead>
                <tr style={{backgroundColor: "#86989B"}}>
                    <th>Валюта</th>
                    <th>Ціна</th>
                    <th>Код</th>
                </tr>
            </thead>
            <tbody>
                {rate.map((r, index)=>(<tr style={{backgroundColor: index % 2 ? "#86989B" : "#ACBAAA"}} key={r.r030}>
                    <th>{r.txt}</th>
                    <th>{r.rate}</th>
                    <th>{r.cc}</th>
                </tr>))}
            </tbody>
        </table>
    )
}