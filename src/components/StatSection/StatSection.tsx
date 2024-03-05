import { stats } from "../../data/data";

export default function StatSection() {
    return (
        <section style={{maxWidth: "500px"}}>
            <h1>Stats upload</h1>
            <ul style={{display: "flex", justifyContent: "center", flexDirection: "row", listStyle: "none"}}>
                {stats.map((stat)=>(
                    <li key={stat.title} style={{width: "100px", height: "60px", display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: stat.bgcolor}}>
                        <span style={{fontSize: "20px"}}>{stat.title}</span>
                        <span style={{fontSize: "20px"}}>{stat.uploadStat}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}