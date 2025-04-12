import Link from "next/link";
import Image from "next/image";
import ImageBurguer from "../../../../public/assets/burguer.png";

import styles from "./cardapio.module.css";

export function Cardapio() {
  return (
    <section className={styles.ContainerCardapio}>
      <div className={styles.TittleCardapio}>
        <label htmlFor="">Cardapio</label>
        <h2>Conheça o nosso cardápio</h2>
      </div>

      <div>
        <nav className={styles.CategoryCardapio}>
          <Link href={"#"}>Burges</Link>
          <Link href={"#"}>Pizzas</Link>
          <Link href={"#"}>Churrasco</Link>
          <Link href={"#"}>Steaks</Link>
          <Link href={"#"}>Bebidas</Link>
          <Link href={"#"}>Sobremesas</Link>
        </nav>
      </div>

      <div className={styles.ContentCardapioItens}>
        <div className={styles.ItemCardapio}>
          <div className={styles.ImageProduct}>
              <Image
                src={ImageBurguer}
                alt="Imagem do Produto"
                width={150}
                height={100}
              />
          </div>
          <div className={styles.NamePriceItem}>
            <label className={styles.TitleProduct}>Nome do produto pode ser muito grande</label>
            <label className={styles.PriceProduct}>R$ 9,99</label>
          </div>
        </div>
      </div>
    </section>
  );
}
