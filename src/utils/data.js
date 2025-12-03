// import react icons
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";

// export images
export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";

// import images
import man0 from "/images/testimonial/man0.jpg";
import man1 from "/images/testimonial/man1.jpg";
import man2 from "/images/testimonial/man2.jpg";
import man3 from "/images/testimonial/man3.jpg";
import man4 from "/images/testimonial/man4.jpg";
import man5 from "/images/testimonial/man5.jpg";

// footer section data start
export const explores = [
  {
    id: 1,
    title: "Live Auctions",
    href: "/"
  },
  {
    id: 2,
    title: "How it works",
    href: "/"
  },
  {
    id: 3,
    title: "Sell with us",
    href: "/"
  },
  {
    id: 4,
    title: "Buyers guide",
    href: "/"
  },
  {
    id: 5,
    title: "Safety & authenticity",
    href: "/"
  }
]
export const companyInfos = [
  {
    id: 1,
    title: "About BidXpress",
    href: "/"
  },
  {
    id: 2,
    title: "Careers",
    href: "/"
  },
  {
    id: 3,
    title: "Press",
    href: "/"
  },
  {
    id: 4,
    title: "Blog",
    href: "/"
  },
  {
    id: 5,
    title: "Terms & policies",
    href: "/"
  }
]
export const contactInfos = [
  {
    id: 1,
    icon: FiPhoneOutgoing,
    title: "Phone",
    info: "+880 1571529918"
  },
  {
    id: 2,
    icon: MdOutlineAttachEmail,
    title: "Email",
    info:"bidxpress@support.com"
  },
  {
    id: 3,
    icon: IoLocationOutline,
    title: "Address",
    info: "123, Street, City, Country"
  },
 
]
export const socials = [
  {
    id: 1,
    icon: FaInstagram,
    href:"/"
  },
  {
    id: 2,
    icon: CiLinkedin,
    href:"/"
  },
  {
    id: 3,
    icon: CiTwitter,
    href:"/"
  },
  {
    id: 4,
    icon: ImFacebook,
    href:"/"
  },
]
// footer section data end


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

export const categories = [
  { name: "Watches", icon: "⌚" },
  { name: "Electronics", icon: "📱" },
  { name: "Jewelry", icon: "💎" },
  { name: "Sports", icon: "⚽" }, 
  { name: "Real Estate", icon: "🏠" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Fashion", icon: "👗" },
  { name: "Furnitures", icon: "🛋️" },  
];

export  const stats = [
  { icon: "👥", label: "Active Users", value: "45,230+" },
  { icon: "🔨", label: "Auctions", value: "8,950+" },
  { icon: "⭐", label: "Satisfied Customers", value: "98.5%" },
  { icon: "💰", label: "Total Volume", value: "$2.3M+" },
  { icon: "🌍", label: "Countries", value: "156+" },
];

export  const sellers = [
  { name: "Elite Auctions", rating: 4.9, sales: 1250, badge: "⭐" },
  { name: "Treasure Hunt", rating: 4.8, sales: 1089, badge: "✨" },
  { name: "Premium Vintage", rating: 4.9, sales: 956, badge: "👑" },
  { name: "Luxury Goods Co", rating: 4.7, sales: 842, badge: "💎" },
]

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
    title: "Create Your Account",
    desc: "Sign up quickly with your email and a secure password. Choose your role — buyer or seller — and unlock the full auction platform experience.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/01/shape-7.png",
  },
  {
    id: "02",
    title: "List & Launch Auctions",
    desc: "Sellers add products with detailed descriptions, images, and starting prices. Once approved, your auction goes live for eager bidders to join in.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction.png",
  },
  {
    id: "03",
    title: "Bid & Win",
    desc: "Buyers compete by placing bids during the auction duration. The highest bidder wins, and both parties are instantly notified of the results.",
    cover:
      "https://rainbowthemes.net/themes/nuron/wp-content/uploads/2023/09/auction-2.png",
  },
  {
    id: "04",
    title: "Complete & Celebrate",
    desc: "Finalize payment securely, receive your product, and leave feedback. Build trust and enjoy a seamless auction experience from start to finish.",
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

export  const testimonials = [
  {
    id: 1,
    name: "Johan Martin R",
    position: "CEO Founder",
    image: man0,
    quote:
      "Working with this platform transformed the way I approach auctions, making the process seamless and exciting.",
  },
  {
    id: 2,
    name: "Jamie Anderson",
    position: "Founder",
    image: man1,
    quote:
      "This service redefines convenience, offering a user-friendly way to secure the best deals without hassle.",
  },
  {
    id: 3,
    name: "John Peter",
    position: "CEO Founder",
    image: man2,
    quote:
      "A game-changer for anyone who loves auctions – reliable, efficient, and incredibly rewarding.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Marketing Director",
    image: man3,
    quote:
      "The platform combines ease of use with outstanding support, ensuring every auction is a success.",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "Product Manager",
    image: man4,
    quote:
      "Their innovative approach to auctions has simplified my purchasing experience and saved me time.",
  },
  {
    id: 6,
    name: "Emily Davis",
    position: "Lead Designer",
    image: man5,
    quote:
      "From start to finish, the experience was intuitive and rewarding, truly raising the bar for auction services.",
  },
];


