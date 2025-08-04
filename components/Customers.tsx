import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const Customers = () => {
  return (
    <section className="bg-gray-400 p-8  ">
      <div className="flex items-center justify-center">
        <InfiniteMovingCards direction="up" speed="slow" />
        <div className="flex flex-col items-center justufy-center">
          <h3 className="text-[40px] font-bold text-center ">
            What Our <span className="text-orange-500">Customers</span> Say?
          </h3>
          <p className="text-white text-[22px] text-center max-w-lg ">
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
