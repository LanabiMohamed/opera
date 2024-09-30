"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import LoadImageClient from "@components/LoadImageClient";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  definition: string;
  destination: string[];
  variances: {
    quantity: string;
    price: number;
  }[];
}

function SwiperFeed({ products }: { products: Product[] }) {
  return (
    <div>
      <div className="flex justify-between pb-4">
        <h2 className="text-xl font-bold">Latest products of this week</h2>
        <div className="flex justify-end text-blue-500 mt-2">
          <RiArrowLeftWideFill
            size={30}
            className="swiper-prev cursor-pointer"
          />
          <RiArrowRightWideFill
            size={30}
            className="swiper-next cursor-pointer"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={7}
        slidesPerView={1.5}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 7,
          },
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{ clickable: true }}
      >
        {products.map((product: Product) => (
          <SwiperSlide
            key={product._id}
            className="pb-12 md:max-w-[34%] max-w-[50%] px-1"
          >
            <Link href={`/product?id=${product._id}`}>
              <LoadImageClient
                Css="w-full h-32 md:h-52 object-contain rounded-lg"
                Url={product.imageUrl}
              />

              <div className="p-1 font-semibold">
                <p>{product.title}</p>
                <p className="text-gray-800">
                  {product.variances[0].price} Dzd /{" "}
                  {product.variances[0].quantity}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm mt-1">
                  {product.destination.map((property) => (
                    <p
                      key={property}
                      className="text-gray-600 bg-green-300 rounded-md px-1"
                    >
                      {property}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperFeed;
