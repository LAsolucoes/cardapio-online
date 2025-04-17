"use client"
import Image from "next/image";
import { useEffect } from "react";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import ImageProduct from "../../../../../public/assets/pizzas.png";
import ImageAvatar from "../../../../../public/assets/diego.jpg";
import styles from "./depoimentos.module.css";
export function Depoimentos() {

useEffect(()=>{
   initScrollReveal()
},[])
  return (
    <section className={`reveal ${styles.SectionDepoimentos}`} id="depoimentos">
      <div className={styles.ContainerDepoimentos}>
        <div className={styles.ImageProduct}>
          <Image
            src={ImageProduct}
            alt="Imagem do produto"
            fill
            quality={100}
            className={styles.ImageProduct}
          />
        </div>

        <div className={styles.Depoimentos}>
          <div className={styles.TitleDepoimentos}>
            <label>DEPOIMENTOS</label>
            <h3>Oque dizem sobre nós?</h3>
          </div>

          <div className={styles.DepoimentosClient}>
            <div className={styles.ContainerImageAvatar}>
              <Image
                src={ImageAvatar}
                alt="Imagem do Usuário do depoimento"
                fill
                quality={100}
                className={styles.ImageAvatar}
              />
            </div>

            <div>
              <h4>Diego Pereira</h4>
              <div className={styles.Stars}>
                  <span>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </span>
                  <label>4.5</label>
              </div>
            </div>
          </div>

          <div className={styles.ContentDepoimento}>
            <p>
                Muito bom, recomendo demais! Comida muito bem feita pelo chefe,
                atendimento dentro dos parametros e boa comunicação com o cliente.
            </p>
          </div>

          <div className={styles.btnNavegation}>
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
          </div>
        </div>
      </div>
    </section>
  );
}
