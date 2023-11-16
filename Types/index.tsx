export interface ButtonProps {
  text: string;
  styles: string;
  icon?: string;
}

export interface ShoeCardProps {
  image: any;
  changeBigShoe: (shoe: any) => void;
  bigShoe: any;
}

export interface ProductCardProps {
  image: any;
  price: number;
  name: string;
}
