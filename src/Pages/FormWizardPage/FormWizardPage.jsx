import React, { useState } from "react";
import style from "./FormWizardPage.module.scss";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { CompactPicker } from "react-color";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { useNavigate } from "react-router-dom"; // using this to navigate the user if all the fields are entered

const defaultValues = {
  firstName: "",
  lastName: "",
  gender: "",
  date: "",
  occupation: "",
  color: "#000000",
};

const errorValues = {
  firstNameErr: "",
  lastNameErr: "",
  genderErr: "",
  dateErr: "",
  occupationErr: "",
};

export default function FormWizardPage() {
  const occupations = [
    "Chef",
    "Yoga Instructor",
    "Developer",
    "Social Media Beinvloeder",
  ];

  const navigate = useNavigate();

  const [values, setValues] = useState(defaultValues);
  const [errVals, setErrVals] = useState(errorValues);
  const { firstNameErr, lastNameErr, genderErr, dateErr, occupationErr } =
    errVals;
  const { firstName, lastName, gender, date, occupation, color } = values;

  const onChangeColor = (newColor) => {
    setValues({ ...values, color: newColor.hex });
    console.log(color);
  };

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    console.log(name, " :", value);
  };

  const validate = (value, errorMessage) => {
    if (value === "") {
      return errorMessage;
    }
    return "";
  };

  const onGetResults = () => {
    console.log("Hell yeah brother");
    console.log(values);

    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.gender === "" ||
      values.date === ""
    ) {
      const nameError = validate(values.firstName, "Enter your first name");
      const surnameError = validate(values.lastName, "Enter surname");
      const dateError = validate(values.date, "Date cannot be empty");
      const genderError = validate(values.gender, "pick a sex");

      setErrVals({
        ...errVals,
        nameError,
        surnameError,
        dateError,
        genderError,
      });
    } else {
      navigate("/character");
    }
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
          <div className={style.flex}>
            <Input
              name="gender"
              value="male"
              inputType="radio"
              onChange={changeValues}
            />
            <p>Male</p>
          </div>
          <div className={style.flex}>
            <Input
              name="gender"
              value="female"
              inputType="radio"
              onChange={changeValues}
            />
            <p>Female</p>
            <p>{errVals.firstNameErr}</p>
          </div>
          <p className={style.error}>{errVals.genderError}</p>
          <Input
            name="date"
            value={date}
            text="hello"
            type="primary"
            inputType="date"
            onChange={changeValues}
          />
          <p className={style.error}>{errVals.dateError}</p>
          <select
            className={style.dropdown}
            name="occupation"
            value={occupation}
            onChange={changeValues}
          >
            {occupations.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>

          <CompactPicker color={color} onChange={onChangeColor} />
        </form>

        {/* <Link to={"/character"}> */}
        <Button text="Let's Start" type="primary" onClick={onGetResults} />
        {/* </Link> */}
      </div>
    </div>
  );
}
