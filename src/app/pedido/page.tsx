import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./cardapio.module.css";
import ImageProduct from "../../../public/assets/pizzas.png";

export default function Cardapio() {
  return (
    <div className={styles.ContainerCardapio}>
      <div className={styles.Content}>
        <div className={`${styles.Header} ${styles.Card}`}>
          <div className={styles.ButtonContainer}>
            <button>
              <FaArrowLeft />
            </button>
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

          <span>R$ 39,90</span>
        </div>

        <div className={styles.Additional}>
          <div className={styles.AdditionalTitle}>
            <h3>Deseja borda recheada?</h3>
            <label>Escolher até 1 opção</label>
          </div>
          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Cheddar</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + R$ 8,99</label>
              <input type="radio" />
            </div>
          </div>
          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Catupiry</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + R$ 8,99</label>
              <input type="radio" />
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
              <label> + R$ 4,99</label>
              <input type="radio" />
            </div>
          </div>
          <div className={`${styles.OptionAdditional} ${styles.Card}`}>
            <label>Azeitona</label>
            <div className={styles.OptionAdditionalPrice}>
              <label> + R$ 2,99</label>
              <input type="radio" />
            </div>
          </div>
        </div>

        <div className={styles.Additional}>
          <div className={styles.AdditionalTitle}>
            <h3>Observações</h3>
            <label>Informe alguma observação abaixa</label>
          </div>
          <div className={`${styles.Observation} ${styles.Card}`}>


            <textarea  className={styles.TextArea}></textarea>

          </div>
        </div>
      </div>
    </div>
  );
}
