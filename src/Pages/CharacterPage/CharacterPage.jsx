import React from "react";
import style from "./CharacterPage.module.scss";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom"; // this will be used to navigate the user to the directed page
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

export default function CharacterPage() {
  const onNavigateToForm = () => {};

  return (
    <div className={style.container}>
      {/* <img src={img} width={200} className={style.left} /> */}
      <div className={style.left}>
        <AnimatedBackground />
      </div>
      <div className={style.right}>

        <h1>This is your character</h1>
        <p>
          Want to know what type of character you are? Click on this cool
          looking button below
        </p>
        <Link to={"/"}>
          <Button
            text="Let's Start"
            type="primary"
            onClick={onNavigateToForm()}
          />
        </Link>
      </div>
    </div>
  );
}
