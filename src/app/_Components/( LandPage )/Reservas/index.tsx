import Image from "next/image";
import ImageReserva from "../../../../../public/assets/icone-reserva.svg";
import styles from "./reservas.module.css";
export function Reservas() {
  return (
    <section className={styles.ContainerReservas} id="reservas">
      <div className={styles.ContentReservas}>
        <div>
          <label>RESERVA</label>
          <h3>Quer reservar um horário?</h3>
          <div className={styles.MessageReserva}>
            <p>Mande uma mensagem clicando no botão abaixo.</p>
            <p>Reserve sua data e horário de forma simples e rápida.</p>
          </div>

          <button>Fazer reserva</button>
        </div>

        <div>
          <Image
            src={ImageReserva}
            alt=""
            width={300}
            height={300}
            quality={100}
            className={styles.ImageReserva}
          />
        </div>
      </div>
    </section>
  );
}
