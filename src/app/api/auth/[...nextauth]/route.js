import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {

        // connecting to db
        await connect();
        try {

          // finding the spacific user from db
          const user = await User.findOne({ email: credentials.email });

          // cheaking password validation
          if (user) {
            const isPasswordOk = await bcrypt.compare(
              credentials.password,
              user.password
            );

            // sending response if password is correct
            if (isPasswordOk) {
              return {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                image: user.image,
              };
            }
          }
        } catch (error) {
          throw new Error(error);
        }
        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
