import Image from "next/image";
import { useState } from "react";
import styles from "./modal.module.css";
interface ModalProps {
  title: string;
  image: string;
  name: string;
  description: string;
  price: number;
  onClick?: () => void;
}

export function Modal({
  title,
  image,
  name,
  description,
  price,
  onClick,
}: ModalProps) {
  const [addAmount, setAddAmount] = useState(0);

  function handleAdd() {
    setAddAmount(addAmount + 1);
  }

  function handleRemove() {
    if (!addAmount) {
      setAddAmount(addAmount);
      return;
    }
    setAddAmount(addAmount - 1);
  }

  return (
    <div className={styles.ModalBackground}>
      <div className={styles.ModalContainer}>
        <div className={styles.ModalContent}>
          <div className={styles.TitleModal}>
            <h1>{title}</h1>

            <button onClick={onClick} className="btnDanger">
              {" "}
              X{" "}
            </button>
          </div>

          <div className={styles.ImageProduct}>
            <Image
              src={image}
              alt={name}
              fill
              priority={true}
              quality={100}
              className={styles.Image}
            />
          </div>

          <div className={styles.Product}>
            <label className={styles.NameProduct}>Descrição:</label>
            <label className={styles.Description}>{description}</label>
          </div>
          <hr />

          <div className={styles.PriceProduct}>
            <label className={styles.Price}>{price}</label>
          </div>
        </div>

        <div className={styles.FooterModal}>
          <button className="btnSuccess">Adicionar </button>

          <div className={styles.ButtonAddRemove}>
            <button onClick={handleRemove} className="btnDanger">
              -
            </button>
            <label> {addAmount} </label>
            <button onClick={handleAdd} className="btnSuccess">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
