"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../( Menu - Cardapio )/cardapio.module.css";
/*  import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";  */
import { useParams } from "next/navigation";

interface AdditionalItens {
  name: string;
  price: number;
}

interface ProductProps {
  id: number;
  img: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: number;
  edges: AdditionalItens[];
  additional: AdditionalItens[];
}

export default function DetalhesProduto() {
  /*      useEffect(() => {
    initScrollReveal();
  }, []); */

  const params = useParams();
  const elementId = Number(params.id);

  const [listProduct, setListProduct] = useState<ProductProps | null>(null);
  const [edges, setEdges] = useState<AdditionalItens | null>(null);
  const [ additional , setAdditional] = useState<AdditionalItens | null>( null )

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

  const totalPrice = listProduct
    ? listProduct.price * valueIncremetoDecremento + (edges?.price ?? 0) + (additional?.price ?? 0)
    : 0;

  
    

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

                <span>
                  {listProduct.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
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

              <div className={`${styles.Additional}`}>
                {listProduct.edges && listProduct.edges.length > 0 && (
                  <>
                    <div className={styles.AdditionalTitle}>
                      <h3>Deseja borda recheada?</h3>
                      <label>Escolher até 1 opção</label>
                    </div>

                    <div className={styles.CardAdditional}>
                      {listProduct.edges.map((edges, index) => (
                        <>
                          <div className={`${styles.OptionAdditional}`}>
                            <label key={index}>{edges.name}</label>
                            <div className={styles.OptionAdditionalPrice}>
                              <label>
                                {" "}
                                +{" "}
                                {edges.price.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </label>
                              <input
                              name="additional"
                                type="radio"
                                onChange={() => setEdges(edges)}
                                
                              />
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                )}

                {listProduct.additional &&
                  listProduct.additional.length > 0 && (
                    <>
                      <div className={styles.AdditionalTitle}>
                        <h3>Opcionais</h3>
                        <label>Escolher até 1 opção</label>
                      </div>

                      <div className={styles.CardAdditional}>
                        {listProduct.additional.map((additional, index) => (
                          <>
                            <div className={`${styles.OptionAdditional}`}>
                              <label key={index}>{additional.name}</label>
                              <div className={styles.OptionAdditionalPrice}>
                                <label>
                                  {" "}
                                  +{" "}
                                  {additional.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                  })}
                                </label>
                                <input type="checkbox"
                                onChange={()=> setAdditional(additional)}
                                />
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                <div className={styles.ContainerObservation}>
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
            </>
          )}
        </div>
      </div>

      <footer className={styles.Foooter}>
        <div className={styles.ContentFooter}>
          <div className={styles.ContainerButtonFooter}>
            <button onClick={handleDecremento}> - </button>
            <span> {valueIncremetoDecremento} </span>
            <button onClick={handleIncremento}> + </button>
          </div>

          {listProduct && (
            <div className={styles.ButtonAddFooter}>
              <button>
                Adicionar
                <span>
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </button>
            </div>
          )}
        </div>
      </footer>
    </main>
  );
}
