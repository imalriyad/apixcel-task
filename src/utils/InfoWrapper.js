"use client";
import TopNavigation from "@/components/shared/header/TopNavigation";
import SideBar from "@/components/shared/sidebar/SideBar";
import { useState } from "react";

const InfoWrapper = ({ children }) => {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div className="flex justify-between ">
        <SideBar isShow={isShow}></SideBar>
        <div
          className=" w-full h-auto px-4 heroDiv"
          style={{ backgroundColor: "#302f2f" }}
        >
          <TopNavigation setShow={setShow} isShow={isShow}></TopNavigation>
          {children}
        </div>
      </div>
    </>
  );
};

export default InfoWrapper;
