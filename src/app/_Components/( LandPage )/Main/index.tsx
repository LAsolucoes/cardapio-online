"use client"

import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { FaPhoneAlt } from "react-icons/fa";

import ImageBurger from "../../../../../public/assets/burguer.png";
import { ButtonsMidiasSociais } from "../../ButtonsMidiasSociais";
import styles from "./main.module.css";
import { useEffect } from "react";

export function Main() {

  useEffect(()=>{
    initScrollReveal()
  }, [])



  /* Menssage WhatsApp */
  const numberWhatsApp = "5511992619304";
  

  return (
    <main className={` reveal ${styles.MainContainer}`}>
      <div className={styles.MainContent}>
        <h1>
          Escolha sua comida <span>favorita.</span>
        </h1>
        <p>
          Aproveite nosso cardápio! Escolha o que deseja e receba em sua casa de
          forma rápida e segura.
        </p>

        <div className={styles.MainContentLinks}>
          <Link href={"/cardapio"} className="btnYellow">
            Ver Cardápio
          </Link>
          <Link href={`tel:+${numberWhatsApp}`} className="btnContact">
            <FaPhoneAlt className="IconPhone" /> (11) 99261-9304{" "}
          </Link>
        </div>

         <ButtonsMidiasSociais />
      </div>

      <div className={styles.MainContentImage}>
        <Image
          src={ImageBurger}
          alt={""}
          fill
          quality={100}
          priority
          className={styles.BurguerImage}
        />
        <div className={styles.Testimony}>
          <p>
            Entrega rápida e funcionários simpaticos. A comida chegou quente e
            muito saborosa<span>@alexmoedo</span>
          </p>
        </div>
      </div>
    </main>
  );
}
