import { Button } from "../Button";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import ImageBurger from "../../../../public/assets/burguer.png"

import styles from "./main.module.css"


export function Main() {
    return (
        <main className={styles.MainContainer}>
            <div className={styles.MainContent}>
                <h1>Escolha sua comida <span>favorita.</span></h1>
                <p>Aproveite nosso cardápio! Escolha o que deseja e receba em sua casa de forma rápida e segura.</p>

                <div className={styles.MainContentButtons}>
                    <Button
                        className={"btnYellow"}
                        label={"Ver cardápio"}

                    />
                    <Button
                        className={"btnContact"}
                        label={"(11) 94045-1410"}
                        icon={< FaPhoneAlt className="IconPhone"/>}

                    />
                </div>

                <div className={styles.MainButtonSocialMedia}>
                    <Button
                        icon={<FaWhatsapp  className="IconSocialMedia"/>}
                    />
                    <Button
                        icon={<FaFacebook  className="IconSocialMedia"/>}
                    />
                    <Button
                        icon={< FaInstagram className="IconSocialMedia"/>}
                    />
                </div>

            </div>

            <div className={styles.MainContentImage}>
                <Image
                    src={ImageBurger}
                    alt={""}
                    fill
                    quality={100}
                    priority
                    className={styles.BurguerImage}

                />
                <div className={styles.Testimony}>
                    <p>Entrega rápida e funcionários simpaticos. A comida chegou quente e muito saborosa<span>@alexmoedo</span></p>
                </div>
            </div>
        </main>
    )
}