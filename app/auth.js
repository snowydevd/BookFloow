// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { FirestoreAdapter } from "@auth/firebase-adapter";
// import { cert } from "firebase-admin/app";

// // import Credentials from "next-auth/providers/credentials";
// // import bcrypt from "bcrypt";
// // import { signInSchema } from "@/lib/zod";
// const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: FirestoreAdapter({
//     credential: cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//     }),
//   }),

//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });

// export { handlers, auth, signIn, signOut };
