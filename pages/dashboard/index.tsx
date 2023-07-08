import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { Session, getServerSession } from "next-auth";
import { GetServerSideProps } from "next";
import { authOptions } from "../api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: { session: Session } }) {
  // const session = useSession();

  // console.log('session', session)

  console.log(data, "session");

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.session ? <div>login</div> : <div>no login</div>}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session, "session");
  return {
    props: {
      data: { session },
    },
  };
};
