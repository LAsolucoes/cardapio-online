import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./modal.module.css";
interface ModalProps {
  title: string;
  image: string;
  name: string;
  description: string;
  price: number;
  onClick?: () => void;
}

export function Modal({
  title,
  image,
  name,
  description,
  price,
  onClick,
}: ModalProps) {


  return (
    <div className={styles.ModalBackground}>
      <div className={styles.ModalContainer}>
        <div className={styles.ModalContent}>
          <div className={styles.TitleModal}>
            <div className={styles.ButtonReturn}>
              <button onClick={onClick}>
                <FaArrowLeft />
              </button>
            </div>
            <div className={styles.TextTitle}>
              <h1>Detalhes do Produto</h1>
            </div>
          </div>

          <div className={styles.ImageProduct}>
            <Image
              src={image}
              alt={name}
              fill
              priority={true}
              quality={100}
              className={styles.Image}
            />
          </div>

          <div className={styles.Product}>
            <label className={styles.NameProduct}>{title}</label>
            <label className={styles.Description}>{description}</label>

            <div className={styles.PriceProduct}>
              <label className={styles.Price}>R$ {price}</label>
            </div>
          </div>
         
        </div>

        <div className={styles.FooterModal}>
          <Link href="/pedido" className="btnSuccess">Ir ao Cardapio </Link>

        </div>
      </div>
    </div>
  );
}
