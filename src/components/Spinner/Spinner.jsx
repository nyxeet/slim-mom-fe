  
import React from "react";
import Loader from "react-loader-spinner";
import style from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={style.loader}>
        <Loader
           type="Circles"
           color="#00BFFF"
           height={80}
           width={80}
        />
    </div>
  );
};
export default Spinner;