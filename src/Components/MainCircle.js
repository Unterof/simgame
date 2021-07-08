import React, { useState } from 'react';
import cn from 'classnames'
import classnames from 'classnames/bind';

import Center from "./Center/Center";
import Color from './Colors/Color'
import styles from '../scss/mainCircle.module.scss'
import Colors from "./Colors/Colors";

const cx = classnames.bind(styles);





const sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
const soundBoard = [sound1, sound2, sound3, sound4]




const MainCircle = () => {
    const [clicked, setClicked] = useState(false)

    const colorMain = cx({
        anim: clicked,
        colors: 'colors',

    })

    const centerStyle = cx({
        center: 'center'
    })

    const pressButton = (event) => {
        let num = +event.target.id
        soundBoard[num].play()
        setTimeout(setClicked(true), 3000)
        
    }

    //  const lightUp = (id) => {
    //      const toAnimate = 
    //  }

    return (

        <div className={styles.container}>
            
            <Colors  styles={styles}   pressButton={pressButton}  />
            {/* <Color id='0' name={styles.green} value={clicked} text={'greenBut'} pressButton={pressButton} />
            <Color id='1' name={styles.red} value={clicked} text={'redBut'} pressButton={pressButton} />
            <Color id='2' name={styles.yellow} value={clicked} text={'yellowBut'} pressButton={pressButton} />
            <Color id='3' name={styles.blue} value={clicked} text={'blueBut'} pressButton={pressButton} /> */}
            <Center name={centerStyle} />
             

        </div>
    )

}

export default MainCircle