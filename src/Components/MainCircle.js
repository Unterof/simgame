import React, { useState } from 'react';

import styles from "../scss/mainCircle.module.scss";
import Colors from "./Colors/Colors";



const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");

const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

const soundBoard = [sound1, sound2, sound3, sound4];
const colorTypes = ['green', 'red', 'yellow', 'blue']
const MainCircle = () => {


  const [isOn, setIson] = useState(false)
  const [color,setColor] = useState("")

  const lightUp = (e) => {

    setIson(true)
    let elemId = e.target.id
     setColor(colorTypes[elemId])

    console.log('elemId', color)
    soundBoard[elemId].playbackRate = 0.7;
    soundBoard[elemId].play();

    setTimeout(function () {

      setIson(false)

    }, 500)
  };

  return (

    <div className={styles.container}>

      <Colors styles={styles} colorTypes={colorTypes} soundBoard={[soundBoard]} color={color} isOn={isOn} lightUp={lightUp} />



    </div>




  );
};

export default MainCircle;
