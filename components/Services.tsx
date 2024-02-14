"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="my-32 mx-8  flex flex-shrink gap-10 max-md:flex-col">
      <motion.div
        className="shadow-2xl p-12 rounded-xl dark:shadow-white "
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
      >
        <div className="bg-orange-500 rounded-full flex items-center justify-center max-w-[40px] ">
          <Image
            src="/truck-fast.svg"
            width={25}
            height={25}
            alt="fast truck"
            className="m-2"
          />
        </div>
        <h3 className="font-bold text-[24px]">Free shipping </h3>
        <p className="text-gray-500 text-[18px]">
          Enjoy seamless shopping with our complimentary shipping service.{" "}
        </p>
      </motion.div>
      <motion.div
        className="shadow-2xl p-12 rounded-xl dark:shadow-white"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="bg-orange-500 rounded-full flex items-center justify-center max-w-[40px] ">
          <Image
            src="/shield-tick.svg"
            width={25}
            height={25}
            alt="fast truck"
            className="m-2"
          />
        </div>
        <h3 className="font-bold text-[24px]">Secure Payment </h3>
        <p className="text-gray-500 text-[18px]">
          Experience worry-free transactions with our secure payment options.
        </p>
      </motion.div>
      <motion.div
        className="shadow-2xl p-12 rounded-xl dark:shadow-white"
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
      >
        <div className="bg-orange-500 rounded-full flex items-center justify-center max-w-[40px] ">
          <Image
            src="/support.svg"
            width={25}
            height={25}
            alt="fast truck"
            className="m-2"
          />
        </div>
        <h3 className="font-bold text-[24px]">Love to help you </h3>
        <p className="text-gray-500 text-[18px]">
          Our dedicated team is here to assist you every step of the way.
        </p>
      </motion.div>
    </section>
  );
};

export default Services;
