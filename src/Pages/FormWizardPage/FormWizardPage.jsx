import React, { useState } from "react";
import style from "./FormWizardPage.module.scss";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { CompactPicker } from "react-color";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

export default function FormWizardPage() {
  const [color, setColor] = useState("");

  const onGetResults = () => {
    console.log("Hell yeah brother");
  };

  const onChangeColor = (newColor) => {
    setColor(newColor.hex);
    console.log(color);
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <AnimatedBackground />
      </div>
      <div className={style.right}>
        <h1>As simple as console.log()</h1>
        <p>Fill out this form to see the character you are longing to be</p>

        <form className={style.form}>
          <div className={style.flex}>
            <Input text="hello" type="primary" placeholder="First Name" />
            <Input text="hello" type="primary" placeholder="Last Name" />
          </div>

          <div className={style.flex}>
            <Input inputType="radio" value="male" />
            <p>Male</p>
          </div>
          <div className={style.flex}>
            <Input inputType="radio" value="female" />
            <p>Female</p>
          </div>
          <div className={style.flex}>
            <Input inputType="radio" value="rather not say" />
            <p>Other</p>
          </div>

          <Input
            text="hello"
            type="primary"
            placeholder="First Name"
            inputType="date"
          />

          <select>
            <option>Hello</option>
            <option>Hello</option>
            <option>Hello</option>
            <option>Hello</option>
          </select>

        </form>

        <CompactPicker color={color} onChange={onChangeColor} />

        <Link to={"/character"}>
          <Button text="Let's Start" type="primary" onClick={onGetResults()} />
        </Link>
      </div>
    </div>
  );
}
