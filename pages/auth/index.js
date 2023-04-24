import Container from "@/container/Container";
import Head from "next/head";
import React from "react";

const Auth = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <Container>
      <section className="h-screen place-items-center grid">
        <form className="border border-slate-400 border-solid dark:border-black dark:shadow-lg w-[90%] lg:w-[30%] md:w-[75%] mx-auto rounded py-2 px-3 shadow">
          <h3 className="text-center lg:text-3xl md:text-2xl text-2xl text-blue-600 font-semibold tracking-[4px] mb-5">
            Nike Shop 
          </h3>
          <p className="text-[#252525] dark:text-gray-50 mt-3 mb-1 opacity-90">Welcome here!</p>
          <span className="text-sm font-light">
            Please enter your mobile number or email
          </span>
          <input
            type="text"
            placeholder="..."
            className="my-5 text-xl text-center rounded h-[45px] w-full border border-blue-500 outline-none border-solid focus:duration-300 focus:transition-all focus:border-gray-500"
          />
          <button className="text-xl rounded transition-all duration-300  h-[45px] w-full border text-white bg-blue-500 border-none ">
            Sign in
          </button>
        </form>
      </section>
      </Container>
    </>
  );
};

export default Auth;
