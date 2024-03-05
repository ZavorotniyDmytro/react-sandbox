import  React  from 'react'
import '../../data/data'
import { profile } from '../../data/data'

const default_user_image = "https://d3sxshmncs10te.cloudfront.net/icon/premium/png-256/87401.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwOTg5NzU2MCwicSI6bnVsbCwiaWF0IjoxNzA5NjM4MzYwfQ__.c1995837f41d9d6516f5c94cd3e8a2db125ec3f8b11b42ab6bd683b7d266851e"



export default function Profile() {
    return (
        <div style={{maxWidth: "500px", justifyContent: "center", display: "flex", flexDirection: "column", backgroundColor: "#EDEDED"}}>
            <span>
                <img src={profile.user_photo || default_user_image} alt="not found user image" style={{maxWidth: "150px"}} />
            </span>
            <span>{profile.name}   </span>
            <span>{profile.surname}</span>
            <span>{profile.address}</span>
            <table style={{backgroundColor: "gray"}}>
                <thead>
                    <tr>
                        <th>Followers</th>
                        <th>Views</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{profile.followers}</td>
                        <td>{profile.views}</td>
                        <td>{profile.likes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}