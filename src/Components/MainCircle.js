import React, { useState } from 'react';

import styles from "../scss/mainCircle.module.scss";
import Colors from "./Colors/Colors";



const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");

const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

const soundBoard = [sound1, sound2, sound3, sound4];

const MainCircle = () => {


  let [keyPressed, setKeyPressed] = useState(false)

  const lightUp = (e) => {


    let elemId = e.target.id

    console.log('elemId', elemId)
    soundBoard[elemId].playbackRate = 0.7;
    soundBoard[elemId].play();

    setTimeout(function () {

      setKeyPressed(false)

    }, 500)
  };

  return (

    <div className={styles.container}>

      <Colors styles={styles} soundBoard={[soundBoard]} keyPressed={keyPressed} lightUp={lightUp} />



    </div>




  );
};

export default MainCircle;
