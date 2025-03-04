"use client";
import React from "react";
import { Button } from "../ui/button";

import { DiplomaType } from "@/types/types";
import { Badge } from "../ui/badge";
import BookingDrawer from "../layout/BookingDrawer";
import { BaseUrl } from "@/lib/axios";
import Countdown from "./Countdown";
import { Card, CardContent } from "../ui/card";

export default function ComingSoonSection({
  soon,
}: {
  soon:{
    title: string;
    diploma: DiplomaType;
  }
}) {
  const diploma =  soon?.diploma
  return soon && (
    <div className="custom-container pb-16 -mt-10 relative z-[1]">
      <div className="ring-2 ring-green-500 flex flex-col md:flex-row overflow-hidden h-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div
          className="w-full h-64 md:h-auto md:w-1/3 bg-cover"
          style={{
            backgroundImage:
              `url("${BaseUrl + diploma?.image?.url}")`,
          }}
        />
        <Card className="md:w-2/3 rounded-none border-none shadow-none">
          <div className="flex justify-end p-4">
            {diploma.badge && <Badge variant={"red"} className="animate-pulse">{diploma.badge}</Badge>}
          </div>
          <Countdown text={soon.title} start={diploma.date} />
          <CardContent>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                {diploma.text}
              </h1>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {diploma.description}
            </p>
            <div>
              <small className="text-green-500"><time>{new Date(diploma.date).toDateString()}</time></small>
            </div>
            <div className="flex justify-between mt-3 item-center">
              {diploma.discount > 0 ? <div className="text-lg font-bold text-green-600 dark:text-gray-200 md:text-xl">
                ${(diploma.price * (1 - diploma.discount / 100)).toFixed(2)}
                <small className="line-through text-gray-400 ps-1">${diploma.price}</small>
              </div> : <div className="text-lg font-bold text-green-600 dark:text-gray-200 md:text-xl">
                ${diploma.price}
              </div>}
              <div>
                <BookingDrawer diploma={diploma} >
                  <div className="animate-pulse ">
                    <Button className='rounded duration-300 transition-all hover:bg-primary/80 hover:scale-105'>Register</Button>
                  </div>
                </BookingDrawer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
