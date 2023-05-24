import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/common/button";
import PageHead from "~/components/page-head";
import SignUpFooter from "~/components/sign-up-footer";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <PageHead />
      <main className="flex min-h-screen flex-col font-sans text-white">
        <div className="min-w-screen flex flex-grow flex-row">
          <div className="w-[332px]">
            <p>H</p>
          </div>
          <div className="container flex flex-grow flex-col items-center justify-center gap-12 bg-slate-900 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
            </h1>
          </div>
        </div>

        <SignUpFooter />
      </main>
    </>
  );
};

export default Home;
