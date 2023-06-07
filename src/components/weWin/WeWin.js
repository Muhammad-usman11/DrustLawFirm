import React from 'react'
import style from './win.module.css'
const WeWin = () => {
  return (
    <>
    
    <div className={style.wewinsec}>
        <div className="wrapper">
        <div class="pure-g">
    <div class="pure-u-1 pure-u-md-12-24">
        <div className={style.wintext}>
            <h1>Why We Win</h1>
            <h2>Clear & Compelling Storylines</h2>
            <p>We distill complex commercial disputes into clear and compelling storylines, tailoring our presentation to the audience, whether it be a jury, judge, or arbitrator. These skills are crucial in commercial litigation matters.</p>
            <div className={style.btn2}>
                    <i class="fa-solid fa-arrow-right"></i>
                    <h3>Meet the Team </h3>
            </div>
        </div>
    </div>
    <div class="pure-u-1 pure-u-md-12-24">
        <div className={style.winimg}>
        <img src="/images/wewin.jpg" alt="" />
        </div>
        
    </div>
    
</div>
        </div>
    </div>

    </>
  )
}

export default WeWin