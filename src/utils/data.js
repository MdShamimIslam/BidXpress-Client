import watch from "../assets/watch.png";
import electronic from "../assets/electronic.png";
import sport from "../assets/sport.png";
import state from "../assets/state.png";
import vehicle from "../assets/vehicle.png";
import jewelery from "../assets/jewelery.png";
import furniture from "../assets/furniture.png";
import man6 from "/images/testimonial/man6.jpg";
import man7 from "/images/testimonial/man7.jpg";
import man8 from "/images/testimonial/man8.jpeg";
import man9 from "/images/testimonial/man9.jpeg";
import man10 from "/images/testimonial/man10.jpg";

export const topSellerList = [
  {
    id: 1,
    title: "William",
    profile:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/client-5-1.png",
    amount: "100",
  },
  {
    id: 2,
    title: "Orko",
    profile:man9,
    amount: "200",
  },
  {
    id: 3,
    title: "Nipa",
    profile:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/client-3.png",
    amount: "300",
  },
  {
    id: 4,
    title: "Joseph",
    profile:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/client-2-2.png",
    amount: "100",
  },
  {
    id: 5,
    title: "Isabella",
    profile:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/client-10-2.png",
    amount: "100",
  },
  {
    id: 6,
    title: "Emily",
    profile:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/client-15-1.png",
    amount: "100",
  },
  {
    id: 7,
    title: "Devmahbub",
    profile:man10,
    amount: "100",
  },
  {
    id: 8,
    title: "Alvi",
    profile:man6,
    amount: "100",
  },
  {
    id: 9,
    title: "Noman",
    profile:man7,
    amount: "100",
  },
  {
    id: 10,
    title: "Alexander",
    profile:man8,
    amount: "100",
  },
];

export const menulists = (isLoggedIn) => {
  const baseMenu = [
    { id: 1, path: "/", link: "home" },
    { id: 2, path: "/products", link: "products" },
    { id: 4, path: "/about", link: "about" },
    { id: 5, path: "/services", link: "Services" },
    { id: 6, path: "/contact", link: "Contact" },
  ];
  if (isLoggedIn) {
    baseMenu.push({
      id: 7,
      path: "/dashboard",
      link: "Dashboard",
    });
  }

  return baseMenu;
};

export const categorylists = [
  {
    id: 1,
    image: watch,
    title: "watches",
  },
  {
    id: 2,
    image: electronic,
    title: "electronics",
  },
  {
    id: 3,
    image: sport,
    title: "sports",
  },
  {
    id: 4,
    image: state,
    title: "real estate",
  },
  {
    id: 5,
    image: vehicle,
    title: "vehicle",
  },
  {
    id: 6,
    image: jewelery,
    title: "jewellery",
  },
  {
    id: 7,
    image: furniture,
    title: "furniture",
  },
];

