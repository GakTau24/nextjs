"use client"
import Makanan1 from "../assets/makanan1.jpg"
import Makanan2 from "../assets/makanan2.jpg"
import Makanan3 from "../assets/makanan3.jpg"
import Makanan4 from "../assets/makanan4.webp"
import Makanan5 from "../assets/makanan5.jpg"
import Makanan6 from "../assets/makanan6.jpg"
import Makanan7 from "../assets/makanan7.webp"
import Makanan8 from "../assets/makanan8.jpg"
import Makanan9 from "../assets/makanan9.jpg"
import Makanan10 from "../assets/makanan10.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/autoplay"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.css";


export default function Carousel() {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{delay: 2000  }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        
      >  
          <div>
            <SwiperSlide>
              <Image src={Makanan1} />
            </SwiperSlide>
            <SwiperSlide >
              <Image src={Makanan2}  />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan3} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan4} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan5}  />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan6}  />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan7} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan8}  />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan9}  />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Makanan10} />
            </SwiperSlide>
          </div>
        </Swiper>
    </>
  );
}
