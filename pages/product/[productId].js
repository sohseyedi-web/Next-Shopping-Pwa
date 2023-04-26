import Container from "@/container/Container";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import * as RiIcon from "react-icons/ri";
import Link from "next/link";
import { useDispatch , useSelector} from "react-redux";
import { addItemTocart } from "@/store/reducer";
import { toast } from "react-hot-toast";
import { checkInList } from "@/utils/CheckCart";

const ProductId = ({ product }) => {
  const dispatch = useDispatch();
  const {productItem} = useSelector((state) => state.nike)
  const addItem = (product) => {
    dispatch(addItemTocart(product));
    toast.success("Added to cart");
  };

  return (
    <>
      <Head>
        <title>NikeShop / Product</title>
      </Head>
      <Container>
        <section  className="pt-24 max-w-7xl mx-auto flex flex-col gap-x-5 items-center md:px-2 sm:px-1 sm:flex-row" key={product.results.id}>
          <div
            className="flex w-[95%] mx-auto h-[250px] md:w-1/3 sm:w-[65%] sm:h-[450px] shadow-lg rounded-md"
            style={{
              background: `linear-gradient(to right , ${product.results.oneColor} , ${product.results.twoColor})`,
            }}
          >
            <div className="sm:w-[90%] w-[60%] flex items-center justify-center rotate-12  mx-auto">
              <Image
                src={product.results.img}
                className="object-contain w-full"
                alt={product.results.name}
              />
            </div>
          </div>
          <div className="w-full px-4 mt-5 sm:w-2/3 flex flex-col">
            <h4 className="text-xl  ">
              <span className="font-medium">Name</span> : {product.results.name}
            </h4>
            <div className="flex items-center gap-x-4 my-2">
              <span className="font-medium text-xl">Sizes</span>{" "}
              :
              {product.results.size.map((i) => (
                <span className="cursor-pointer p-1 bg-blue-500 text-white rounded-md text-sm">
                  {i}
                </span>
              ))}
            </div>
            <h6 className="text-xl my-2 ">
              <span className="font-medium ">Price</span> : $
              {product.results.price}
            </h6>
            <p>
              <span className="font-medium text-xl ">
                Description
              </span>{" "}
              : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus
            </p>
            <div className="flex items-center my-6">
              <button
              style={{
                background: `linear-gradient(to right , ${product.results.oneColor} , ${product.results.twoColor})`,
              }}
                onClick={() => addItem(product.results)}
                className="px-10 py-2 rounded-md  text-white border-none"
              >
                {checkInList(productItem,product.results) ? `Added In Cart` : "Add To Cart"}
              </button>
              <button className="mx-2 cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full">
                <RiIcon.RiHeart3Line size={25} />
              </button>
              <Link href={"/"} className="m-0 cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full">
                <RiIcon.RiHome2Line size={25} />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const { data } = await axios.get("http://localhost:3000/api/product");
  const paths = data.results.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { data } = await axios.get(
    `http://localhost:3000/api/product/${params.productId}`
  );

  return {
    props: {
      product: data,
    },
  };
}
