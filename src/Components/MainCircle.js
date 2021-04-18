import React from 'react'
import styles from '../scss/mainCircle.module.scss'
import Color from "./Colors/Color";
import cn from 'classnames';
import cnBind from 'classnames/bind';
import Center from "./Center/Center";

const cx = cnBind.bind(styles)

const MainCircle = () => {



  return (
      <div className={styles.container}>

          <Color name={cn(styles.colors, styles.greenBut)} text={'green'}/>
          <Color name={cn(styles.colors, styles.redBut)} text={'red'}/>
          <Color name={cn(styles.colors, styles.yellowBut)} text={'yellow'}/>
          <Color name={cn(styles.colors, styles.blueBut)} text={'blue'}/>
          <Center name={cn(styles.center)}/>


      </div>
  )

  }

export default MainCircle