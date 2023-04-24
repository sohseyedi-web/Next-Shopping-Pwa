import Link from "next/link";
import React from "react";
import Back from "./Back";
import * as RiIcon from "react-icons/ri";

const Sidebar = ({ show, setShow, setTheme, currentTheme }) => {
  return (
    <>
      <Back open={show} setOpen={setShow} />
      <aside
        className={`${
          show ? "right-0" : "-right-20"
        } fixed top-0  bg-slate-50 dark:bg-slate-950 h-screen w-12 border-l border-solid border-gray-300 dark:border-gray-950 z-50 transition-all duration-200`}
      >
        <div className="px-5 py-7 flex items-center flex-col justify-between">
          <div className="my-12">
            <div className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
              <Link href={"/"}>
                <RiIcon.RiHome2Line size={26} />
              </Link>
            </div>
            <div className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
              <Link href={"/products"}>
                <RiIcon.RiShoppingBag2Line size={26} />
              </Link>
            </div>
            <div className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
              <Link href={"/"}>
                <RiIcon.RiHeart3Line size={26} />
              </Link>
            </div>
            <div className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
              <Link href={"/support"}>
                <RiIcon.RiCustomerService2Line size={26} />
              </Link>
            </div>
            {currentTheme === "dark" ? (
              <div
                onClick={() => setTheme("light")}
                className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 "
              >
                <RiIcon.RiSunLine size={26} />
              </div>
            ) : (
              <div
                onClick={() => setTheme("dark")}
                className="my-10 cursor-pointer transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 "
              >
                <RiIcon.RiMoonLine size={26} />
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
