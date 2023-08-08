import React, { useState } from "react";
import style from "./FormWizardPage.module.scss";
import img from "../../Assets/background.jpg";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

import { useForm } from "react-hook-form";
import Input from "../../Components/Input/Input";
import { BlockPicker, CirclePicker, SketchPicker } from "react-color";

export default function FormWizardPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
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
      <img src={img} width={200} className={style.left} />
      <div className={style.right}>
        <h1>As simple as console.log()</h1>
        <p>Fill out this form to see the character you are longing to be</p>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <Input  {...register("firstName", {required: true})} placeholder="First Name" type="primary"/> */}
          {/* {errors.firstName && <span className={style.error}>You need a first name!</span>} */}

          {/* include validation with required or other standard HTML validation rules */}
          {/* <Input {...register("lastName", { required: true })} placeholder="Last Name" type="primary"/> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.lastName && <span className={style.error}>This field is required</span>} */}

          <div
            style={{
              display: "flex",
              width: "100%",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "50%",
              }}
            >
              <Input
                inputType="text"
                type="primary"
                placeholder="First name"
                {...register("firstName", { required: true, maxLength: 80 })}
              />
              {errors.firstName && (
                <span className={style.error}>You need a first name!</span>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "50%",
              }}
            >
              <Input
                inputType="text"
                type="primary"
                placeholder="Last name"
                {...register("lastName", { required: true, maxLength: 100 })}
              />
              {errors.lastName && (
                <span className={style.error}>Enter your last name</span>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Input
                {...register("Gender")}
                inputType="radio"
                value="Male"
                type="primary"
              />
              <p>Male</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Input
                {...register("Gender")}
                inputType="radio"
                value="Female"
                type="primary"
              />
              <p>Female</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Input
                {...register("Gender")}
                inputType="radio"
                value="Other"
                type="radio"
              />
              <p>Other</p>
            </div>
          </div>

          <Input
            type="primary"
            inputType="date"
            placeholder="Date of Birth"
            {...register("Date of Birth", {})}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <select
              {...register("Occupation", { required: true })}
              className={style.dropdown}
            >
              <option value="">--Select Occupation--</option>
              <option value="Chef">Chef</option>
              <option value=" Yoga Instructor"> Yoga Instructor</option>
              <option value=" Developer"> Developer</option>
              <option value=" Social Media Influender">
                Social Media Influender
              </option>
            </select>
            {errors.Occupation && (
              <span className={style.error}>Don't you have a job?</span>
            )}
          </div>

          <CirclePicker color={color} onChange={onChangeColor} {...register("Color", {})} />

          <input type="submit" />
        </form>

        <Link to={"/character"}>
          <Button text="Let's Start" type="primary" onClick={onGetResults()} />
        </Link>
      </div>
    </div>
  );
}
