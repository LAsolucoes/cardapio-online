import styles from "./titlePages.module.css"



interface TitlePageProps{
    title: string
}


export function TitlePage( {title}: TitlePageProps){
    return(
        <div className={styles.ContainerTitle}>
            <h1 className={styles.Title}>{title}</h1>
            <hr />
            <p className={styles.Warning}>Campos com ( * ) saõ campos obrigatórios</p>
        </div>
    )
}