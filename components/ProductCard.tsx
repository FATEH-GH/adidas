import { ProductCardProps } from "@/Types";
import Image from "next/image";

const Product = ({ image, price, name }: ProductCardProps) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="bg-card bg-center bg-cover flex items-center justify-center  rounded-xl">
        <Image
          src={image}
          height={200}
          width={200}
          alt="shoe"
          className=" hover:scale-110 duration-150"
        />
      </div>
      <div className="flex  gap-2">
        <Image src="/star.svg" height={25} width={25} alt="star" />
        <p className="text-gray-500 text-[18px] ">(4.5)</p>
      </div>
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-red-400 text-[22px] font-semibold">${price}</p>
    </div>
  );
};

export default Product;
