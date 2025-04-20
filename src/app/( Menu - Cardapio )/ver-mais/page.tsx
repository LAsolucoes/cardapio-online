"use client";
import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import ImageLogo from "../../../../public/assets/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../( Menu - Cardapio )/cardapio.module.css";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";

export default function VerMais() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <main className={styles.Main}>
      <div className={styles.CardBackground}></div>

      <div className={styles.Container}>
        <header className={`reveal ${styles.Header}`}>
          <div className={styles.CardTitleHeader}>
            <div className={styles.LinkReturnMenu}>
              <Link href={"/cardapio"}>
                <FaArrowLeft />
              </Link>
            </div>
            <div className={styles.TextTitle}>
              <h1>Sobre a Loja</h1>
            </div>
          </div>
        </header>

        <div className={styles.ContainerContentSeeMore}>
          <div className={`${styles.CardSeeMore} ${styles.AboutCompany}`}>
            <div className={styles.AboutCompanyDetails}>
              <h1>Menu-On-line</h1>
              <p>
                Olá! Esta é uma empresa para você testar nosso sistema de
                delivery! Fique à vontade para montar o seu pedido :)
              </p>

              <div className={`reveal ${styles.ImageLogoSeeMore}`}>
                <Image
                  src={ImageLogo}
                  alt="Imagem do logotipo"
                  width={90}
                  height={90}
                  priority={true}
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className={` reveal ${styles.ContainerCompanyDetails}`}>
            <div className={styles.TitleCardInfo}>
              <h3><FaWhatsapp /> WhatsApp</h3>
<div className={styles.CardSeeMore}>
                <label> (11) 94045-1410 </label>
              </div>
            </div>


            <div className={styles.TitleCardInfo}>
              <h3><FaPhoneAlt /> Telefone</h3>
<div className={styles.CardSeeMore}>
                <label> (11) 2056-2541 </label>
              </div>
            </div>
            
            <div className={styles.TitleCardInfo}>
              <h3><FaLocationDot /> Endereço</h3>

              <div className={styles.CardSeeMore}>
                <label> Rua Maria Laura Figueiredo , 54 - Jardim Novo Carrão </label>
              </div>
            </div>


            <div className={styles.TitleCardInfo}>
              <h3><FaClock /> Horário de Funcionamento</h3>

              <div className={styles.CardSeeMore}>
                <label>Segunda a Sexta</label>
                <label> 08:00 às 12:00 - 12:01 às 23:59 </label>
              </div>
            </div>
            <div className={styles.TitleCardInfo}>
              <h3><FaCoins /> Formas de pagamento</h3>
              <label>Pagamento na entrega</label>

              <div className={styles.CardSeeMore}>
                <label><MdPix /> Pix </label>
              </div>
              <div className={styles.CardSeeMore}>
                <label><FaMoneyBillAlt /> Dinheiro </label>
              </div>
              <div className={styles.CardSeeMore}>
                <label><FaCreditCard /> Cartão de Crédito </label>
              </div>
              <div className={styles.CardSeeMore}>
                <label><FaRegCreditCard /> Cartão de Débito </label>
              </div>
            </div>



          </div>
        </div>
      </div>
    </main>
  );
}
