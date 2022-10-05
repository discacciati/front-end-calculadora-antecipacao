import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

import Form from "../../components/form";
import List from "../../components/list";
import ErrorPage from "../errors";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dataSale, setDataSale] = useState([]);
  const [days, setDays] = useState([1, 15, 30, 90]);
  const [errorsApi, setErrorsApi] = useState([]);
  const [aside, setAside] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataSale.length !== 0) {
      setAside(true);
    }
  }, [dataSale, errorsApi, navigate]);

  console.log(dataSale);

  return (
    <>
      <div className="main">
        {errorsApi.length === 0 ? (
          <>
            <div className="FormsLancamento">
              <Form
                setDataSale={setDataSale}
                days={days}
                setErrorsApi={setErrorsApi}
                errorsApi={errorsApi}
              />
            </div>
            <div className="aside">
              {aside ? <List dataSale={dataSale} /> : <></>}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Home;
