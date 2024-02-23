"use client";
import axios from "axios";
import { useState } from "react";

const SignupFrom = () => {
  const [error, setError] = useState("");

  // Handle SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (name === "") {
      return setError("Name is Required");
    }
    if (email === "") {
      return setError("Email is Required");
    }
    if (password === "") {
      return setError("Password is Required");
    }
    const fileInput = document.getElementById("photoInput");
    const imageFile = { image: fileInput.files[0] };
    const response = await axios.post(
      process.env.NEXT_PUBLIC_PHOTOAPI,
      imageFile,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const image = response.data?.data?.display_url;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, image }),
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
            Name
          </span>
          <input
            type="text"
            name="name"
            className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
            placeholder="Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <span className="text-left label font-light text-[#FFFFFF99]">
            Email
          </span>
          <input
            type="email"
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
            name="password"
            type="password"
            className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
            placeholder="Password"
          />
        </div>
        <div className="w-full flex flex-col pb-4">
          <span className="text-left label font-light text-[#FFFFFF99]">
            Headshot
          </span>
          <input
            type="file"
            name="photo"
            id="photoInput"
            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className=" text-white border-none drop-shadow-lg px-8 py-2 text-sm rounded-xl bg-[#000000]"
        >
          Create an account
        </button>
        <p className="text-sm text-[#FFFFFF99]">
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
