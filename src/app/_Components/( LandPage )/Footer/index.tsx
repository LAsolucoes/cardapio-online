import Image from "next/image";
import ImageLogo from "../../../../../public/assets/logo.png";
import styles from "./footer.module.css";
import { ButtonsMidiasSociais } from "../../ButtonsMidiasSociais";
export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.ContetFooter}>
        <div className={styles.ContainerImage}>
          <Image
            src={ImageLogo}
            alt=""
            fill
            quality={100}
            className={styles.ImageLogo}
          />
        </div>

        <div className={styles.Copy}>
          <label>
            <span>Menu On-line &copy;</span> Todos os direitos reservados.{" "}
          </label>
        </div>

        <ButtonsMidiasSociais />
      </div>
    </footer>
  );
}
