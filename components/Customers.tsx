import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const Customers = () => {
  return (
    <section className="bg-gray-400 p-8  ">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <InfiniteMovingCards
          direction="up"
          speed="slow"
          className="hidden lg:block "
        />
        <div className="flex flex-col items-center justufy-center mx-auto">
          <h3 className="text-[40px] font-bold text-center ">
            What Our <span className="text-orange-500">Customers</span> Say?
          </h3>
          <p className="text-white text-[22px] text-center max-w-lg mx-auto">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>
        <InfiniteMovingCards direction="down" speed="slow" reverse={true} />
      </div>
    </section>
  );
};

export default Customers;
