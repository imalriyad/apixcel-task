import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMusicFill } from "react-icons/ri";

const Signin = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  // handle login
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password === "") {
      return setError("Password is Required");
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    document?.getElementById("signInModal")?.close();
    if (res?.error) {
      setError("Invalid Email and Password");
    }
  };

  const handleModalSignUp = () => {
    document.getElementById("signUpModal").showModal();
    document?.getElementById("signInModal")?.close();
  };
  return (
    <div>
      <dialog id="signInModal" className="modal">
        <div className="modal-box bg-[#3B3B3B] pb-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle bg-gray-400 hover:bg-gray-400 border-none absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSignIn}>
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
              Sign in
            </h1>

            {/* Input feild starts here */}
            <div className="max-w-xs space-y-4 mx-auto">
              <div className="w-full flex flex-col gap-1">
                <span className="text-left label font-light text-[#FFFFFF99]">
                  Email
                </span>
                <input
                  name="email"
                  type="text"
                  className="input input-sm rounded-md text-white bg-[#000000] py-5 focus:outline-none pl-3 w-full "
                  placeholder="example@mail.com"
                />
              </div>
              <div className="w-full flex flex-col gap-1 pb-4">
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
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                className=" text-white border-none drop-shadow-lg px-8 py-2 text-sm rounded-xl bg-[#000000]"
              >
                Sign in
              </button>
              <p className="text-[13px] text-[#FFFFFF99]">
                Don’t have account? Create an account?
                <span
                  onClick={handleModalSignUp}
                  className="text-[#000000] cursor-pointer pl-1 font-bold underline"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Signin;
