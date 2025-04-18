import React from "react";
import Link from "next/link";
import { BaseUrl } from "@/lib/axios";
import Image from "next/image";
import RichViewer from "../diploma/RichViewer";

export default function TOTSection({ data }: { data: any }) {
  return (
    <section className="py-24 relative xl:me-0 lg:me-5 me-0">
      <div className="w-full px-4 md:px-5 lg:px-5 lg:ps-0">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full lg:justify-start justify-center items-start flex sticky top-0">
            <div className="w-full sm:h-[646px] h-full relative">
              
              {data?.image[0]?.url && (
                <Image
                  width={1264}
                  height={1246}
                  className="sm:mt-5 sm:me-5 w-full h-full object-cover"
                  src={BaseUrl + data?.image[0]?.url}
                  alt={data?.image?.alternativeText || "alt"}
                />
              )}
            </div>
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  Programs
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    {data?.title_section}
                  </h2>
                  <RichViewer content={data?.description} />
                </div>
              </div>
              {/* <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-4 grid divide-y">
                  {data?.state?.map((item) => (
                    <State key={item.id} state={item} />
                  ))}
                </div>
              </div> */}
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-primary/90 hover:bg-primary rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <Link
                href="/tot"
                className="px-1.5 text-primary-foreground text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out"
              >
                TOT More
              </Link>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
