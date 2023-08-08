import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <button
        id={props.id}
        brand={props.brand}
        className={`
        ${props.className ? props.classname : ""}
        ${props.type === "primary" ? style.primary : style.secondary}
        `} 
        onBlur={props.onBlur}
        onClick={props.onClick}>
            {props.text}
        </button>
  )
}