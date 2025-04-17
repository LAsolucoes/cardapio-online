"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./detalhes-produto.module.css";
import ImageProduct from "../../../public/assets/pizzas.png";
import Link from "next/link";

export default function Cardapio() {
  const [valueProduct] = useState(40.0);
  const [valueIncremetoDecremento, setValueIncrementoDecremento] = useState(1);

  // Valor dos adicionais
  const [valueCheddar] = useState(7.99);
  const [valueCatupiry] = useState(5.99);
  
  const [selectedAdicional, setSelectedAdicional] = useState(0);
  
  
  /* Adicionando os Opcionais */
  
  const [valueQueijo] = useState(4.99);
  const [valueAzeitona] = useState(0.99);
 


  /* Formatando os  valores */
  const priceProductFormatado = valueProduct.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const valueCatupiryFormatado = valueCatupiry.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const valueCheddarFormatado = valueCheddar.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const valueQueijoFormatado = valueQueijo.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const valueAzeitonaFormatado = valueAzeitona.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleSelectedAdicional(value: number) {
    setSelectedAdicional(value);
  }

  function handleDecremento() {
    if (valueIncremetoDecremento > 1) {
      setValueIncrementoDecremento((prev) => prev - 1);
    }
  }

  function handleIncremento() {
    setValueIncrementoDecremento((prev) => prev + 1);
    return;
  }

  const total = (valueIncremetoDecremento * valueProduct) + selectedAdicional ;
  const totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.ContainerCardapio}>
      <div className={styles.Content}>
        <div className={`${styles.Header} ${styles.Card}`}>
          <div className={styles.ButtonContainer}>
            <Link href={"/"}> 
              <FaArrowLeft />
            </Link>
          </div>

          <div className={styles.TextTitle}>
            <h1>Detalhes do Produto</h1>
          </div>
        </div>

        <div className={styles.ImageProductSelected}>
          <Image
            src={ImageProduct}
            alt=""
            fill
            priority={true}
            quality={100}
            className={styles.ImageProduct}
          />
        </div>

        <div className={`${styles.DescriptionProduct} ${styles.Card}`}>
          <h2>Calabresa</h2>
          <p>
            Molho de tomate, mussarela, cebola, calabresa, catupiry, tomate,
            orégano e azeitonas
          </p>

          <span>{priceProductFormatado}</span>
        </div>

        <div className={styles.Additional}>
          <div className={styles.AdditionalTitle}>
            <h3>Deseja borda recheada?</h3>
            <label>Escolher até 1 opção</label>
          </div>
          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Cheddar</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + {valueCheddarFormatado}</label>
              <input
                type="radio"
                value={valueCheddar}
                onChange={() => handleSelectedAdicional(valueCheddar)}
                checked={selectedAdicional === valueCheddar}
              />
            </div>
          </div>

          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Catupiry</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + {valueCatupiryFormatado}</label>
              <input
                type="radio"
                value={valueCatupiry}
                onChange={() => handleSelectedAdicional(valueCatupiry)}
                checked={selectedAdicional === valueCatupiry}
              />
            </div>
          </div>
        </div>

      
      
      
        <div className={styles.Additional}>
          <div className={styles.AdditionalTitle}>
            <h3>Opcionais</h3>
          </div>
         <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Queijo</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + {valueQueijoFormatado}</label>
              <input
                type="radio"
                value={valueQueijoFormatado}
              
              />
            </div>
          </div>

          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Azeitona</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + {valueAzeitonaFormatado}</label>
              <input
                type="radio"
                value={valueAzeitona}
               
              />
            </div>
          </div>
        </div>

        <div className={styles.Additional}>
          <div className={styles.AdditionalTitle}>
            <h3>Observações</h3>
            <label>Informe alguma observação abaixa</label>
          </div>
          <div className={`${styles.Observation} ${styles.Card}`}>
            <textarea className={styles.TextArea}></textarea>
          </div>
        </div>
      </div>

      <footer className={styles.Foooter}>
        <div className={styles.ContentFooter}>
          <div className={styles.ContainerButtonFooter}>
            <button onClick={handleDecremento}> - </button>
            <span> {valueIncremetoDecremento} </span>
            <button onClick={handleIncremento}> + </button>
          </div>
          <div className={styles.ButtonAddFooter}>
            <button>
              Adicionar<span> {totalFormatado} </span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
