"use client"
import Image from "next/image"
import Link from "next/link"
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

import LogoTipo from "../../../../public/assets/logo.png"
import { Button } from "../Button"

import styles from "./header.module.css"

export function Header() {


    return (
        <header className={styles.HeaderLandPage}>
            <div>
                <Image
                    src={LogoTipo}
                    alt="Logotipo"
                    width={100}
                    height={100}

                />
            </div>

            <nav className={styles.MenuNavegation}>
                <Link href={"#"}>Reservas</Link>
                <Link href={"#"}>Serviços</Link>
                <Link href={"#"}>Cardápio</Link>
                <Link href={"#"}>Depoimento</Link>
            </nav>



            <div className={styles.ButtonMyCart}>
                <Button
                    className={"btnWhite"}
                    icon={<FaBagShopping className="IconBag" />}
                    label={"Meu carrinho"}
                />
            </div>

            <div className={styles.ButtonBars}>
                <Button
                    className={"btnWhite"}
                    icon={<FaBars className="IconBars"/>}
                
                />
                
            </div>


        </header>
    )
}