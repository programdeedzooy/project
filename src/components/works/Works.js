import React from 'react'
import style from '../sales/Shome.module.css'
import '../sales/ani.css'
import Shopani from '../sales/Shopani'
function Works(){
 return(
    <div className={`${style.row}`,`${style.con}`}>
                <div className={style.column}>
                    <h3 className={style.sales}> Works</h3>
                    <p className={style.salesp}>
                        you can get works  for this website....
                    </p>
                    <p className={style.salesp}>
                        go down👇 and purchase your products
                    </p>

                    <div className={style.login}>
                        <a href="#"> <span className={style.lets}>Let's Go 🔜 
                    </span></a>
                    </div>
                </div>
                <Shopani/> 
               
            </div>
 )

}
export default Works