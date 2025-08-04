import shoecard1 from "../public/shoecard1.png";
import shoecard2 from "../public/shoecard2.png";
import shoecard3 from "../public/shoecard3.png";
import shoecard4 from "../public/shoecard4.png";

export const NavList = [
  { link: "/", name: "Home" },
  { link: "#product", name: "Product" },
  { link: "#AboutUs", name: "About Us" },
  { link: "#ContactUs", name: "Contact Us" },
];

export const Products = [
  { href: "/", label: "NMD R1 " },
  { href: "/", label: "Hoops 2 Trainer" },
  { href: "/", label: "Hoops 3 Mid Lifestyle" },
  { href: "/", label: "Dropset 2 Trainer" },
  { href: "/", label: "Disney Moana Stan Smith" },
  { href: "/", label: "Adipower Weightlifting" },
];

export const Help = [
  { href: "/", label: "About Us" },
  { href: "/", label: "FAQs" },
  { href: "/", label: "How it works" },
  { href: "/", label: "Privacy policy" },
  { href: "/", label: "Payment policy" },
];

export const GetInTouch = [
  { href: "/", label: "customer@adidas.com" },
  { href: "/", label: "+92554862354" },
];

export const infos = [
  { label: "Brands", number: "1K+" },
  { label: "Shop", number: "500+" },
  { label: "Customers", number: "250K+" },
];

export const products = [
  { price: 200.2, name: "adidas Originals Haiwee C", image: shoecard1 },
  { price: 210.2, name: "adidas-originals-coast-star-j", image: shoecard2 },
  {
    price: 220.2,
    name: "adidas-originals-forest-grove-c",
    image: shoecard3,
  },
  { price: 220.2, name: "adidas-originals-forest-grove-c", image: shoecard4 },
];

export const testimonials = [
  {
    name: "Morich Brown",
    testimonial:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    rating: "4.5",
    image: "/customer1.jpeg",
  },
  {
    name: "Lota Mongeskar",
    testimonial:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rating: "4",
    image: "/customer2.svg",
  },
  {
    name: "John Doe",
    testimonial:
      "These shoes are insanely comfortable—wore them all day and my feet felt great. Stylish and supportive!",
    rating: "4",
    image: "/customer3.png",
  },
  {
    name: "Liam Patterson",
    testimonial:
      "I was hesitant at first, but once I tried them on, I knew I made the right choice. Easily my favorite pair now.",
    rating: "4.6",
    image: "/customer4.png",
  },
  {
    name: "Amir Delgado",
    testimonial:
      "TThey fit perfectly right out of the box. Great quality and attention to detail. Highly recommended!",
    rating: "4.5",
    image: "/customer5.png",
  },
  {
    name: "Julien Moreau",
    testimonial:
      "Honestly, the photos don’t do them justice. The quality feels premium and the comfort is unmatched.",
    rating: "4.3",
    image: "/customer6.png",
  },
];
