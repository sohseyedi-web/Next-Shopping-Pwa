import Image from "next/image";
import Product1 from "../../public/images/product1.png";
import * as RiIcon from "react-icons/ri";
import Link from "next/link";

const Products = () => {
  return (
    <section className="py-16 text-center">
      <h3 className="my-2 font-semibold text-blue-600 text-4xl">Products</h3>
      <div className="my-5 flex items-center justify-between flex-wrap">
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7">
          <div className="bg-[#eab308] h-[200px] shadow-lg">
            <Image
              src={Product1}
              alt={"shadow"}
              className="h-full object-contain px-2 rounded-md"
            />
          </div>
          <div className="py-3 px-2 text-left">
            <h3 className="my-1 font-bold text-xl">Jordan Star</h3>
            <div className="flex items-center gap-x-4 my-1">
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                41
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                42
              </span>
              <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                43
              </span>
            </div>
            <div className="flex items-center justify-between my-3">
              <h6>150 $</h6>
              <div className="flex items-center">
                <button className="mr-2">
                  <RiIcon.RiHeart3Line size={25} />
                </button>
                <Link href={"/"} className="m-0 ">
                  <RiIcon.RiEyeLine size={25} />
                </Link>
              </div>
            </div>
            <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
