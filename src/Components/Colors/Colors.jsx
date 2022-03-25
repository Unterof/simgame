import React from 'react';
import styles from "../../scss/mainCircle.module.scss";

import cnBind from 'classnames/bind'
import Center from '../Center/Center';


const cn = cnBind.bind(styles)

const Colors = ({ lightUp, keyPressed, styles }) => {
    const colorTypes = ['green', 'red', 'yellow', 'blue']


    return (

        <div className={cn('flex-container')}>
            {colorTypes.map((el, item) => {
                return <div
                    id={item} className={cn('colors', el, keyPressed ? 'animLight' : '')}
                    key={item} onClick={lightUp}> </div>

            })}

            <Center />
        </div>

    )
}

export default Colors