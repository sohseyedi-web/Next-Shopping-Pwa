import Link from "next/link";
import { useState } from "react";
import * as RiIcon from "react-icons/ri";
import Sidebar from "./Sidebar";
import Cart from './Cart';

function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const [color, setColor] = useState(false);

  // const changeBgcolor = () => {
  //   if (window.scrollY >= 80) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBgcolor);

  return (
    <>
      <nav className="bg-gray-50 container py-4 px-2 fixed top-0 left-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h3 className="lg:text-3xl md:text-2xl text-2xl text-blue-600 font-semibold tracking-[4px] m-0">
            NikeShop
          </h3>
          <div className="flex items-center gap-x-3">
            <div
              onClick={() => setShowCart(!showCart)}
              className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 text-blue-500 rounded-full"
            >
              <RiIcon.RiShoppingCartLine size={25} />
            </div>
            <Link
              href={"/auth"}
              className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 text-blue-500 rounded-full"
            >
              <div className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 text-blue-500 rounded-full">
                <RiIcon.RiUser6Line size={25} />
              </div>
            </Link>
            <div
              onClick={() => setShowSide(!showSide)}
              className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 text-blue-500 rounded-full"
            >
              <RiIcon.RiFingerprintFill size={25} />
            </div>
          </div>
        </div>
      </nav>
      <Sidebar show={showSide} setShow={setShowSide} />
      <Cart show={showCart} setShow={setShowCart} />
    </>
  );
}

export default Navbar;
