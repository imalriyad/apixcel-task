"use client";
import { useSession } from "next-auth/react";
const Settingpage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-screen bg-[#302f2f] pl-4">
      <h1 className="pt-8 text-white border-b-2 inline-block">User Profile</h1>
      <div className="pt-5">
        <h1 className=" text-white">Name : {session?.user?.name}</h1>
        <h1 className=" text-white">Email : {session?.user?.email}</h1>
        
      </div>
    </div>
  );
};

export default Settingpage;
