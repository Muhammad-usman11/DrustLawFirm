import React from 'react'
import style from './commercial.module.css'
const Commercial = () => {
  return (
    <>
    <div className={style.commercialsec}>
        <div className="wrapper">
        <div class="pure-g">
    <div class="pure-u-1 pure-u-md-12-24">
        <div className={style.litigation}>
            <h4>Ohio Commercial Litigaton Lawyer</h4>
            <h1>Commercial Litigation</h1>
            <p>We litigate complex commercial disputes in state courts, federal courts, and arbitral fora in Ohio.</p>
            <p>Our attorneys routinely represent corporate clients in high-dollar-value breach of contract actions, closely-held business disputes and business torts.</p>
            <div className={style.commercialbtns}>
                <button className={style.btn1} >
                    <i class="fa-solid fa-phone"></i>
                    <h3>Call Us</h3>
                </button>
                <button className={style.btn2} >
                    <i class="fa-solid fa-arrow-right"></i>
                    <h3>Send A Message </h3>
                </button>
            </div>
        </div>
    </div>
    <div class="pure-u-1 pure-u-md-12-24">
        <div className={style.additional}>
            <h2>Additional areas of focus include:</h2>
            <div className={style.areabox}>
                <div className={style.areaboxtext}>
                    <ul>
                        <li> Partnership and Joint Venture Dispute Litigation</li>
                        <li>Financial Services Litigation</li>
                        <li>E-Commerce Litigation</li>
                        <li>Noncompete Litigation</li>
                        <li>Trade Secret Litigation</li>
                        <li>Uniform Commercial Code (UCC) Litigation</li>
                        <li>Employment Defense Litigation</li>
                        <li>Real Estate Litigation</li>
                        <li>Corporate Governance Litigation</li>
                        <li>Appeals</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   
</div>
        </div>
    </div>
    
    </>
  )
}

export default Commercial