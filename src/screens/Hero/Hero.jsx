
import cardImg from "../../assets/card.png";
import { SiWpexplorer } from "react-icons/si";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <>
    <Helmet>
    <title>BidXpress | Home</title>
    </Helmet>
      <section className="mt-36">
        <Shape1 />
        <div className="container p-4 mx-auto ">
          <div className="grid grid-cols-12 lg:gap-y-6 md:gap-y-24 lg:gap-x-6">
            <div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
              <div className="flex lg:ml-[-50px] flex-col justify-center h-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl md:leading-[85px] font-bold mb-4">
                  Where Bidding Meets Excitement!
                </h2>
                <p className="md:text-[18px] lg:text-[20px] leading-normal opacity-80">
                  Join the thrill of live auctions! Explore rare items, compete
                  with bidders, and take home extraordinary treasures. Your next
                  great find is just a bid away!
                </p>
                <Link to="/products">
                <button
                  type="submit"
                  className={
                    "text-white w-[320px] mx-auto text-lg lg:mx-0 mt-6 p-3 md:p-4 lg:-p-5 flex gap-3 items-center justify-center bg-primary hover:bg-green font-medium rounded-full   transition ease-in-out"
                  }
                >
                  <SiWpexplorer size={25} />
                  Explore Our All Products
                </button>
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 items-center justify-center relative pb-6 hidden lg:block">
              <Shape2 />
              <img
                src={cardImg}
                alt=""
                className="rounded max-w-full h-auto relative"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

const Shape1 = () => (
  <svg
    className="absolute left-0 top-0 text-primary-z-10 hidden lg:block"
    width="765"
    height="352"
    viewBox="0 0 765 352"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-233.567 243.494C-233.567 243.494 -192.563 139.13 -133.479 118.445C-84.3687 101.251 -48.7519 155.405 -1.18896 134.314C47.9318 112.533 25.2003 38.0036 76.0346 20.5795C128.975 2.43373 155.956 79.8324 210.867 69.0092C275.621 56.2461 267.911 -15.1528 329.258 -39.4731C391.104 -63.9909 432.024 -44.6718 497.161 -58.2395C581.608 -75.8293 691.003 -208 691.003 -208"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M-198.142 351.446C-198.142 351.446 -215.983 270.082 -156.926 249.4C-107.838 232.209 -37.0917 306.522 10.4495 285.434C59.5477 263.655 76.7688 193.419 127.58 175.997C180.496 157.854 191.203 187.805 246.09 176.984C310.815 164.224 276.625 71.699 337.945 47.3818C399.762 22.8672 492.184 91.1712 557.292 77.6067C641.701 60.0211 726.004 -99.9998 726.004 -99.9998"
      stroke="currentColor"
      strokeOpacity="0.37"
      strokeWidth="2"
      strokeDasharray="4 2.5"
    />
  </svg>
);

const Shape2 = () => (
  <svg
    className="absolute top-0 bottom-0 left-1/4 lg:left-[45%] text-primary hidden lg:block"
    width="700"
    height="550"
    viewBox="0 0 765 616"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1413_1802)">
      <path
        d="M2 308C2 138.449 139.449 1 309 1H763V615H309C139.449 615 2 477.551 2 308V308Z"
        fill="currentColor"
      />
      <path
        d="M88.3318 766.511C88.3318 766.511 80.9409 654.626 125.572 610.73C162.67 574.244 217.971 608.05 252.008 568.698C287.159 528.058 234.829 470.327 273.387 432.897C313.543 393.918 370.941 452.433 416.001 419.237C469.138 380.091 431.731 318.789 476.86 270.64C522.356 222.1 567.607 222.135 620.748 182.098C689.642 130.192 732.267 -35.9998 732.267 -35.9998"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M150.839 825.443C150.839 825.443 100.019 759.446 144.628 715.563C181.706 679.089 277.378 716.159 311.396 676.819C346.528 636.19 332.169 565.313 370.708 527.896C410.844 488.929 433.295 511.459 478.334 478.276C531.447 439.145 461.081 370.018 506.186 321.884C551.658 273.359 664.378 295.754 717.494 255.732C786.355 203.846 794.41 23.1564 794.41 23.1564"
        stroke="#EEEDEB"
        strokeOpacity="0.37"
        strokeWidth="2"
        strokeDasharray="4 2.5"
      />
    </g>
  </svg>
);

