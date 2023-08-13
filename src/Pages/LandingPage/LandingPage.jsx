import React, { useContext, useState } from "react";
import style from "./LandingPage.module.scss";
import Button from "../../Components/Button/Button";
import { Form, Link, useNavigate } from "react-router-dom"; // this will be used to navigate the user to the directed page
import ReqCard from "../../Components/ReqCard/ReqCard";
import birthday from "../../Assets/birthday.png";
import engineer from "../../Assets/engineer.png";
import gender from "../../Assets/gender-fluid.png";
import idCard from "../../Assets/id-card.png";
import color from "../../Assets/color-palette.png";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import Input from "../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";
import { FormContext } from "../../Store/Form.context";

const defaultValues = {
  firstName: "",
  lastName: "",
};

export default function LandingPage() {
  const navigate = useNavigate();
  const { formValues, updateFormValues } = useContext(FormContext);

  const errorValues = {
    firstNameErr: "",
    lastNameErr: "",
  };

  const [values, setValues] = useState(defaultValues);
  const [errVals, setErrVals] = useState(errorValues);
  const { firstName, lastName } = values;

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const validate = (value, errorMessage) => {
    if (value === "") {
      return errorMessage;
    }
    return "";
  };

  const onGetResults = () => {
    console.log("Hell yeah brother");
    console.log(formValues);

    if (values.firstName === "" || values.lastName === "") {
      const nameError = validate(values.firstName, "Enter your first name");
      const surnameError = validate(values.lastName, "Enter surname");
      setErrVals({
        ...errVals,
        nameError,
        surnameError,
      });
    } else {
      updateFormValues(values);
      navigate("/form");
    }
  };

  return (
    <div className={style.container}>
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
        <form>
          <div className={style.flex}>
            <div className={style.flexCol}>
              <Input
                name={"firstName"}
                value={firstName}
                text="hello"
                type="primary"
                placeholder="First Name"
                onChange={changeValues}
              />
              <p className={style.error}>{errVals.nameError}</p>
            </div>
            <div className={style.flexCol}>
              <Input
                name={"lastName"}
                value={lastName}
                text="hello"
                type="primary"
                placeholder="Last Name"
                onChange={changeValues}
              />
              <br />
              <p className={style.error}>{errVals.surnameError}</p>
            </div>
          </div>
        </form>
        <Button text="Let's Start" type="primary" onClick={onGetResults} />
      </div>
    </div>
  );
}
