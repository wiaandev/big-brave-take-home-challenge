import React from "react";
import style from './AnimatedBackground.module.scss'

function AnimatedBackground() {
  return (
    <div className={style.box}>
      <div className={`${style.wave} ${style.one}`}></div>
      <div className={`${style.wave} ${style.two}`}></div>
      <div className={`${style.wave} ${style.three}`}></div>
    </div>
  );
}

export default AnimatedBackground;
