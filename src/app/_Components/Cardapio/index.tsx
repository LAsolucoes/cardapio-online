"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./cardapio.module.css";
import {  useEffect, useState } from "react";
import { Modal } from "../Modal";

interface ListaProdutosProps {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
}
export function Cardapio() {
  
  const [listProducts, setListProdducts] = useState<ListaProdutosProps[]>([]);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [modalId, setModalId] = useState("");

  const [seeMore, setSeeMore] = useState(false);


  
  const selectedItem = listProducts.find((item) => item.id === modalId);

  useEffect(() => {
    async function ListProducts() {
      try {
        const response = await fetch("/dados.json");
        const data = await response.json();
        console.log(data);
        setListProdducts(data);
      } catch {
        alert("errorrr");
      }
    }
    ListProducts();
  }, []);

  function SeeMore() {
    alert("ok");
  }

  function handleSelectItem(e: React.MouseEvent<HTMLElement>) {
    const elementId = e.currentTarget.id;

    setModalId(elementId);
    setOpenCloseModal(!openCloseModal);

    console.log(elementId);
  }

   function HandleCloseModal(){

    setOpenCloseModal(false)
    return
   }


  return (
    <section className={styles.ContainerCardapio}>
      <div className={styles.TittleCardapio}>
        <label htmlFor="">Cardapio</label>
        <h2>Conheça o nosso cardápio</h2>
      </div>

      <div className={styles.ContainerCategory}>
        <nav className={styles.CategoryCardapio}>
          <Link href={"#"}>Burges</Link>
          <Link href={"#"}>Pizzas</Link>
          <Link href={"#"}>Churrasco</Link>
          <Link href={"#"}>Steaks</Link>
          <Link href={"#"}>Bebidas</Link>
          <Link href={"#"}>Sobremesas</Link>
        </nav>
      </div>
      <div className={styles.CardapioContent}>
        {listProducts.map((item) => (
          <div
            className={styles.ContentCardapioItens}
            key={item.id}
            onClick={handleSelectItem}
            id={item.id}
          >
            <div className={styles.ItemCardapio}>
              <div className={styles.ImageProduct}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={90}
                  height={90}
                  quality={100}
                  className={styles.Image}
                />
              </div>
              <div className={styles.NamePriceItem}>
                <label className={styles.TitleProduct} title={item.name}>
                  {item.name}
                </label>
                <label className={styles.Description}>{item.dsc}</label>
                <label
                  className={styles.PriceProduct}
                >{`R$ ${item.price}`}</label>

              
              </div>
            </div>
          </div>
        ))}
      </div>

      {openCloseModal && modalId && selectedItem && (
        <Modal
          title={selectedItem.name}
          
          image={selectedItem.img}
          name={selectedItem.name}
          description={selectedItem.dsc}
          price={selectedItem.price}
          onClick={HandleCloseModal}
        />
      )}
    </section>
  );
}
