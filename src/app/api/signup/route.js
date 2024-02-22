import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { email, password } = await request.json();
  await connect();
  const isExist = await User.findOne({ email });
  if (isExist) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword, 
  });
  try {
    await newUser.save();
    return new NextResponse("User Registration Succesfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Error While Registration", { status: 500 });
  }
};
