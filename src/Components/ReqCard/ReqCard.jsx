import React from 'react';
import style from './ReqCard.module.scss'

export default function ReqCard({cardImg, cardTitle}) {
  return (
    <div className={style.card}>
        <h4>{cardTitle}</h4>
        <img src={cardImg} width={50}/>
    </div>
  )
}
