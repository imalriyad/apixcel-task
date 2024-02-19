import MenuItems from "./sidebar/MenuItems";
import "/src/styles/fonts.css";
import { RiMusicFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="h-screen fixed bg-[#3B3B3B] w-[160px] px-4">
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
