import IAnimal from "../components/AnimalsSection/Animal.interface";
import IProfile from "../components/Profile/Profile.interface";
import IStat from "../components/StatSection/Stat.interface";

export const profile: IProfile = {
    name: "Dmytro Zavorotnii",
    surname: "@willbefine",
    address: "Mykolaiv, Ukraine",
    followers: 5555,
    views: 61454,
    likes: 9465,
    user_photo: "https://static.thenounproject.com/png/10299-200.png"
}


export const stats: IStat[] = [
    {
        title: ".docx",
        uploadStat: "20%",
        bgcolor: "#01473F"
    },
    {
        title: ".pdf",
        uploadStat: "30%",
        bgcolor: "#F2CA48"
    },
    {
        title: ".mp3",
        uploadStat: "50%",
        bgcolor: "#AAD7EA"
    }
]

export const animals: IAnimal[] = [
    {
        isAvailable: true,
        image: "https://cdn-icons-png.freepik.com/512/1864/1864514.png",
        name: "cat1"
    },
    {
        isAvailable: false,
        image: "https://www.freeiconspng.com/thumbs/cat-icon/cat-icon-6.png",
        name: "cat2"
    }
]