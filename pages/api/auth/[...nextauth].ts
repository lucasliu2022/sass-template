import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/utils/prisma";
import { Adapter } from "next-auth/adapters";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID as string,
    //   clientSecret: process.env.AUTH0_SECRET as string,
    //   issuer: process.env.AUTH0_ISSUER as string,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    //   version: "2.0",
    // }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    // async jwt({ token, profile, account }) {
      
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   return {
    //     ...session,
    //     token: token,
    //     user: user,
    //   };
    // },
  },
};

export default NextAuth(authOptions);
