import { BaseUrl } from "@/lib/axios";
import { Image } from "@/types/types";
import React from "react";

export type TestimonialType = {
  full_name: string;
  comment: string;
  image: Image;
  job: string;
};

export default function Testimonial({ data }: { data: TestimonialType }) {
  return (
    <div className="flex flex-col-reverse justify-between rounded-lg border bg-white p-6 transition-all hover:shadow">
      <div>
        <p className="mt-4 text-gray-500">{data?.comment}</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={data?.image?.url ? BaseUrl + data?.image?.url : "/test/user.jpeg"}
          alt="صورة العميل"
          className="rounded-full h-10 w-10 object-cover"
        />
        <div>
          <h3 className="font-medium"> {data?.full_name}</h3>
          <p className="text-sm text-gray-500">{data?.job}</p>
        </div>
      </div>
    </div>
  );
}
