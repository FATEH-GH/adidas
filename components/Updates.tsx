import Button from "./Button";

const Updates = () => {
  return (
    <section
      id="ContactUs"
      className="my-12 mx-6 flex flex-col items-center justify-center lg:flex-row lg:justify-evenly gap-10"
    >
      <div>
        <h3 className="text-[50px] font-bold ">
          Sign Up for <span className="text-orange-500">Updates</span>
          <br className="lg:block hidden" /> & Newsletter
        </h3>
      </div>
      <div className="border-2 rounded-full flex gap-10  py-4 px-12  lg:min-w-lg">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="outline-none mx-4"
        />
        <Button
          text="Sign Up"
          styles="bg-orange-500 text-white text-[22px] rounded-full p-4  "
        />
      </div>
    </section>
  );
};

export default Updates;