export const productlists = [
  {
    id: 1,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-7-768x768.png",
    title: "Blown Glass Creations for Every Occasion",
    bprice: 853,
    price: 5000,
    catgeory: "Arts",
  },
  {
    id: 2,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-8-390x532.png",
    title: "Capturing Nature’s Beauty",
    bprice: 452,
    price: 1420,
    catgeory: "Arts",
  },
  {
    id: 3,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/nuron-art-demo-image-1-390x532.png",
    title: "Ceramic Tea Sets with a Twist",
    bprice: 105,
    price: 100,
    catgeory: "Arts",
  },
  {
    id: 4,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-01-600x600.jpg",
    title: "Vintage Motorcycles and Scooters",
    bprice: 40000,
    price: 50000,
    catgeory: "Automotive",
  },
  {
    id: 5,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-02-600x600.jpg",
    title: "Off-Road Adventure Seekers",
    bprice: 4000,
    price: 8000,
    catgeory: "Automotive",
  },
  {
    id: 6,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-04-600x600.jpg",
    title: "Rare Exotics and Supercars",
    bprice: 40000,
    price: 80000,
    catgeory: "Automotive",
  },
  {
    id: 6,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/books_demo_product_07-600x600.jpg",
    title: "Rare Exotics and Supercars",
    bprice: 400,
    price: 800,
    catgeory: "Romantic Escapes",
  },
  {
    id: 7,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/books_demo_product_02-600x600.jpg",
    title: "Epic Fantasy Chronicles",
    bprice: 200,
    price: 800,
    catgeory: "Romantic Escapes",
  },
  {
    id: 8,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/books_demo_product_09-600x600.jpg",
    title: "Graphic Non-Fiction",
    bprice: 200,
    price: 800,
    catgeory: "Romantic Escapes",
  },
  {
    id: 9,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-10-768x768.jpg",
    title: "Coin Hyundai Sonata",
    bprice: 853,
    price: 5000,
    catgeory: "Arts",
  },
  {
    id: 10,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/coin-auction-demo-product-07-768x768.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 11,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/lab-product-05-768x768.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image: "https://netstorm-react.theme-land.com/img/auction_4.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image: "https://netstorm-react.theme-land.com/img/auction_5.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image: "https://netstorm-react.theme-land.com/img/auction_6.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image: "https://netstorm-react.theme-land.com/img/auction_7.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image: "https://netstorm-react.theme-land.com/img/auction_8.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-10.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/antiques-demo-product-09-768x768.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-600x414.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://bidpro.webdevia.com/wp-content/uploads/2018/05/florian-klauer-mk7D-4UCfmg-unsplash-600x414.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://bidpro.webdevia.com/wp-content/uploads/2018/05/igor-karimov-59MGmlUiqwA-unsplash-600x414.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://bidpro.webdevia.com/real-estate-auction-marketplace/wp-content/uploads/sites/5/2022/03/home-9-1-450x338.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/antiques-demo-product-10-768x768.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://jew-theme.myshopify.com/cdn/shop/files/Rectangle_144.png?v=1703498789&width=1500",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-05.jpg",
    title: "2018 Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-06.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-07.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-08.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-01.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-02.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-03.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
  {
    id: 1,
    image:
      "https://themesflat.co/html/open9/assets/images/box-item/card-item-04.jpg",
    title: "Watch Hyundai Sonata",
    bprice: 853,
    price: 5000,
  },
];

export const processList = [
  {
    id: "01",
    title: "Sign up",
    desc:"Create an account by signing up with your email and a secure password. Choose whether you want to register as a buyer or seller, and log in to access all the features of the auction platform.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/shape-7.png",
  },
  {
    id: "02",
    title: "Auction goes online",
    desc: "Sellers list products with details like title, description, images, and price. After admin approval, the product goes live for buyers to bid on.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction.png",
  },
  {
    id: "03",
    title: "Closing auction",
    desc: "Each auction runs for a set duration. When the timer ends, the highest bid wins the auction. Both the seller and the winning buyer are notified about the auction results.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-2.png",
  },
  {
    id: "04",
    title: "The last steps",
    desc: "The buyer completes the payment process, and the seller ships the product to the buyer. Feedback and reviews can be exchanged to maintain transparency and trust.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-3.png",
  },
];

export const trustList = [
  {
    id: 1,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor1.png",
  },
  {
    id: 2,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor3.png",
  },
  {
    id: 3,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor2.png",
  },
  {
    id: 4,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor4.png",
  },
  {
    id: 5,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor5.png",
  },
  {
    id: 6,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor6.png",
  },
  {
    id: 7,
    profile: "https://bidout-react.vercel.app/images/bg/sponsor8.png",
  },
  
];

export const topList = [
  {
    id: 1,
    catgeory: "Luxury Vehicles",
    total: 7,
    img1: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-01-300x200.jpg",
    img2: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-07-150x150.jpg",
    img3: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-03-150x150.jpg",
    img4: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-08-150x150.jpg",
  },
  {
    id: 2,
    catgeory: "Classic",
    total: 10,
    img1: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-09-300x200.jpg",
    img2: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-01-150x150.jpg",
    img3: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-07-150x150.jpg",
    img4: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-03-150x150.jpg",
  },
  {
    id: 3,
    catgeory: "Muscle Machines",
    total: 8,
    img1: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-07-300x200.jpg",
    img2: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-03-150x150.jpg",
    img4: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-07-150x150.jpg",
    img3: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-01-150x150.jpg",
  },
  {
    id: 4,
    catgeory: "Automotive",
    total: 4,
    img3: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-05-300x200.jpg",
    img2: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-05-768x768.jpg",
    img4: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-07-150x150.jpg",
    img1: "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/automotive_product-04-768x768.jpg",
  },
];

export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";
