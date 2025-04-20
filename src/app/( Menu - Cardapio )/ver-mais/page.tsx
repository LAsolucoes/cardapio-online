"use client";
import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import ImageLogo from "../../../../public/assets/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../( Menu - Cardapio )/cardapio.module.css";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";



interface DadosCompanyProps {
  id: number;
  img: string;
  name: string;
  slogan: string;
  whatsApp: string;
  phone: string;
  anddres: string;
  operation: string[];
  payment: string[];
}

export default function VerMais() {
   useEffect(() => {
    initScrollReveal();
  }, []);  

  const [dadosCompany, setDadosCompany] = useState<DadosCompanyProps[]>([]);
  useEffect(() => {
    async function DadosCompany() {
      try {
        const res = await fetch("/dadosCompany.json");
        const dados = await res.json();
        setDadosCompany(dados);
      } catch {
        alert("erro ao se conectar com banco de dados");
      }
    }

    DadosCompany();
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

        {dadosCompany.map((item) => (
          <div className={` reveal ${styles.ContainerContentSeeMore}`} key={item.id}>
            <div className={`${styles.CardSeeMore} ${styles.AboutCompany}`}>
              <div className={styles.AboutCompanyDetails}>
                <h1>{item.name}</h1>
                <p>{item.slogan}</p>

                <div className={`reveal ${styles.ImageLogoSeeMore}`}>
                  <Image
                    src={item.img}
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
                <h3>
                  <FaWhatsapp /> WhatsApp
                </h3>
                <div className={styles.CardSeeMore}>
                  <label> {item.whatsApp}</label>
                </div>
              </div>

              <div className={styles.TitleCardInfo}>
                <h3>
                  <FaPhoneAlt /> Telefone
                </h3>
                <div className={styles.CardSeeMore}>
                  <label> {item.phone} </label>
                </div>
              </div>

              <div className={styles.TitleCardInfo}>
                <h3>
                  <FaLocationDot /> Endereço
                </h3>

                <div className={styles.CardSeeMore}>
                  <label>{item.anddres}</label>
                </div>
              </div>

              <div className={styles.TitleCardInfo}>
                <h3>
                  <FaClock /> Horário de Funcionamento
                </h3>

                {item.operation.map((dia, index) => (
                  <>
                    <div className={styles.CardSeeMore}>
                      <label key={index}>{dia}</label>
                    </div>
                  </>
                ))}
              </div>
              <div className={styles.TitleCardInfo}>
                <h3>
                  <FaCoins /> Formas de pagamento
                </h3>
                <label>Pagamento na entrega</label>

                {item.payment.map((payment, index) => {
                  let IconPayment = null;

                  if (payment === "Pix") {
                    IconPayment = <MdPix />;
                  } else if (payment === "Dinheiro") {
                    IconPayment = <FaMoneyBillAlt />;
                  } else if (payment === "Cartão de Crédito") {
                    IconPayment = <FaCreditCard />;
                  } else if (payment === "Cartão de Débito") {
                    IconPayment = <FaRegCreditCard />;
                  }

                  return (
                    <div
                      className={`${styles.CardSeeMore}`}
                      key={index}
                    >
                      <label className={styles.Payment}> {IconPayment} {payment}</label>
                    
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
