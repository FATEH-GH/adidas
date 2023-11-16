import Image from "next/image";

const Customers = () => {
  return (
    <section className="bg-gray-400 p-8 flex flex-col gap-20 ">
      <div className="flex flex-col items-center justufy-center">
        <h3 className="text-[40px] font-bold text-center ">
          What Our <span className="text-orange-500">Customers</span> Say?
        </h3>
        <p className="text-white text-[22px] text-center max-w-lg ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-col items-center justify-evenly lg:flex-row">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center ">
            <Image
              src="/customer1.jpeg"
              width={100}
              height={100}
              alt="customer1"
              className="rounded-full"
            />
          </div>
          <p className="text-white text-[20px] text-center max-w-sm ">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image src="/star.svg" width={25} height={25} alt="star" />
            <p className="text-white text-[20px] ">(4.5)</p>
          </div>
          <p className="text-[35px] font-bold text-center">Morich Brown</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center ">
            <Image
              src="/customer2.svg"
              width={100}
              height={100}
              alt="customer1"
              className="rounded-full"
            />
          </div>
          <p className="text-white text-[20px] text-center   max-w-sm">
            The product not only met but exceeded my expectations. I&apos;ll
            definitely be a returning customer!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image src="/star.svg" width={25} height={25} alt="star" />
            <p className="text-white text-[20px] ">(4.5)</p>
          </div>
          <p className="text-[35px] font-bold text-center">Lota Mongeskar</p>
        </div>
      </div>
    </section>
  );
};

export default Customers;
