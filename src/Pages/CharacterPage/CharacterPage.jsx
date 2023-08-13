import React, { useContext } from "react";
import style from "./CharacterPage.module.scss";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom"; // this will be used to navigate the user to the directed page
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { FormContext } from "../../Store/Form.context";
import socialMedia from "../../Assets/social-media.png";
import chef from "../../Assets/chef.png";
import dev from "../../Assets/developer.png";
import yoga from "../../Assets/yoga.png";
import maleYoung from "../../Assets/m-head.png";
import femaleYoung from "../../Assets/f-head.png";
import maleOld from "../../Assets/old-m-head.png";
import femaleOld from "../../Assets/old-f-head.png";
import Pants from "../../Components/Pants/Pants";

export default function CharacterPage() {
  const onNavigateToForm = () => {};

  const { formValues, updateFormValues } = useContext(FormContext);

  const year = formValues.date.split("-")[0];
  console.log(year);
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  const age = currentYear - year;
  console.log(age);

  console.log(formValues);

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

        <div className={style.flexCol}>
          {age > 60 && formValues.gender === "male" ? (
            <img src={maleOld} width={70} />
          ) : (
            ""
          )}
          {age < 60 && formValues.gender === "male" ? (
            <img src={maleYoung} width={70} />
          ) : (
            ""
          )}
          {age > 60 && formValues.gender === "female" ? (
            <img src={femaleOld} width={70} />
          ) : (
            ""
          )}
          {age < 60 && formValues.gender === "female" ? (
            <img src={femaleYoung} width={70} />
          ) : (
            ""
          )}

          {formValues.occupation === "Social Media Influencer" ? (
            <img src={socialMedia} width={250} className={style.shirt} />
          ) : (
            ""
          )}
          {formValues.occupation === "Developer" ? (
            <img src={dev} width={250} className={style.shirt} />
          ) : (
            ""
          )}
          {formValues.occupation === "Chef" ? (
            <img src={chef} width={250} className={style.shirt} />
          ) : (
            ""
          )}
          {formValues.occupation === "Yoga Instructor" ? (
            <img src={yoga} width={250} className={style.shirt} />
          ) : (
            ""
          )}
          <Pants color={formValues.color} pantsStyle={style.pants} />
        </div>
        <p>
          My name is {formValues.firstName} {formValues.lastName}, I am {age}{" "}
          years old and I am a {formValues.occupation}
        </p>
        <Link to={"/"}>
          <Button
            text="Start Over"
            type="primary"
            onClick={onNavigateToForm()}
          />
        </Link>
      </div>
    </div>
  );
}
