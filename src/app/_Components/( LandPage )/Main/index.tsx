import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

import ImageBurger from "../../../../../public/assets/burguer.png";
import styles from "./main.module.css";
import Link from "next/link";
import { ButtonsMidiasSociais } from "../../ButtonsMidiasSociais";

export function Main() {
  /* Menssage WhatsApp */
  const numberWhatsApp = "5511992619304";
  const messageWhatsApp = "Olá! Gostaria de mais informações sobre o Cardápio";
  const messageCodificada = encodeURIComponent(messageWhatsApp);

  return (
    <main className={styles.MainContainer}>
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
