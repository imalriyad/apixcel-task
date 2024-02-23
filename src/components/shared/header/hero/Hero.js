/* eslint-disable react/no-unescaped-entities */
"use client";
import { GiQueenCrown } from "react-icons/gi";
import "/src/styles/fonts.css";
import { useSession } from "next-auth/react";



const Hero = () => {

   const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <div className="bg-gradient-to-r rounded p-6  from-[#007182CC] to-[#03EED2CC] space-y-2 ">
            <h1 className="text-gray-200 flex items-center gap-3 text-xl">
              <GiQueenCrown />
              <span className="md:text-base text-xs">
                {" "}
                No Ads & Unlock All Paid Songs
              </span>
            </h1>
            <h1
              style={{
                fontFamily: "NicoMoji",
              }}
              className="text-white md:text-5xl text-2xl "
            >
              Premium Membership
            </h1>
            <p className="text-gray-200 md:text-sm text-xs">
              It is a long established fact that a is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex items-center md:gap-6 gap-3 pt-4">
              <button className="btn text-white btn-sm btn-neutral md:px-6 rounded-2xl">
                Upgrade now
              </button>
              <button className="btn btn-sm text-white border-none bg-[#044C58] hover:bg-[#044C58] md:px-6 rounded-2xl">
                Learn more
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="rounded p-6 bg-gradient-to-r  from-[#007182CC]
            to-[#03EED2CC] space-y-3 "
          >
            <h1 className="text-gray-200 flex items-center gap-3 text-xl">
              <span className="md:text-base text-xs">
                Top play music station
              </span>
            </h1>
            <h1 className="text-white text-xl md:text-3xl ">
              The Dark Side of Music: Unveiling Its Negative Effects
            </h1>
            <p className="text-gray-200 md:text-sm text-xs">
              Music, often regarded as a universal language, possesses a
              profound impact on individuals and societies alike. While it has
              long been celebrated for its ability to evoke emotions, foster
              connections, and uplift spirits, the flip side of the melody
              reveals a spectrum of adverse effects that are often overlooked
            </p>
            <button className="btn btn-sm text-white border-none bg-[#09090999] hover:bg-[#09090999] md:px-6 rounded-2xl">
              For you ?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
