"use client";
import { signOut, useSession } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";
const Logout = () => {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {session && (
        <li
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-3 font-medium"
        >
          <IoLogOutOutline className="text-base" />
          Logout
        </li>
      )}
    </>
  );
};

export default Logout;
