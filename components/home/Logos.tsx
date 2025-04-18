"use client";
import * as React from "react";
import Image from "next/image";
import { Image as ImageType } from "@/types/types";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BaseUrl } from "@/lib/axios";

export interface Artwork {
  artist: string;
  art: string;
}

export default function Logos({
  data,
}: {
  data: {
    title_section: string;
    image: ImageType[];
  };
}) {
  return (
    <div className="w-full max-w-7xl mx-auto flex-col justify-start items-center gap-3 flex py-20">
      <h2 className="text-gray-600 text-4xl font-bold font-manrope leading-normal text-center">
        {data?.title_section}
      </h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max gap-10 p-4">
          {data?.image?.map((artwork, index) => (
            <figure key={index} className="shrink-0">
              <div>
                <Image
                  src={BaseUrl + artwork.url}
                  alt={` ${artwork.alternativeText}`}
                  className=" h-fit w-28 object-contain"
                  width={300}
                  height={400}
                />
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
