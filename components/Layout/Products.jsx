import Image from "next/image";
import * as RiIcon from "react-icons/ri";
import Link from "next/link";

const Products = ({ product }) => {
  return (
    <section className="py-16 text-center">
      <h3 className="my-2 font-semibold text-blue-600 text-4xl">Products</h3>
      <div className="my-5 flex items-center justify-between flex-wrap">
        {product.results.map((pro) => (
          <div
            className="rounded-md shadow-md w-[23%] border border-gray-300 mb-7"
            key={pro.id}
          >
            {/* background image */}

            <div
              style={{
                background: `linear-gradient(to right , ${pro.oneColor} , ${pro.twoColor})`,
              }}
              // className={`h-[200px] shadow-lg bg-gradient-to-r from-[${pro.oneColor}] to-[${pro.twoColor}]`}
              className={`h-[200px] shadow-lg`}
            >
              <Image
                src={pro.img}
                alt={pro.name}
                className="h-full object-contain px-2 rounded-md"
              />
            </div>
            {/* background image */}
            <div className="py-3 px-2 text-left">
              <h3 className="my-1 font-bold text-xl">{pro.name}</h3>
              <div className="flex items-center gap-x-4 my-2">
                {pro.size.map((i) => (
                  <span className="p-1 bg-blue-500 text-white rounded-md text-sm">
                    {i}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between my-3">
                <h6>$ {pro.price}</h6>
                <div className="flex items-center">
                  <button className="mr-2">
                    <RiIcon.RiHeart3Line size={25} />
                  </button>
                  <Link href={`/${pro.id}`} className="m-0 ">
                    <RiIcon.RiEyeLine size={25} />
                  </Link>
                </div>
              </div>
              <button className="w-full bg-blue-600 border-none text-white rounded-md py-2">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
