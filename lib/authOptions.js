import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import bcrypt from "bcrypt";
import { FirestoreAdapter } from "@auth/firebase-adapter";

import { signInSchema } from "@/lib/zod";
import { cert } from "firebase-admin/app";

export const authOptions = {
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   authorization: {
      //     params: {
      //       prompt: "consent",
      //       access_type: "offline",
      //       response_type: "code",
      //     },
      //   },
    }),
    // Credentials({
    //   credentials: {
    //     username: {},
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     let user = null;

    //     const { email, password } = await signInSchema.parseAsync(credentials);

    //     const salt = await bcrypt.genSalt(10);
    //     // logic to salt and hash password
    //     const pwHash = await bcrypt.hash(password, salt);

    //     // logic to verify if the user exists
    //     user = await getUserFromDb(email, pwHash);

    //     if (!user) {
    //       // No user found, so this is their first attempt to login
    //       // meaning this is also the place you could do registration
    //       throw new Error("User not found.");
    //     }

    //     // return user object with their profile data
    //     return user;
    //   },
    // }),
  ],
};
