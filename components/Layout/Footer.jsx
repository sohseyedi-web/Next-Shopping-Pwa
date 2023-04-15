import Link from "next/link";
import * as RiIcon from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="py-7 bg-gray-200 ">
      <div className="max-w-7xl mx-auto flex items-center flex-col">
        <div className="flex items-center gap-x-6">
          <Link href={"/"} className="text-xl text-blue-600 font-semibold">
            Home
          </Link>
          |
          <Link href={"/"} className="text-xl text-blue-600 font-semibold">
            Products
          </Link>
          |
          <Link href={"/"} className="text-xl text-blue-600 font-semibold">
            Support
          </Link>
        </div>
        <div className="flex items-center gap-x-3 mt-5">
          <a className="text-slate-900 text-xl" href="/">
            <RiIcon.RiTwitterLine size={26} />
          </a>
          <a className="text-slate-900 text-xl" href="/">
            <RiIcon.RiYoutubeLine size={26} />
          </a>
          <a className="text-slate-900 text-xl" href="/">
            <RiIcon.RiInstagramLine size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
