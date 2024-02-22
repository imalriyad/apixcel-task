"use client";
import { useState } from "react";

const SignupFrom = () => {
  const [error, setError] = useState("");

  // Handle SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwordOne = e.target.passwordOne.value;
    const passwordTwo = e.target.passwordTwo.value;

    if (passwordOne !== passwordTwo) {
      return setError("Password Doesnt macth");
    }
    if (passwordOne === "" || passwordTwo === "") {
      return setError("Password is Required");
    }
    const password = passwordOne;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 400) {
      setError("Email is already in use");
    }
    if (res.status === 200) {
      setError("");
      document?.getElementById("signUpModal")?.close();
    }
  };

  // Openmodal
  const handleModalSignIn = () => {
    document.getElementById("signInModal").showModal();
    document?.getElementById("signUpModal")?.close();
  };
  return (
    <>
      <form onSubmit={handleSignUp} className="max-w-xs space-y-2 mx-auto">
        <div className="w-full flex flex-col">
          <span className="text-left label font-light text-[#FFFFFF99]">
            Email
          </span>
          <input
            type="text"
            name="email"
            className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
            placeholder="example@mail.com"
          />
        </div>
        <div className="w-full flex flex-col">
          <span className="text-left label font-light text-[#FFFFFF99]">
            Password
          </span>
          <input
            name="passwordOne"
            type="password"
            className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
            placeholder="Password"
          />
        </div>
        <div className="w-full flex flex-col pb-4">
          <span className="text-left label font-light text-[#FFFFFF99]">
            Password
          </span>
          <input
            name="passwordTwo"
            type="password"
            className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
            placeholder="Password"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className=" text-white border-none drop-shadow-lg px-8 py-2 text-sm rounded-xl bg-[#000000]"
        >
          Create an account
        </button>
        <p className="text-[13px] text-[#FFFFFF99]">
          Have account?
          <span
            onClick={handleModalSignIn}
            className="text-[#000000] cursor-pointer pl-1 font-bold underline"
          >
            Sign in
          </span>
        </p>
      </form>
    </>
  );
};

export default SignupFrom;
