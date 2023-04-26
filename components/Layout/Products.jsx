import Image from "next/image";
import * as RiIcon from "react-icons/ri";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItemTocart } from "@/store/reducer";
import { toast } from "react-hot-toast";
import { checkInList } from "@/utils/CheckCart";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const { productItem } = useSelector((state) => state.nike);
  const addItem = (product) => {
    dispatch(addItemTocart(product));
    toast.success("Added to cart");
  };

  return (
    <section className="py-16 text-center">
      <h3 className="my-2 font-semibold text-blue-600 text-4xl">Products</h3>
      <div className="my-5 flex items-center justify-between flex-wrap gap-y-5">
        {product.results.map((pro) => (
          <div
            className="rounded-md shadow-md lg:w-[23%] md:w-[45%] sm:[w-90%] w-[90%] mx-auto lg:m-0 border border-gray-300 dark:border-black"
            key={pro.id}
          >
            {/* background image */}

            <div
              style={{
                background: `linear-gradient(to right , ${pro.oneColor} , ${pro.twoColor})`,
              }}
              className={`h-[200px] shadow-lg rounded-t-md`}
            >
              <Image
                src={pro.img}
                alt={pro.name}
                className="h-full object-contain px-2 rounded-md"
              />
            </div>
            {/* background image */}
            <div className="py-3 px-2 text-left">
              <Link
                href={`/product/${pro.id}`}
                className="hover:text-blue-400 transition-all duration-150 hover:duration-150"
              >
                <h3 className="my-1 font-bold text-xl">{pro.name}</h3>
              </Link>
              <div className="flex items-center gap-x-4 my-2">
                {pro.size.map((i) => (
                  <span
                    key={i}
                    className="p-1 bg-blue-500 text-white rounded-md text-sm"
                  >
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
                  <Link href={`/product/${pro.id}`} className="m-0 ">
                    <RiIcon.RiEyeLine size={25} />
                  </Link>
                </div>
              </div>
              <button
                onClick={() => addItem(pro)}
                className="w-full bg-blue-600 border-none text-white rounded-md py-2"
              >
                {checkInList(productItem, pro)
                  ? `Added In Cart`
                  : "Add To Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
