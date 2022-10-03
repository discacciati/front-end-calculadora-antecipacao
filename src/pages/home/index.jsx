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
  const [errors, setErrors] = useState([]);
  const [aside, setAside] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataSale.length !== 0) {
      setAside(true);
    }
  }, [dataSale, errors, navigate]);

  return (
    <>
      <div className="main">
        {errors.length === 0 ? (
          <>
            <div className="FormsLancamento">
              <Form
                setDataSale={setDataSale}
                days={days}
                setErrors={setErrors}
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
