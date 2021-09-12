  
import React from "react";
import Loader from "react-loader-spinner";
import style from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={style.loader}>
        <Loader
           type="Circles"
           color="#12ce0b"
           height={80}
           width={80}
        />
    </div>
  );
};
export default Spinner;