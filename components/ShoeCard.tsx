import Image from "next/image";
import { ShoeCardProps } from "@/Types";

const ShoeCard = ({ image, changeBigShoe, bigShoe }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoe !== image) {
      changeBigShoe(image);
    }
  };

  return (
    <div
      className={`bg-cover bg-center bg-no-repeat bg-card border-4 rounded-xl p-1 ${
        bigShoe === image ? "border-red-400" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <Image
        src={image}
        height={125}
        width={125}
        alt="shoe image"
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
