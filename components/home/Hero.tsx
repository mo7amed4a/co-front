"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "../ui/button";
import { Slider } from "@/types/types";
import { BaseUrl } from "@/lib/axios";



export default function Hero({ slides, align}: { slides?: Slider[], align?: "center" | "start" | "end" }) {  
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      // navigation
      pagination={{ clickable: true }}
      className="w-full h-auto"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[600px] lg:h-screen text-center text-white overflow-hidden font-roboto">
            <div className="absolute inset-0">
              {slide?.Image && <Image
                src={BaseUrl + slide?.Image?.url}
                alt="Background Image"
                width={1920}
                height={1080}
                className="object-cover object-center w-full h-full"
              />}
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
            <div className={`relative z-10 flex flex-col justify-center items-${align || "start"} h-full md:space-y-5 custom-container text-start`}>
              <h1 className={`text-3xl md:text-5xl font-normal leading-tight mb-4 flex flex-col ${align === "center" && "!flex-row-reverse gap-x-2 text-center"}`}>
                <span className="text-primary-foreground/90">{slide.title}</span>
              </h1>
              {slide.description && (
                <p className={`text-lg md:text-xl text-primary-foreground/80 mb-8 font-roboto ${align === "center" && "lg:w-2/4 text-center"}`}>{slide.description}</p>
              )}
              {slide?.buttons && slide?.buttons?.length > 0 && slide?.buttons?.map((btn, index) => (
                <Link href={btn.link} key={index}>
                  {/* @typescript-eslint/no-explicit-any */}
                  <Button variant={btn.color as any} className="rounded-none" >
                    {btn.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
