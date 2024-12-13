import { CiShoppingCart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { SheetCart } from "../cart/cart-pop";

export function PullUpWhite() {
  return (
    <div className="absolute bottom-0 left-0 right-0  bg-white opacity-0 group-hover:opacity-100 hover:bg-white group-hover:translate-y-[-10px] transition-all ease-in duration-300">
      <div className="flex justify-center gap-2 items-center ">
        {/* Example logos */}
        <div className="hover:text-slate-500">
          <SheetCart triggerContent={<CiShoppingCart size={30} />} />
        </div>
        <div>
          <SlMagnifier size={20} />
        </div>
      </div>
    </div>
  );
}

export function PullUpPink() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-opacity-50  bg-pink-500 opacity-0 group-hover:opacity-100 hover:bg-pink-500 group-hover:translate-y-[-10px] transition-all duration-300">
      <div className="flex justify-center gap-2 items-center ">
        {/* Example logos */}
        <CiShoppingCart size={40} />
        <SlMagnifier size={30} />
      </div>
    </div>
  );
}
