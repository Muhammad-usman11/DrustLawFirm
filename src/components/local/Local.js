import React from "react";
import style from "./local.module.css";
const Local = () => {
  return (
    <>
      <div className={style.commercialsec}>
        <div className="wrapper">
          <div class="pure-g">
            <div class="pure-u-1 pure-u-md-12-24">
              <div className={style.litigation}>
                <h4>Assisting Attorneys Nationwide with:</h4>
                <h1>Ohio Local Counsel Services</h1>
                <p>
                The Durst Law Firm frequently serves as local counsel in tribunals across the state of Ohio. We are the ideal Ohio local counsel for commercial litigation and other civil cases.
                </p>
                <p>
                If your client is faced with litigation or arbitration in Ohio, contact The Durst Law Firm to discuss working together as local counsel. References available upon request.
                </p>
                <div className={style.commercialbtns}>
                  <div className={style.btn1}>
                    <i class="fa-solid fa-phone"></i>
                    <h3>Call Us Today</h3>
                  </div>
                  <div className={style.btn2}>
                    <i class="fa-solid fa-arrow-right"></i>
                    <h3>Send A Message </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-12-24">
              <div className={style.loaclimg}>
                <img src="/images/localimg.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Local;
