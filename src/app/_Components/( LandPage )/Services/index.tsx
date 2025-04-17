"use client";
import { useEffect, useState } from "react";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import ImageOrder from "../../../../../public/assets/icone-pedido.svg";
import ImageDelivery from "../../../../../public/assets/icone-delivery.svg";
import ImageQuality from "../../../../../public/assets/icone-qualidade.svg";
import styles from "./services.module.css";



export function Services() {
  useEffect(() => {
    initScrollReveal();
  }, []);

/* Esconder botão de navegação - scroll -  <FaArrowUp />  */
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    function handleScroll() {
      setIsAtTop(window.scrollY < 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.SectionContainer} id="services">
      <article>
        <div className={` reveal ${styles.SectionTitle}`}>
          <label htmlFor="">SERVIÇOS</label>
          <h2>Como são nossos serviços?</h2>
        </div>
        <div className={styles.TypeServices}>
          <div className={`reveal ${styles.SectionCard}`}>
            <Image
              src={ImageOrder}
              alt="Imagem Usuário realizando Pedido"
              className={styles.ImageServices}
              quality={100}
              priority
            />
            <h3>Fácil de pedir</h3>
            <p>Você só precisa de alguns passos para pedir sua comida.</p>
          </div>
          <div className={` reveal ${styles.SectionCard}`}>
            <Image
              src={ImageDelivery}
              alt="Imagem entregador Delivery"
              className={styles.ImageServices}
              quality={100}
              priority
            />
            <h3>Entrega Rápidar</h3>
            <p>Nossa entrega é sempre pontual, rápida e segura.</p>
          </div>
          <div className={` reveal ${styles.SectionCard}`}>
            <Image
              src={ImageQuality}
              alt="Imagem Usuário realizando Pedido"
              className={styles.ImageServices}
              quality={100}
              priority
            />
            <h3>Melhor qualidade</h3>
            <p>
              Não só rápidez na entrega, a qualidade tambem é o nosso forte.
            </p>
          </div>
        </div>
      </article>

      <div className={styles.ContainerBtnColum}>
        <Link
          href="#header"
          className={`${styles.ButtonColum} ${isAtTop ? styles.hidden : ""}`}
        >
          <FaArrowUp />
        </Link>
      </div>
    </section>
  );
}
