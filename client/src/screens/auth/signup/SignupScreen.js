// reference (react, form, ...register, etc)
// https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-form-%EC%89%BD%EA%B2%8C-%EB%8B%A4%EB%A3%A8%EA%B8%B0-b3b192cf2b33

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ApiConnector from "../../../api/apiConnector";
import ApiEndpoints from "../../../api/apiEndpoints";
import AppPaths from "../../../lib/appPaths";
import "../authStyle.css";

const SignupScreen = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password");
  const image = watch("image");

  const onSubmit = async (signupData) => {  // signupData: {first_name: "peter", ...}
    const formData = new FormData();
    formData.append("image", signupData.image[0]);
    delete signupData["image"];
    // console.log("signupData: ", signupData)
    Object.keys(signupData).forEach((key) => {
      formData.append(key, signupData[key]);
    });
    const successSignupData = await ApiConnector.sendPostRequest(
      ApiEndpoints.SIGN_UP_URL, // 'api/v1/signup'
      formData,
      false,
      true
    );
    if (successSignupData) {  // if success for sign up, then 'true', else 'false'
      history.push({
        pathname: AppPaths.LOGIN, // '/login': go back to the login page
        state: { redirectFrom: AppPaths.SIGN_UP }, // '/signup'
      });
    } else { // if fails to sign up
      alert('fail to sign up')
    }
  };

  return (
    <div id="authFormContainer">
      <div id="authForm">
        <h2 id="authTitle">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="authFieldContainer">
            <input
              className="authField"
              type="text"
              placeholder="First Name"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && (
              <p className="requiredFieldError">This field is required</p>
            )}
            {/* {(console.log(errors))} */}
          </div>
          <div className="authFieldContainer">
            <input
              className="authField"
              type="text"
              placeholder="Last Name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>
          <div className="authFieldContainer">
            <input
              className="authField"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>
          <div className="custom-file">
            <input
              type="file"
              name="image"
              id="validatedCustomFile"
              {...register("image", {
                required: true,
              })}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              {image ? image[0]?.name : "Choose Image..."}
            </label>
            {errors.image && (
              <p className="requiredFieldError mt-2">This field is required</p>
            )}
          </div>
          <div className="authFieldContainer">
            <input
              className="authField"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="requiredFieldError">This field is required</p>
            )}
          </div>
          <div className="authFieldContainer">
            <input
              className="authField"
              type="password"
              name="passwordTwo"
              placeholder="Confirm Password"
              {...register("passwordTwo", {
                required: "This field is required",
                validate: (value) =>
                  value === password.current || "The passwords doesn't match",
              })}
            />
            {errors.passwordTwo && (
              <p className="requiredFieldError">
                {errors.passwordTwo?.message}
              </p>
            )}
          </div>
          <br />
          <button className="btn btn-outline-warning btn-block" type="submit">
            Sign Up
          </button>
        </form>
        <p id="authFormFooter">
          Already have an account? <Link to="/login">Click here</Link> to login.
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
