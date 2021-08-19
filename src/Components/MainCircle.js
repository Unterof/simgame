import React, { useState } from "react";

import cn from "classnames";
import cnBind from "classnames/bind";
import Center from "./Center/Center";
import styles from "../scss/mainCircle.module.scss";
import Colors from "./Colors/Colors";

const cx = cnBind.bind(styles);

const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");

const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

const soundBoard = [sound1, sound2, sound3, sound4];

const MainCircle = () => {
  const [isClicked, setClicked] = useState(null);

  
  const centerStyle = cn(cx("center"));

  const lightUp = (event) => {
      console.log('event',event.target.id)
      
    let num = Number(event.target.id);
    soundBoard[num].playbackRate = 0.7;
    soundBoard[num].play();
  };

  return (
    <div className={styles.App}>
    <div className={styles.container}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
        <Colors styles={styles} soundBoard={[soundBoard]} lightUp={lightUp} />
         <Center name={centerStyle} />
        </div>
        
     
      
      </div>
    </div>
    </div>
  );
};

export default MainCircle;
