import React from "react";
import "./styles.css";

const List = ({ dataSale }) => {
  return (
    <div className="ListDiv">
      <div className="TitleDiv">
        <h3 className="Title">Você receberá</h3>
      </div>

      <div className="ValuesDiv">
        {dataSale["1"] ? (
          <p className="Return">
            Amanhã : <b>R$ {dataSale["1"]},00 </b>
          </p>
        ) : null}

        {dataSale["15"] ? (
          <p className="Return">
            Em 15 dias : <b>R$ {dataSale["15"]},00 </b>
          </p>
        ) : null}

        {dataSale["30"] ? (
          <p className="Return">
            Em 30 dias : <b>R$ {dataSale["30"]},00 </b>
          </p>
        ) : null}

        {dataSale["60"] ? (
          <p className="Return">
            Em 60 dias : <b>R$ {dataSale["60"]},00 </b>
          </p>
        ) : null}

        {dataSale["90"] ? (
          <p className="Return">
            Em 90 dias : <b>R$ {dataSale["90"]},00 </b>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default List;
