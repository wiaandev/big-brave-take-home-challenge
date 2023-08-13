import React, { useContext, useEffect, useState } from "react";
import style from "./FormWizardPage.module.scss";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { CompactPicker } from "react-color";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { useNavigate } from "react-router-dom"; // using this to navigate the user if all the fields are entered
import Loader from "../../Components/Loader/Loader";
import { FormContext } from "../../Store/Form.context";

const defaultValues = {
  gender: "",
  date: "",
  occupation: "",
  color: "#000000",
};

const errorValues = {
  genderErr: "",
  dateErr: "",
  occupationErr: "",
};

export default function FormWizardPage() {
  const { formValues, updateFormValues } = useContext(FormContext);
  console.log(formValues);
  const occupations = [
    "--Select Please",
    "Chef",
    "Yoga Instructor",
    "Developer",
    "Social Media Influencer",
  ];

  const navigate = useNavigate();

  const [values, setValues] = useState(defaultValues);
  const [errVals, setErrVals] = useState(errorValues);
  const { date, occupation, color } = values;

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

  const year = +values.date.split("-")[0];

  const currentYear = new Date().getFullYear();
  console.log(+currentYear - +year);
  console.log(year);

  const onGetResults = () => {
    console.log("Hell yeah brother");
    console.log(values);
    if (values.gender === "" || currentYear - year < 18) {
      const dateError = validate(values.date, "You need to be 18 buckeroo");
      const genderError = validate(values.gender, "pick a sex");

      setErrVals({
        ...errVals,
        dateError,
        genderError,
      });
    } else {
      updateFormValues(values);
      navigate("/character");
    }
  };

  const [loader, setLoader] = useState(false);

  const onHideLoaderAfterDelay = () => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  };

  useEffect(() => {
    onHideLoaderAfterDelay();
  }, []);

  return (
    <>
      {loader ? (
        <div className={style.container}>
          <div className={style.left}>
            <AnimatedBackground />
          </div>
          <div className={style.right}>
            <h1>As simple as console.log()</h1>
            <p>Fill out this form to see the character you are longing to be</p>
            <br />

            <form className={style.form}>
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
              {/* <p className={style.error}>{errVals.dateError}</p> */}
              {currentYear - year < 18 ? (
                <p className={style.error}>{"You need to be 18"}</p>
              ) : (
                ""
              )}
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
            <Button text="Let's Start" type="primary" onClick={onGetResults} />
          </div>
        </div>
      ) : (
        <Loader loaderText="Something cool is coming" />
      )}
    </>
  );
}
