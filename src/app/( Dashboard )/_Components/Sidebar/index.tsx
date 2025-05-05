import Link from "next/link"

import styles from "./sidebar.module.css"
export function Sidebar(){
    return (

        <aside className={styles.Sidebar}>
            <nav className={styles.Navegation}>
                <ul className={styles.ul}>
                    <li><Link href={"/home"}>Home</Link></li>
                    <li><Link href={"/empresa"}>Categorias</Link></li>
                    <li><Link href={"/empresa"}>Produtos</Link></li>
                    <li><Link href={"/empresa"}>Adicionais</Link></li>
                    <li><Link href={"/empresa"}>Clientes</Link></li>
                    <li><Link href={"/empresa"}>Pedidos</Link></li>
                    <li><Link href={"/empresa"}>Relatórios</Link></li>
                    <li><Link href={"/empresa"}>Funcionamento</Link></li>
                    <li><Link href={"/empresa"}>Taxa de Entregas</Link></li>
                    <li><Link href={"/empresa"}>Forma de Pagamentos</Link></li>
                    <li><Link href={"/dados-empresa"}>Dados Empresa</Link></li>
                </ul>
            </nav>
        </aside>
    )
}