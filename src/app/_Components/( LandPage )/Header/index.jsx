"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Button } from "../../( Buttons )/Button";
import LogoTipo from "../../../../../public/assets/logo.png";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.HeaderLandPage} id="header">
      <div>
        <Image src={LogoTipo} alt="Logotipo" width={100} height={100} />
      </div>

      <nav className={styles.MenuNavegation}>
        <Link href={"#services"}>Serviços</Link>
        <Link href={"#depoimentos"}>Depoimento</Link>
        <Link href={"#reservas"}>Reservas</Link>
        <Link href={"/cardapio"}>Cardápio</Link>
      </nav>

      <div className={styles.ButtonMyCart}>
        <Button
          className={"btnWhite"}
          icon={<FaBagShopping className="IconBag" />}
          label={"Meu carrinho"}
        />
      </div>

      <div className={styles.ButtonBars}>
        <Button className={"btnWhite"} icon={<FaBars className="IconBars" />} />
      </div>
    </header>
  );
}
