"use client";

import { useState } from "react";
import { TitlePage } from "../_Components/TittlePages";
import { ButtonLinkSaveCancel } from "../_Components/ButtonSaveCancel"

export default function DadosCompany() {
  const [isTypeCnpj, setIsTypeCnpj] = useState(true);
  const [typeCompany, setTypeCompany] = useState("CNPJ");
  const [nameRazaoSocial, setNameRazaoSocial] = useState("Razão Social");
 
  

  function TypeCompany() {
    if (isTypeCnpj) {
      setIsTypeCnpj(false);
      setTypeCompany("CPF");
      setNameRazaoSocial("Nome Completo")
      return;
    }
    setIsTypeCnpj(true)
    setTypeCompany("CNPJ")
    setNameRazaoSocial("Razão Social")
  }

  return (
    <div>
      <div>
         <TitlePage  title={"Cadastro da Empresa"} />
      </div>

      

      <div className="fieldGroup">
        <div className="fieldInput">
          <label className="required">Tipo</label>
          <select name="" id="" onChange={TypeCompany}>
            <option value="" >CNPJ</option>
            <option value="">CPF</option>
          </select>
        </div>
        <div className="fieldInput">
          <label className="required">{typeCompany}</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label className="required">{nameRazaoSocial}</label>
          <input type="text" className="input-lg" />
        </div>
        <div className="fieldInput">
          <label className="required">Nome Fantasia</label>
          <input type="text" className="input-lg" />
        </div>
      </div>

      <div className="fieldGroup">
        <div className="fieldInput">
          <label className="required">CEP</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label className="required">Endereço</label>
          <input type="text" className="input-lg" />
        </div>
        <div className="fieldInput">
          <label className="required">N°</label>
          <input type="text" className="input-sm" />
        </div>
        <div className="fieldInput">
          <label>Complemento</label>
          <input type="text" className="input-md" />
        </div>
        <div className="fieldInput">
          <label className="required">Estado</label>
          <select name="" id="">
            <option value=""> - - </option>
            <option value="">Rio Grande do Sul</option>
          </select>
        </div>
      </div>

      <div className="fieldGroup">
        <div className="fieldInput">
          <label>WhatsApp</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label>Telefone 2</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label>E-mail</label>
          <input type="text" className="input-lg" />
        </div>
      </div>
      <hr />
      <div>
        <label className="subTitle">Redes Sociais</label>
      </div>
      <div className="fieldGroup">
        <div className="fieldInput">
          <label>Link do instagram</label>
          <input type="text" className="input-lg" />
        </div>
        <div className="fieldInput">
          <label>Link do facebook</label>
          <input type="text" className="input-lg" />
        </div>
        <div className="fieldInput">
          <label>Link do whatsApp</label>
          <input type="text" className="input-lg" />
        </div>
      </div>
      <hr />

      <div>
        <label className="subTitle">Dados de entrega</label>
      </div>

      <div className="fieldGroup">
        <div className="fieldInput">
          <label className="required">Valor de pedido mínimo</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label>Valor para entrega padrão</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label>Valor para entrega gratis</label>
          <input type="text" />
        </div>
        <div className="fieldInput">
          <label>Tipo de entrega</label>
          <select name="" id="">
            <option value="">Balcão</option>
            <option value="">Delivery</option>
          </select>
        </div>
      </div>

      <ButtonLinkSaveCancel 
      name="Salvar"
      
      />
    </div>
  );
}
