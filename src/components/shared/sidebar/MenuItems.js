import { IoMdHome } from "react-icons/io";
import { RiMusicFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { RiPlayListFill } from "react-icons/ri";
import Logout from "@/utils/logout";
import Link from "next/link";

const MenuItems = () => {
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
          <Link href={"/setting"}>
            {" "}
            <li className="flex items-center gap-3 font-medium">
              <IoIosSettings className="text-base" />
              Settings
            </li>
          </Link>

          <Logout></Logout>
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
