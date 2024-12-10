"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchInput from "../search/search-Input";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { GiHamburgerMenu } from "react-icons/gi";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiBagThin } from "react-icons/pi";





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
    "HOME",
    "BLOG",
    "OUR_CONTACTS",
    "DELIEVERY_&_RETURN",
    "CONTACT_US"
];

export default function Navbar() {
    const pathName = usePathname();
    
    return (
        <div >
            {/* top nav */}
            <div className="flex justify-end border-b-2 h-10 items-center">
            <div className="border-l-2 p-4 text-xs">LOGIN/REGISTER</div>
            </div>
            {/* middle nav */}
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    <a href="/"><img className="w-40 mr-10 ml-5 pt-2 pb-2"  src="/logo.webp" alt="logo" /></a>
                    <div className="flex gap-5 items-center text-sm">
                    {menuItems.map((item,index)=>(
                        
                        <Link  href={`/${item}`} className={pathName===`/${item}`? "relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:w-full after:bg-red-700":"relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:w-0 after:bg-red-700 after:transition-all after:duration-200 hover:after:w-full"} key={index}>{item}</Link>
                    ))}
                </div>
                </div>
                
                <div className="flex flex-row gap-1">
                    <div className="hover:text-blue-600 hover:scale-110 transition duration-00"><CiFacebook size={34} /></div>
                    <div className="hover:text-pink-600 hover:scale-110 transition duration-300"><CiInstagram size={35}/></div>
                </div>
            </div>
            {/* bottom nav */}
            <div className="flex flex-row justify-between h-14 items-center">
                <div>
                <NavigationMenu >
                    <NavigationMenuList >
                        <NavigationMenuItem>
                        <NavigationMenuTrigger className="gap-3 bg-pink-600 group-hover:bg-pink-600 group-hover:text-white h-14 text-white rounded-none" ><GiHamburgerMenu size={25}/> Browse Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="w-[215px]">
                            {categories.map((category, index) => (
                            <li className='p-3 border-b ' key={index}>
                                <NavigationMenuLink asChild >
                                <Link href={`/${category}`}>
                                    {category}
                                </Link>
                                </NavigationMenuLink>
                            </li>
                            ))}
                        </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div><SearchInput width={700} height={55} placeholder="Search For Products..."/></div>
                <div  className="flex flex-row gap-2">
                    <div className="flex flex-row gap-1">
                        <div><PiPhoneCallLight size={40} /></div>
                        <div className="text-xs items-center">
                            <div className="font-bold text-pink-600">24/7 Support</div>
                            <div>01736275037</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                    <div><PiBagThin size={40} /></div>
                    <div className="text-xs items-center ">
                            <div className="font-bold text-pink-600">৳</div>
                            <div>items:</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}