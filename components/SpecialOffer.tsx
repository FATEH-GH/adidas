import Image from "next/image";
import Button from "./Button";

const SpecialOffer = () => {
  return (
    <section className="my-12 mx-10 flex justify-between flex-wrap-reverse">
      <div className="p-8">
        <Image
          src="/pr-136616f0-5357-46be-9dfb-df9e6e7c1366.png"
          width={600}
          height={800}
          alt="Special Offer Image"
        />
      </div>
      <div className="flex flex-col lg:max-w-[600px] justify-center ">
        <h3 className="font-bold text-[50px] mb-8 ">
          <span className="text-orange-500">Special</span> Offer
        </h3>
        <p className="text-gray-500 text-[22px] pb-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-gray-500 text-[22px]">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-12 flex gap-4 max-sm:flex-col">
          <Button
            text="Shop now"
            styles="flex juatify-center p-4 max-sm:justify-evenly gap-4 text-white text-[22px] bg-orange-500 rounded-3xl mx-6"
            icon="/arrow-right.svg"
          />
          <Button
            text="Learn more"
            styles="rounded-3xl text-gray-500 text-[22px] border-2 p-4 mx-6 "
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
