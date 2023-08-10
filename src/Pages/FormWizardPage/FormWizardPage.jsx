import React, { useState } from "react";
import style from "./FormWizardPage.module.scss";
import img from "../../Assets/background.jpg";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { CompactPicker } from "react-color";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

export default function FormWizardPage() {
  const onSubmit = (data) => console.log(data);

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
        <AnimatedBackground/>
      </div>
      <div className={style.right}>
        <h1>As simple as console.log()</h1>
        <p>Fill out this form to see the character you are longing to be</p>

        <form className={style.form}>
            <Input text="hello" type="primary"/>
        </form>

        <CompactPicker color={color} onChange={onChangeColor} />

        <Link to={"/character"}>
          <Button text="Let's Start" type="primary" onClick={onGetResults()} />
        </Link>
      </div>
    </div>
  );
}
