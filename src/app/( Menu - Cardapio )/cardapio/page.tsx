"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initScrollReveal } from "@/app/helpers/scrollReavealConfig";
import { FaClock } from "react-icons/fa6";
import ImageLogo from "../../../../public/assets/logo.png";
import styles from "../../( Menu - Cardapio )/cardapio.module.css";

interface ListProductsProps {
  id: number;
  img: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: string;
}
export default function Cardapio() {
  const [listItens, setListaItens] = useState<ListProductsProps[]>([]);
  const [allItens, setAllItens] = useState<ListProductsProps[]>([]);


  useEffect(() => {
    initScrollReveal();
  }, []);


  useEffect(() => {
    async function listProducts() {
      try {
        const res = await fetch("/dados.json");
        const data = await res.json();
        setListaItens(data);
        setAllItens(data);



  
       
      } catch {
        alert("error ao se conectar com banco de dados");
      }
    }

    listProducts();
  }, []);

  async function listProductsCartegory(category: string) {
    const categorySelected = allItens.filter((item) => item.category === category);
    setListaItens(categorySelected);
    console.log(categorySelected);
  }

  return (
    <main className={`${styles.Main}`}>
      <div className={styles.CardBackground}></div>
      <div className={`${styles.Container}`}>
        <header className={`reveal ${styles.Header}`}>
          <div className={styles.CardCompany}>
            <div className={styles.ImageLogo}>
              <Image
                src={ImageLogo}
                alt="Imagem do logotipo"
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
            <Link href={""} onClick={() => setAllItens(listItens)}>
              Todos
            </Link>

             <Link href={""} onClick={()=> listProductsCartegory("Bebidas")}>Bebidas</Link>
            <Link href={""} onClick={()=> listProductsCartegory("Pizza")}>Pizzas </Link>
            <Link href={""} onClick={()=> listProductsCartegory("Lanches")}>Lanches</Link> 
          </div>
        </nav>
        <div className={`reveal `}>
          <div className={styles.TitleCategory}>
            <label>Categorias</label>
          </div>
          {listItens.map((item) => (
            <Link
              href={`/detalhes-produto/${item.id}`}
              className={`  ${styles.CardProduct}`}
              key={item.id}
            >
              <div>
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
                <div className={styles.NameDescription}>
                  <label>{item.name}</label>
                  <p>{item.description}</p>
                </div>
                <div>
                  <span>
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
