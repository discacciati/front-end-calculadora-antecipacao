import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Form = ({ setDataSale, days, setErrorsApi, errorsApi }) => {
  const errorAmount = [];
  const navigate = useNavigate();

  const Schema = yup.object().shape({
    amount: yup
      .number("Escreva um valor")
      .required("Escreva um valor para a venda"),
    installments: yup
      .number("Informe a quantidade de parcelas")
      .required("Informe a quantidade de parcelas"),
    mdr: yup
      .number("Informe o percentual de MDR")
      .required("Informe o percentual de MDR"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleAddDataSale = ({ amount, installments, mdr }) => {
    const sale = { amount, installments, mdr, days };

    api
      .post("/", sale)
      .then((response) => setDataSale(response.data))
      .catch((err) => {
        if (err.response.status === 400) {
          errorAmount.push("O valor deve ser maior ou igual a 1000.");
          console.log(errorAmount);
        } else {
          setErrorsApi([...errorsApi, err]);
          navigate("/errors");
        }
      });
  };

  return (
    <div className="FormDiv">
      <form className="Form" onSubmit={handleSubmit(handleAddDataSale)}>
        <div className="FormTitle">
          <label className="Title">Simule sua Antecipação</label>
        </div>
        <div className="FormlGeral">
          <div className="FormLabel">
            <label>Informe o valor da venda * </label>
            <input
              className="FormInput"
              type="text"
              placeholder="R$ "
              {...register("amount")}
            ></input>
            <span className="FormError">{errors.amount?.message}</span>
            <span className="FormError">
              {errorAmount.length !== 0 ? errorAmount[0] : null}
            </span>
          </div>
        </div>
        <div className="FormlGeral">
          <div className="FormLabel">
            <label>Em quantas parcelas * </label>
            <input
              className="FormInput"
              type="text"
              placeholder=" "
              {...register("installments")}
            ></input>
            <span className="FormSpan">Máximo de 12 parcelas</span>
            <span className="FormError">{errors.installments?.message}</span>
          </div>
        </div>
        <div className="FormGeral">
          <div className="FormLabel">
            <label>Informe o percentual de MDR * </label>
            <input
              className="FormInput"
              type="text"
              placeholder=" "
              {...register("mdr")}
            ></input>
            <span className="FormError">{errors.mdr?.message}</span>
          </div>
        </div>
        <button className="FormBtn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
