"use client";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { HiMicrophone } from "react-icons/hi2";
import Signin from "../../form/signin/Signin";
import Signup from "../../form/signup/Signup";
import { useSession } from "next-auth/react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const TopNavigation = ({ setShow, isShow }) => {
  const { data: session } = useSession();
  const handleModalSignIn = () => {
    document.getElementById("signInModal").showModal();
    document?.getElementById("signUpModal")?.close();
  };

  const handleModalSignUp = () => {
    document.getElementById("signUpModal").showModal();
    document?.getElementById("signInModal")?.close();
  };

  return (
    <div className="md:p-4 py-4">
      {/* if user not loggedin */}
      {!session && (
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
          <h1 className="font-medium flex text-lg text-white">
            <span
              className="pr-2 md:hidden block "
              onClick={() => setShow(true)}
            >
              <button className="btn btn-sm glass text-white">
                <IoMdMenu />
              </button>
            </span>{" "}
            Welcome to fauget music
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
      {session && (
        <div className="flex md:flex-row  flex-col items-center justify-between gap-2">
          <div className="w-full relative">
            <h1 className="font-medium flex text-lg text-white">
              <span
                className="pr-2 md:hidden block "
                onClick={() => setShow(true)}
              >
                <button className="btn btn-sm glass text-white">
                  <IoMdMenu />
                </button>
              </span>{" "}
              Welcome, {session?.user.name}
            </h1>
            <span
              className={`absolute right-0 top-0 ${
                isShow ? "block" : " hidden"
              }`}
              onClick={() => setShow(false)}
            >
              <button className="btn btn-sm glass md:hidden block text-white">
                <RxCross2 />
              </button>
            </span>{" "}
          </div>

          <div className="flex w-full items-center gap-4">
            <label className="relative w-full">
              <input
                type="text"
                className="input input-sm font-semibold text-white bg-[#5a5757] py-5 rounded-2xl pl-10 w-full"
                placeholder="Artist, Music, Album"
              />
              <IoSearch className="text-[#B1B1B1] text-xl absolute top-3 left-3" />
              <HiMicrophone className="text-[#B1B1B1] text-xl absolute top-3 right-3" />
            </label>
            <div className="avatar">
              <div className="rounded-full">
                <Image
                  src={session?.user?.image}
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
