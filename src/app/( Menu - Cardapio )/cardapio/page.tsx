"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { FaClock } from "react-icons/fa6";
import ImageLogo from "../../../../public/assets/logo.png";
import styles from "./cardapio.module.css";

export default function Cardapio() {
   useEffect(()=>{
        initScrollReveal()
    },[]) 

  return (
    <main className={styles.Main}>
        <div className={styles.CardBackground}>

        </div>
      <header className={` reveal ${styles.Header}`}>
        <div className={styles.CardCompany}>
          <div className={styles.ImageLogo}>
            <Image
              src={ImageLogo}
              alt=""
              width={80}
              height={80}
              priority={true}
              quality={100}
            />
          </div>

          <div className={styles.Infos}>
            <h1>Menu on-line</h1>

            <div className={styles.SeeMore}>
              <label>
                <FaClock />
                Aberto
              </label>

              <Link href={"/ver-mais"}>ver mais</Link>
            </div>
          </div>
        </div>
      </header>


        <nav className={` reveal ${styles.Navegation}`}>

            <div className={styles.Category}>
                <Link href={""} className={styles.Link01}>Pizzas Tradicionais</Link>
                <Link href={""}>Burgers</Link>
                <Link href={""}>Bebidas</Link>
                <Link href={""}>Drinks</Link>
                <Link href={""}>Pizzas </Link>
                <Link href={""}>Burgers</Link>
                <Link href={""}>Bebidas</Link>
                <Link href={""}>Drinks</Link>
            </div>
        </nav>

    </main>
  );
}
