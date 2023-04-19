import IImfg from "@/public/images/hero.png";
import Back from "./Back";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItemTocart, removeItemcart } from "@/store/reducer";
import { toast } from "react-hot-toast";

const Cart = ({ show, setShow }) => {
  const { productItem } = useSelector((state) => state.nike);

  const totalPrice = productItem.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addItemTocart(product));
    toast.success("Added to cart");
  };
  const removeItem = (product) => {
    dispatch(removeItemcart(product));
    toast.error("Remove as cart");
  };

  return (
    <>
      <Back open={show} setOpen={setShow} />
      <aside
        className={`${
          show ? "left-0" : "-left-60"
        } fixed top-0  bg-slate-50  h-screen w-60 border-l border-solid border-gray-300 z-50 transition-all duration-200`}
      >
        <div className="flex flex-col py-1 px-3">
          <h4 className="text-xl m-0 pb-2 border-b border-b-black">
            {productItem.length
              ? `Cart Total : $ ${totalPrice}`
              : "Cart Shopping"}
          </h4>
          {productItem.length
            ? productItem.map((cart) => (
                <div className="my-2" key={cart.id}>
                  <div className="flex items-center justify-between">
                    <Image
                      src={cart.img}
                      alt={cart.name}
                      className="w-[60px] h-[60px]"
                    />
                    <div className="flex items-center gap-x-4">
                      <button onClick={() => removeItem(cart)} className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                        -
                      </button>
                      <span>{cart.quantity}</span>
                      <button onClick={() => addItem(cart)} className="w-[30px] h-[30px] rounded-full text-2xl text-blue-600 border border-blue-500">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : <div className="absolute -rotate-90 top-1/3 text-2xl text-blue-500">No Product In Cart</div>}

          {productItem.length ? (
            <button className="cursor-pointer absolute bottom-1 w-full text-center bg-blue-700 rounded -left-0 py-2 text-white">
              Payment
            </button>
          ) : null}
        </div>
      </aside>
    </>
  );
};

export default Cart;
