import { animals } from "../../data/data";



export default function AnimalSection(){
    return (
        <section style={{width: "500px"}}>
            <ul style={{display: "flex", flexDirection: "column", listStyle: "none"}}>
                {animals.map((animal, index)=>(
                    <li key={index} style={{fontSize: "25px", backgroundColor: "#EDE5FF", margin: "8px 0px", borderRadius: "4px", alignItems: "center", width: "50%"}}>
                        <span style={{color: animal.isAvailable ? "green" : "red"}}>●</span>
                        <img style={{maxHeight: "40px"}} src={animal.image} alt="animal photo" />
                        <span >{animal.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}