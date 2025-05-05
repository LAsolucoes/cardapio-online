import { ReactNode } from "react"
import Link from "next/link"

import styles from "./buttonSaveCamcel.module.css"



interface ButtonLinkSaveCancelProps{
    icon?: ReactNode
    name:string
    href?:string

}

export function ButtonLinkSaveCancel( {icon , name , href}: ButtonLinkSaveCancelProps){
    return(
        <div className={styles.ContainerButtons}>

            <button className="btnYellow">{icon} {name} </button>
            <Link href={""} className="btnWhite">{icon} {name} </Link>
        </div>
    )
}