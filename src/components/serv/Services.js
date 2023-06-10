import React from "react";
import style from "./serv.module.css";
const Services = () => {
  return (
    <>
      <div className={style.servicessec}>
        <div className="wrapper">
          <h1>Services</h1>
          <div class={style.servbox}>
            <div className={style.btnbox}>
              <p>Commercial Litigation</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className={style.btnbox}>
              <p>Transportation Accidents</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className={style.btnbox}>
              <p>Personal Injury</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className={style.btnbox}>
              <p>Ohio Local Counsel</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div className={style.btnbox}>
              <p>Appellate Law</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
