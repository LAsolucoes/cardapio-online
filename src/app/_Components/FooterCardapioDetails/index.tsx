"use client";
import { useState } from "react";
import styles from "./footerCardapio.module.css";

interface BtnAdicionarProps {
  valor: number;
}

export function FooterCardapioDetails({ valor }: BtnAdicionarProps) {
  const [value, setValue] = useState(1);
  const [valorAdd, setValorAdd] = useState(Number);

  function HandleReducao() {
    if (value === 1) {
      setValue(value);
      return;
    }
    setValue((prev) => prev - 1);
  }

  async function HandleIncremento() {

    const qtdAtual = value + 1;
    const resultado = qtdAtual * valor;
    alert(resultado);
    setValue(qtdAtual);
    setValorAdd(resultado);
  }

  return (
    <footer className={styles.Foooter}>
      <div className={styles.Content}>
        <div className={styles.ContainerButton}>
          <button onClick={HandleReducao}> - </button>
          <span> {value} </span>
          <button onClick={HandleIncremento}> + </button>
        </div>
        <div className={styles.ButtonAdd}>
          <button>
            Adicionar R$ <span> {valorAdd} </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
