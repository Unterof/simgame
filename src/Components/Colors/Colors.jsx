import React from 'react';
import styles from "../../scss/mainCircle.module.scss";
// import styles from './css/color.module.scss'
import cn from 'classnames'
import cnBind  from 'classnames/bind' 


const cx = cnBind.bind(styles)

const Colors = ({ isClicked,lightUp, styles }) => {
    const colorTypes = [styles.green, styles.red, styles.yellow, styles.blue]
    
   

// let className = cx({
//     wrapper:true,
//     block:false
// })


    return (

        <div className={cn(styles.wrapper)}>
            {colorTypes.forEach((el, item) => {
           
                 <div
                    id={item} className={cn(styles.block,el)}
                     key={item} onClick={lightUp}> </div>

            })}


        </div>

    )
}

export default Colors