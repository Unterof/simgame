import React from 'react';
import styles from "../../scss/mainCircle.module.scss";
// import styles from './css/color.module.scss'
import cn from 'classnames'
import cnBind  from 'classnames/bind' 


const cx = cnBind.bind(styles)

const Colors = ({ isClicked,lightUp, styles }) => {
    const colorTypes = [styles.green, styles.red, styles.yellow, styles.blue]
    const colorItem = ["green", "red", "yellow", "blue"]

//  const colorSetter = cn(cx({

//  }))

    
    const lightCircleOne = cn({
     
    })
    console.log('styles',styles,isClicked)
   const pressedColor = cn('item',cx({
    active: isClicked,
   }))


    return (

        <div className={cn(styles.block)}>
            {colorTypes.map((el, item) => {
              
                return <div
                
                    id={item} className={el}
                     key={item} onClick={lightUp}>{el} </div>

            })}


        </div>

    )
}

export default Colors