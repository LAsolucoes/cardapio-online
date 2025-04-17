import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "./butttonsMidiasSociais.module.css";

export function ButtonsMidiasSociais() {

    /* Menssage WhatsApp */
  const numberWhatsApp = "5511992619304";
  const messageWhatsApp = "Olá! Gostaria de mais informações sobre o Cardápio";
  const messageCodificada = encodeURIComponent(messageWhatsApp);
  return (
    <>
        <div className={styles.MainButtonSocialMedia}>
          <Link
            href={`https://wa.me/${numberWhatsApp}?text=${messageCodificada}`}
            target="_blank"
            title="Converse conosco no WhatsApp"
          >
            <FaWhatsapp className={styles.IconMediaSocial} />{" "}
          </Link>
          <Link
            href={"https://www.facebook.com/"}
            target="_blank"
            title="Curta nossa página no Facebook"
          >
            <FaFacebook className={styles.IconMediaSocial} />{" "}
          </Link>
          <Link
            href={"https://www.instagram.com/"}
            target="_blank"
            title="Siga-nos no Instagram"
          >
            <FaInstagram className={styles.IconMediaSocial} />
          </Link>
        </div>
    </>
  );
}
