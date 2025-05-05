import Image from "next/image";
import Link from "next/link";
import ImageLogo from "../../../../../public/assets/logo.png";
import ImageAvatar from "../../../../../public/assets/ImageAvatar.png";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.ContainerLogo}>
          <Image src={ImageLogo} alt="Logo Tipo" width={80} height={80} />
        </div>

        <div className={styles.Navegation}>
          <Image
            src={ImageAvatar}
            alt="Foto do Usuário logado"
            width={50}
            height={50}
          />
          <nav>
            <Link href={"#"}>Sair</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
