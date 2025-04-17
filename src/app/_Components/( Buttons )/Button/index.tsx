interface ButtonProps {
    className?: string
    onClick?: () => void
    label?: string
    icon?: React.ReactNode
    id?: string
}


export function Button({ className, onClick , id , label, icon }: ButtonProps) {
    return ( 
        <button className={className} onClick={onClick} id={id}>
            {label} {icon}
        </button>
    )
}