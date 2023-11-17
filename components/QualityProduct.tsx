import Image from "next/image";
import Button from "./Button";

const QualityProduct = () => {
  return (
    <section
      id="AboutUs"
      className="flex justify-between max-md:items-center max-lg:flex-col gap-10 mx-10 lg:ml-8"
    >
      <div className="flex flex-col gap-4 max-w-lg xl:max-w-xl">
        <h3 className="text-[50px] max-sm:text-[40px] font-bold mb-4">
          We Provide You{" "}
          <span className="text-orange-500">
            {" "}
            <br className="md:hidden " />
            Super Quality
          </span>{" "}
          Shoes
        </h3>
        <p className="text-gray-400 text-[18px] p-2">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-gray-400 text-[18px]">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button
          text="View details"
          styles="rounded-full bg-orange-500 text-white max-w-[200px] text-[20px] p-4 mt-10"
        />
      </div>
      <div className="bg-card bg-cover bg-center rounded-xl max-w-md overflow-visible ">
        <Image
          src="/istockphoto-458068097-612x612-removebg-preview.png"
          height={2000}
          width={2000}
          alt="shoe image"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default QualityProduct;
