"use client"
import { IoMdHome } from "react-icons/io";
import { RiMusicFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

const MenuItems = () => {
  const {data:session} = useSession()
  console.log("seasion data",session);
  return (
    <div className="flex flex-col gap-20 justify-start h-screen">
      <div>
        {/* Section title - menu*/}
        <span className="flex items-center gap-4 pb-6">
          <h1 className=" text-white text-sm font-bold"> Menu </h1>
          <div className="border-[1px] w-full border-[#d8d6d69c]"></div>
        </span>
        <ul className="text-white flex text-sm flex-col gap-4">
          <li className="flex items-center gap-3 font-medium">
            <IoMdHome className="text-base" />
            Home
          </li>
          <li className="flex items-center gap-3 font-medium">
            <RiMusicFill className="text-base" />
            Podcast
          </li>
          <li className="flex items-center gap-3 font-medium">
            <IoIosSettings className="text-base" />
            Settings
          </li>
          {session && (
            <li className="flex items-center gap-3 font-medium">
              <IoLogOutOutline className="text-base" />
              Logout
            </li>
          )}
        </ul>
      </div>

      {/* playlist */}
      <div>
        {/* Section title - Playlist */}
        <span className="flex items-center gap-4 pb-6">
          <h1 className=" text-white text-sm font-bold"> My Playlist </h1>
          <div className="border-[1px] w-[25%] border-[#d8d6d69c]"></div>
        </span>
        <ul className="text-white flex text-sm flex-col gap-4">
          <li className="flex items-center gap-3 font-medium">
            <RiPlayListFill className="text-base" />
            Playlist #A
          </li>
          <li className="flex items-center gap-3 font-medium">
            <RiPlayListFill className="text-base" />
            Playlist #B
          </li>
          <li className="flex items-center gap-3 font-medium">
            <RiPlayListFill className="text-base" />
            Playlist #C
          </li>
          <li className="flex items-center gap-3 font-medium">
            <RiPlayListFill className="text-base" />
            Add New +
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
