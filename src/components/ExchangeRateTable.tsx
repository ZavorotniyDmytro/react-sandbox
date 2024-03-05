import IExchangeRate from "./ExchangeRateSection/ExchangeRate.interface";

interface IExchangeRateTableProp{
    rate: IExchangeRate[]
}

export default function ExchangeRateTable({rate}: IExchangeRateTableProp){
    return(
        <table style={{width: "500px"}}>
            <thead>
                <tr>
                    <th>Валюта</th>
                    <th>Ціна</th>
                    <th>Код</th>
                </tr>
            </thead>
            <tbody>
                {rate.map((r, index)=>(<tr  key={r.r030}>
                    <th>{r.txt}</th>
                    <th>{r.rate}</th>
                    <th>{r.cc}</th>
                </tr>))}
            </tbody>
        </table>
    )
}