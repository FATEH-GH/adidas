import { ProductCardProps } from "@/Types";
import Image from "next/image";
import { Button } from "./ui/button";

const Product = ({ image, price, name }: ProductCardProps) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      {/* <div className="bg-card bg-center bg-cover flex items-center justify-center  rounded-xl">
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
      <p className="text-red-400 text-[22px] font-semibold">${price}</p> */}
      <div className="flex flex-col border-2 rounded-md p-4">
        <figure className="flex items-center justify-center">
          <Image src={image} alt="shoeImage" height={300} width={300} />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-start gap-2 my-2">
            <Image src="/star.svg" height={25} width={25} alt="star" />
            <p className="text-gray-500 text-[18px] ">(4.5)</p>
          </div>

          <h5 className="font-semibold md:text-xl mb-2 text-[20px]">{name}</h5>
          <p className="mb-4 text-red-400 text-[22px] font-semibold">
            ${price}
          </p>
          <div className="card-actions">
            <Button className=" bg-orange-500 hover:bg-orange-400">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

{
  /* <div class="card sm:max-w-sm">
  <figure>
    <img
      src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
      alt="Watch"
    />
  </figure>
  <div class="card-body">
    <h5 class="card-title mb-2.5">Apple Smart Watch</h5>
    <p class="mb-4">
      Stay connected, motivated, and healthy with the latest Apple Watch.
    </p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>; */
}
