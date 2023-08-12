import React, {forwardRef} from 'react';
import style from './Input.module.scss'

const Input =  forwardRef((props, ref) => {
    return (
      <input

          type={props.inputType}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          name={props.name}
          className={`
            ${props.className ? props.classname : ""}
            ${props.type === "primary" ? style.primary : props.type === "radio" ? style.radio : style.secondary}
          `} 
          id={props.id}
          onChange={props.onChange}
          ref={ref}
          min={props.min}
          max={props.max}
          value={props.value}
          step={props.step}
      />
    )
  });
  
  export default Input;