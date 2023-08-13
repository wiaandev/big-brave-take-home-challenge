import React from "react";
import style from './Loader.module.scss';

// WHere I got this loader from: https://codepen.io/josfabre/pen/NWBmYGR

function Loader({loaderText}) {
  return (
    <div className={style.container}>
      <svg
        id="loader"
        className={style.loader}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <g>
          <ellipse id="ellipse" cx="50" cy="50" rx="25" ry="25" />
        </g>
      </svg>
      <p>{loaderText}</p>
    </div>
  );
}

export default Loader;
