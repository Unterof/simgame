import React from 'react';





const Colors = ({ pressButton, colorMain, styles }) => {
console.log('s',styles)
    const colorTypes = [styles.green, styles.red, styles.yellow, styles.blue]

    
    return (

        <div className={styles.block}>
            {colorTypes.map((el, item) => {

                return <div
                     id={item} className={el} key={item} onClick={pressButton}>{el} </div>
                    
            })}
            {/* <div  id={id} className={name} onClick={onClick}>{text} </div>
            <div  id={id} className={name} onClick={onClick}>{text} </div>
            <div  id={id} className={name} onClick={onClick}>{text} </div>
            <div  id={id} className={name} onClick={onClick}>{text} </div> */}

        </div>

    )
}

export default Colors