"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchInput from "../search/search-Input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiBagThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SheetCart } from "../cart/cart-pop";
import { SheetLogin } from "../login/login-pop";

const categories = [
  "Lips",
  "Face",
  "Eyes",
  "Skin Care",
  "Tool",
  "Makeup Set",
  "Mini",
];

const menuItems = [
  "Home",
  "Blog",
  "OUR_CONTACTS",
  "DELIEVERY_&_RETURN",
  "CONTACT_US",
  "Product",
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header>
      {/* top nav */}
      <section className="flex justify-end border-b-2 h-10 items-center">
        {/* remove later */}
        {/* github and vercel links */}
        <div className="flex flex-rox gap-2">
          <div className="text-slate-600 hover:text-black hover:scale-105 transition duration-300">
            <Link
              href="https://github.com/Rafidur/lavishta-clone"
              target="_blank"
              aria-label="Github Repository link"
            >
              <FaGithub size={24} />
            </Link>
          </div>
          <div className="text-slate-600 hover:text-black hover:scale-105 transition duration-300">
            <Link
              href="https://lavishta-clone.vercel.app/"
              target="_blank"
              aria-label="Vercel Deployment link"
            >
              <IoLogoVercel size={24} />
            </Link>
          </div>
        </div>
        <button
          className="border-l-2 p-4 text-xs hover:cursor-pointer hover:text-slate-500"
          aria-label="Login/Register"
        >
          <SheetLogin
            triggerContent={<span className="">LOGIN/REGISTER</span>}
          />
        </button>
      </section>
      {/* middle nav */}
      <nav
        className="flex flex-row justify-between items-center"
        aria-label="Main Navigation"
      >
        <div className="flex flex-row">
          <Link href="/">
            <img
              className="w-40 mr-10 ml-5 pt-2 pb-2"
              src="/logo.webp"
              alt="Lavishta logo"
            />
          </Link>
          <ul className="flex gap-5 items-center text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item}`}
                  className={
                    pathName === `/${item}`
                      ? "relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:w-full after:bg-pink-500"
                      : "relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:w-0 after:bg-red-700 after:transition-all after:duration-200 hover:after:w-full"
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row gap-1">
          <div
            className=" text-slate-500 hover:text-blue-600 hover:scale-110 transition duration-300 "
            aria-label="Link to Facebook"
          >
            <CiFacebook size={34} />
          </div>
          <div
            className="text-slate-500 hover:text-pink-600 hover:scale-110 transition duration-300"
            aria-label="Link to Instagram"
          >
            <CiInstagram size={35} />
          </div>
        </div>
      </nav>
      {/* bottom nav */}
      <section
        className="flex flex-row justify-between h-14 items-center"
        aria-label="Bottom Navigation"
      >
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-3 bg-pink-600 group-hover:bg-pink-600 group-hover:text-white h-14 text-white rounded-none">
                  <GiHamburgerMenu size={25} /> Browse Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[215px]" role="menu">
                    {categories.map((category, index) => (
                      <li className="p-3 border-b " key={index} role="menuitem">
                        <NavigationMenuLink asChild>
                          <Link href={`/${category}`}>{category}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <SearchInput
            width={700}
            height={55}
            placeholder="Search For Products..."
          />
        </div>
        <div className="flex flex-row gap-2 text-slate-500">
          <div className="flex flex-row gap-1 ">
            <div aria-label="24/7 Support Phone Number">
              <PiPhoneCallLight size={38} />
            </div>
            <address className="text-xs items-center not-italic">
              <div className="font-bold text-pink-600">24/7 Support</div>
              <div>01736275037</div>
            </address>
          </div>
          <div className="flex flex-row gap-1 " aria-label="Cart">
            <div className="hover:text-black">
              <SheetCart triggerContent={<PiBagThin size={40} />} />
            </div>
            <div className="text-xs items-center border-l-2 pl-2 ">
              <div className="font-bold text-pink-600">৳</div>
              <div>items:</div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
