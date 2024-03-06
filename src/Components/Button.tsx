interface IButtonProp{
    children:string
    onClick: ()=>void
    styles: string
}

export default function Button({children, onClick, styles} : IButtonProp){
    return(
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    )
}