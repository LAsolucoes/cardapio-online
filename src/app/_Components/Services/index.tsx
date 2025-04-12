import Image from "next/image";
import ImageOrder from "../../../../public/assets/icone-pedido.svg";
import ImageDelivery from "../../../../public/assets/icone-delivery.svg"
import ImageQuality from "../../../../public/assets/icone-qualidade.svg"
import styles from "./services.module.css";

export function Services() {
  return (
    <section className={styles.SectionContainer}>
      <article>
        <div className={styles.SectionTitle}>
          <label htmlFor="">SERVIÇOS</label>
          <h2>Como são nossos serviços?</h2>
        </div>
        <div className={styles.TypeServices}>
          <div className={styles.SectionCard}>
            <Image
              src={ImageOrder}
              alt="Imagem Usuário realizando Pedido"
              className={styles.ImageServices}
              quality={100}
              priority
            />
            <h3>Fácil de pedir</h3>
            <p>Você só precisa de alguns passos para pedir sua comida.</p>
          </div>
          <div className={styles.SectionCard}>
            <Image
              src={ImageDelivery}
              alt="Imagem entregador Delivery"
              className={styles.ImageServices}
             
              quality={100}
              priority
            />
            <h3>Entrega Rápidar</h3>
            <p>Nossa entrega é sempre pontual, rápida e segura.</p>
          </div>
          <div className={styles.SectionCard}>
            <Image
              src={ImageQuality}
              alt="Imagem Usuário realizando Pedido"
              className={styles.ImageServices}
              
              quality={100}
              priority
            />
            <h3>Melhor qualidade</h3>
            <p>Não só rápidez na entrega, a qualidade tambem é o nosso forte.</p>
          </div>
        </div>
      </article>
    </section>
  );
}
