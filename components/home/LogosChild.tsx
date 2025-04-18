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

export default function LogosChild({
  data,
}: {
  data: ImageType[];
}) {
  return (
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max gap-10 p-4 py-7">
          {data?.map((artwork, index) => (
            <figure key={index} className="shrink-0">
              <div className="">
                <Image
                  src={BaseUrl + artwork.url}
                  alt={` ${artwork.alternativeText}`}
                  className=" h-fit w-16 object-contain"
                  width={300}
                  height={400}
                />
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
  );
}
