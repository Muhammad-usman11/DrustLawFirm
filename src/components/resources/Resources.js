import React from 'react'
import style from './resource.module.css'
const Resources = () => {
  return (
    <>
    
    <div className={style.resourcesec}>
        <div className="wrapper">
            <h1 className={style.restext} >Resources</h1>
            <div class="pure-g">
    <div class="pure-u-1 pure-u-md-12-24">
        <div className={style.fedbox}>
            <h2>Federal</h2>
            <div className={style.fddbox2}>
                <div className={style.fedbox3}>
                <i class="fa-regular fa-file-pdf"></i>
                <h3>Southern District of Ohio Local Rules</h3>
                </div>
                <div className={style.fedbox3}>
                <i class="fa-regular fa-file-pdf"></i>
                <h3>Southern District of Ohio Local Rules</h3>
                </div>
                <div className={style.fedbox3}>
                <i class="fa-regular fa-file-pdf"></i>
                <h3>Southern District of Ohio Local Rules</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="pure-u-1 pure-u-md-12-24">
    <div className={style.fedbox}>
            <h2>Ohio State</h2>
            <div className={style.fddbox2}>
                <div className={style.fedbox3}>
                <i class="fa-regular fa-file-pdf"></i>
                <h3>Southern District of Ohio Local Rules</h3>
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

export default Resources