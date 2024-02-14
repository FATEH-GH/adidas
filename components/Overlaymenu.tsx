import { NavList } from "@/constants";
import { ModeToggle } from "./ModeToggle";

const Overlaymenu = () => {
  return (
    <div>
      <ul className="flex items-center justify-center flex-col gap-10">
        <li>
          <a href="#home" className=" text-gray-400">
            <p className="text-[20px]">Home</p>
          </a>
        </li>
        <li>
          <a href="#product" className=" text-gray-400">
            <p className="text-[20px]">Product</p>
          </a>
        </li>
        <li>
          <a href="#AboutUs" className=" text-gray-400">
            <p className="text-[20px]">About Us</p>
          </a>
        </li>
        <li>
          <a href="#ContactUs" className=" text-gray-400">
            <p className="text-[20px]">Contact Us</p>
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Overlaymenu;
