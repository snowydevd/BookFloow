/*
        TERMINAR DE ADAPTAR FIRESTORE
        https://authjs.dev/getting-started/adapters/firebase

        
*/

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { FirestoreAdapter } from "@auth/firebase-adapter";

import { signInSchema } from "@/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter(),
  providers: [
    Credentials({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        const salt = await bcrypt.genSalt(10);
        // logic to salt and hash password
        const pwHash = await bcrypt.hash(password, salt);

        // logic to verify if the user exists
        user = await getUserFromDb(email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
