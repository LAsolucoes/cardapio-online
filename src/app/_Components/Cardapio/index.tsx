"use client"
import Link from "next/link";
import Image from "next/image";


import styles from "./cardapio.module.css";
import { useEffect, useState } from "react";



interface ListaProdutosProps {
  id: string
  img: string
  name: string
  dsc: string
  price: number


}
export function Cardapio() {
  const [addAmount, setAddAmount] = useState(0)
  const [listProducts, setListProdducts] = useState<ListaProdutosProps[]>([])

  const [ seeMore , setSeeMore ] = useState(false)

  useEffect(() => {
    async function ListProducts() {
      try {
        const response = await fetch("/dados.json")
        const data = await response.json()
        console.log(data)
        setListProdducts(data)

      } catch {
        alert("errorrr")
      }
    }
    ListProducts()
  }, [])


  function handleAdd() {
    setAddAmount(addAmount + 1)
  }

  function handleRemove() {
    if (!addAmount) {
      setAddAmount(addAmount)
      return
    }
    setAddAmount(addAmount - 1)
  }


  function SeeMore(){
    alert("ok")
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


        {listProducts.map(item => (

          
          <div className={styles.ContentCardapioItens} key={item.id}>
              <div className={styles.ItemCardapio} >
                <div className={styles.ImageProduct}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={280}
                    height={180}
      
                    className={styles.Image}
                  />
                </div>
                <div className={styles.NamePriceItem}>
                  <label className={styles.TitleProduct}>{item.name}</label>
                  <p>{item.dsc}</p>
                  <label className={styles.PriceProduct}>{`R$ ${item.price}`}</label>

                  <div className={styles.ButtonAddRemove}>
                    <button onClick={handleRemove}>-</button>
                    <label> {addAmount} </label>
                    <button onClick={handleAdd}>+</button>
                  </div>
                </div>

              </div>
            </div>

        

        ))}





      </div>
    </section>
  );
}
