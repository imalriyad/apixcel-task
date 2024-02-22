import { RiMusicFill } from "react-icons/ri";
import SignupFrom from "./SignupFrom";

const Signup = () => {
  return (
    <div>
      <dialog id="signUpModal" className="modal">
        <div className="modal-box bg-[#3B3B3B]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle bg-gray-400 hover:bg-gray-400 border-none absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h1
              className="text-white justify-center text-3xl flex items-center"
              style={{
                fontFamily: "NicoMoji",
              }}
            >
              <RiMusicFill className="text-xl" />
              Fauget
            </h1>
            <h1 className="text-2xl text-center text-white py-8 font-semibold">
              {" "}
              Sign up
            </h1>

            {/* Input feild starts here */}
            <SignupFrom></SignupFrom>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
