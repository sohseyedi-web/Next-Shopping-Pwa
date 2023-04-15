import IImfg from "@/public/images/hero.png";
import Back from "./Back";
import Image from "next/image";

const Cart = ({ show, setShow }) => {
  return (
    <>
      <Back open={show} setOpen={setShow} />
      <aside
        className={`${
          show ? "left-0" : "-left-60"
        } fixed top-0  bg-slate-50  h-screen w-60 border-l border-solid border-gray-300 z-50 transition-all duration-200`}
      >
        <div className="flex flex-col py-1 px-3">
          <h6 className="text-xl m-0 pb-2 border-b border-b-black">
            Total Cart : 100$
          </h6>
          <div className="my-2">
            <div className="flex items-center justify-between">
              <Image src={IImfg} alt="s" className="w-[60px] h-[60px]" />
              <div className="flex items-center gap-x-4">
                <button className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                  -
                </button>
                <span>0</span>
                <button className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex items-center justify-between">
              <Image src={IImfg} alt="s" className="w-[65px] h-[65px]" />
              <div className="flex items-center gap-x-4">
                <button className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                  -
                </button>
                <span>0</span>
                <button className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="cursor-pointer absolute bottom-1 w-full text-center bg-blue-700 rounded -left-0 py-2 text-white">
            Payment
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
