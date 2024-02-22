"use client";
import Image from "next/image";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMicrophone } from "react-icons/hi2";
import Signin from "../../form/signin/Signin";
import Signup from "../../form/signup/Signup";

const TopNavigation = () => {
  const [user, setUser] = useState(false);

  const handleModalSignIn = () => {
    document.getElementById("signInModal").showModal();
    document?.getElementById("signUpModal")?.close();
  };

  const handleModalSignUp = () => {
    document.getElementById("signUpModal").showModal();
    document?.getElementById("signInModal")?.close();
  };
  return (
    <div>
      {/* if user not loggedin */}
      {!user && (
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg  text-white">
            Welcome to fauget music services
          </h1>
          <div className="flex items-center gap-6 ">
            <button
              onClick={handleModalSignIn}
              className=" text-white drop-shadow-lg px-8 py-2 text-sm rounded-xl bg-[#000000]"
            >
              Sign in{" "}
            </button>
            <button
              onClick={handleModalSignUp}
              className=" text-white drop-shadow-lg px-8 py-2 text-sm rounded-xl bg-[#69656549] "
            >
              Sign up
            </button>
          </div>
        </div>
      )}

      {/* If user loggedin */}
      {user && (
        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <h1 className="font-medium text-lg text-white">
              Welcome, name of a user
            </h1>
          </div>
          <div className="flex w-full items-center gap-4">
            <label className="relative w-full">
              <input
                type="text"
                className="input input-sm font-semibold text-white bg-[#5a5757] py-5 rounded-2xl pl-10 w-full"
                placeholder="Artist, Music, Album, Etc"
              />
              <IoSearch className="text-[#B1B1B1] text-xl absolute top-3 left-3" />
              <HiMicrophone className="text-[#B1B1B1] text-xl absolute top-3 right-3" />
            </label>
            <div className="avatar">
              <div className="rounded-full">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="dp"
                  width={35}
                  className="object-cover"
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Signin></Signin>
      <Signup></Signup>
    </div>
  );
};

export default TopNavigation;
