interface ButtonProps {
    className?: string
    onClick?: () => void
    label?: string
    icon?: React.ReactNode
}


export function Button({ className, onClick , label, icon }: ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {label} {icon}
        </button>
    )
}