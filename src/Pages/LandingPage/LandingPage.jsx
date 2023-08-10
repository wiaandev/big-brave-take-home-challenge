import React from "react";
import style from "./LandingPage.module.scss";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom"; // this will be used to navigate the user to the directed page
import ReqCard from "../../Components/ReqCard/ReqCard";
import birthday from "../../Assets/birthday.png";
import engineer from "../../Assets/engineer.png";
import gender from "../../Assets/gender-fluid.png";
import idCard from "../../Assets/id-card.png";
import color from "../../Assets/color-palette.png";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

export default function LandingPage() {
  const onNavigateToForm = () => {};

  return (
    <div className={style.container}>
      {/* <img src={img} width={200} className={style.left} /> */}
      <div className={style.left}>
        <AnimatedBackground />
      </div>
      <div className={style.right}>

        <h1>Character building application</h1>
        <p>
          Want to know what type of character you are? Click on this cool
          looking button below
        </p>
        <h3>What we need from you</h3>
        <div className={style.flex}>
          <ReqCard cardTitle="Your full name" cardImg={idCard} />
          <ReqCard cardTitle="Your Gender" cardImg={gender} />
          <ReqCard cardTitle="Your occupation" cardImg={engineer} />
          <ReqCard cardTitle="Your Date of Birth" cardImg={birthday} />
          <ReqCard cardTitle="Your Favourite Color" cardImg={color} />
        </div>
        <Link to={"/form"}>
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
