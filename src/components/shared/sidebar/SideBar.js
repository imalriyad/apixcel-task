import MenuItems from "./MenuItems";
import "/src/styles/fonts.css";
import { RiMusicFill } from "react-icons/ri";

const SideBar = ({ isShow }) => {

  return (
    <div
      className={`h-screen  md:block z-10 drop-shadow-lg fixed bg-[#3B3B3B] w-[160px] px-4 ${
        isShow ? "opacity-100 block" : "opacity-0 md:opacity-100  hidden"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div>
        {/* name/logo */}
        <div className="py-8">
          <h1
            className="text-white text-xl flex items-center"
            style={{
              fontFamily: "NicoMoji",
            }}
          >
            <RiMusicFill className="text-base" />
            Fauget
          </h1>
        </div>
        {/* menu */}
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

export default SideBar;
