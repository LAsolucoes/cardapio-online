"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../( Menu - Cardapio )/cardapio.module.css";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { useParams } from "next/navigation";

interface ProductProps {
  id: number;
  img: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: number;
}

export default function DetalhesProduto() {
  useEffect(() => {
    initScrollReveal();
  }, []);
  const params = useParams();
  const elementId = Number(params.id);
  console.log("params :", params);
  console.log("elementoId :", elementId);

  const [listProduct, setListProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    async function listProductSelected() {
      const res = await fetch("/dados.json");
      const dados = await res.json();

      const selectedProduct = dados.find(
        (item: ProductProps) => item.id === elementId
      );

      setListProduct(selectedProduct);
    }

    listProductSelected();
  }, [elementId]);

  const [valueIncremetoDecremento, setValueIncrementoDecremento] = useState(1);
  function handleDecremento() {
    if (valueIncremetoDecremento > 1) {
      setValueIncrementoDecremento((prev) => prev - 1);
    }
  }

  function handleIncremento() {
    setValueIncrementoDecremento((prev) => prev + 1);
    return;
  }

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
              <h1>Detalhes do Produto</h1>
            </div>
          </div>
        </header>
        <div className={`reveal ${styles.ContainerContentProduct}`}>
          {listProduct && (
            <>
              <div className={styles.ContainerImageProductSelected}>
                <Image
                  src={listProduct.img}
                  alt={listProduct.name}
                  fill
                  priority={true}
                  quality={100}
                  className={styles.ImageProductSelected}
                />
              </div>

              <div className={styles.DescriptionProduct}>
                <div className={styles.DetailsProduct}>
                  <h2>{listProduct.name}</h2>
                  <p>{listProduct.description}</p>
                </div>

                <span>{listProduct.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}</span>
              </div>

              {listProduct.ingredients && (
                <div className={`${styles.DescriptionProduct}`}>
                  <h3>Ingredientes</h3>
                  <ul>
                    {listProduct.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          <div className={`${styles.Additional}`}>
            <div className={styles.AdditionalTitle}>
              <h3>Deseja borda recheada?</h3>
              <label>Escolher até 1 opção</label>
            </div>

            <div className={styles.CardAdditional}>
              <div className={`${styles.OptionAdditional}`}>
                <label>Cheddar</label>
                <div className={styles.OptionAdditionalPrice}>
                  <label> + 8,99</label>
                  <input type="radio" />
                </div>
              </div>

              <div className={`${styles.OptionAdditional}`}>
                <label>Catupiry</label>
                <div className={styles.OptionAdditionalPrice}>
                  <label> + 8,99</label>
                  <input type="radio" />
                </div>
              </div>
            </div>

            <div className={styles.AdditionalTitle}>
              <h3>Opcionais</h3>
              <label>Escolher até 1 opção</label>
            </div>

            <div className={styles.CardAdditional}>
              <div className={`${styles.OptionAdditional}`}>
                <label>Queijo</label>
                <div className={styles.OptionAdditionalPrice}>
                  <label> + 5,00</label>
                  <input type="radio" />
                </div>
              </div>

              <div className={`${styles.OptionAdditional} ${styles.Card}`}>
                <label>Azeitona</label>
                <div className={styles.OptionAdditionalPrice}>
                  <label> + 2,99</label>
                  <input type="radio" />
                </div>
              </div>
            </div>

            <div className={styles.AdditionalTitle}>
              <h3>Observações</h3>
              <label>Informe alguma observação abaixa</label>
            </div>
            <div className={styles.CardAdditional}>
              <div className={`${styles.Observation} ${styles.Card}`}>
                <textarea className={styles.TextArea}></textarea>
              </div>
            </div>
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
              Adicionar<span> 0 </span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
