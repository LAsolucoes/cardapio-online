"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { FaClock } from "react-icons/fa6";
import ImageLogo from "../../../../public/assets/logo.png";
import styles from "./cardapio.module.css";

export default function Cardapio() {
  const [listItens, setListaItens] = useState<ListProductsProps[]>([])
  
  
    useEffect(() => {
      initScrollReveal()
    }, [])
  



  interface ListProductsProps {
    id: number
    img: string
    name: string
    description: string
    ingredients: string[]
    price: number
    category: number

  }



  useEffect(() => {
    async function listProducts() {
      try {
        const res = await fetch("/dados.json")
        const data = await res.json()
        setListaItens(data)

        console.log(data)

      } catch {
        alert("error ao se conectar")
      }
  }

    listProducts()

  }, [])


  return (
    <main className={` ${styles.Main}`}>
      <div className={styles.CardBackground}></div>
      <div className={`${styles.Container}`}>
        <header className={`reveal ${styles.Header}`}>
          <div className={styles.CardCompany}>
            <div className={styles.ImageLogo}>
              <Image
                src={ImageLogo}
                alt=""
                width={90}
                height={90}
                priority={true}
                quality={100}
              />
            </div>
            <div className={styles.Infos}>
              <h1>Menu on-line</h1>
              <div className={styles.SeeMore}>
                <label>
                  <FaClock />
                  Aberto
                </label>
                <Link href={"/ver-mais"}>ver mais</Link>
              </div>
            </div>
          </div>
        </header>
        <nav className={` reveal ${styles.Navegation}`}>
          <div className={styles.Category}>
            <Link href={""} className={styles.Link01}>Pizzas Tradicionais</Link>
            <Link href={""}>Burgers</Link>
            <Link href={""}>Bebidas</Link>
            <Link href={""}>Drinks</Link>
            <Link href={""}>Pizzas </Link>
            <Link href={""}>Burgers</Link>
            <Link href={""}>Bebidas</Link>
            <Link href={""}>Drinks</Link>
          </div>
        </nav>
        <div className={`reveal ${styles.ContainerCardProduct}`}>
          <div className={styles.TitleCategory} >
            <label>Categorias</label>
          </div>


          {listItens.map((item) => (

            <div className={`  ${styles.CardProduct}`} key={item.id} >
              <div className={styles.ContainerImageProduct}>
                <Image
                  src={item.img}
                  alt={item.name}
                  title={item.name}
                  width={80}
                  height={80}
                  priority={true}
                  quality={100}
                  className={styles.ImageProduct}
                />
              </div>
              <div className={styles.DetailsProduct}>
                <label>{item.name}</label>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            </div>


          ))}
        </div>
      </div>

    </main>
  );
}
