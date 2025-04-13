"use client";
import React from "react";
import { Button } from "../ui/button";
import { DiplomaType } from "@/types/types";
import { Badge } from "../ui/badge";
import { BaseUrl } from "@/lib/axios";
import Countdown from "./Countdown";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function ComingSoonSection({
  soon,
}: {
  soon: {
    title: string;
    diploma: DiplomaType;
  };
}) {
  const diploma = soon?.diploma;

  return soon && diploma && (
    <section className="container mx-auto px-4 py-16 relative z-[1]">
      <Card className="flex flex-col md:flex-row overflow-hidden bg-white dark:bg-gray-900 shadow-none rounded-none">
        {/* Image Section */}
        <div
          className="w-full h-64 md:h-auto md:w-1/3 bg-cover bg-center relative"
          style={{
            backgroundImage: `url("${BaseUrl + diploma?.image?.url}")`,
          }}
        >
          {diploma.badge && (
            <Badge
              variant="red"
              className="absolute top-4 right-4 animate-pulse text-sm font-semibold px-3 py-1"
            >
              {diploma.badge}
            </Badge>
          )}
        </div>

        {/* Content Section */}
        <CardContent className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {/* Title and Countdown */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
              {diploma.text}
            </h1>
            <Countdown
              text={soon.title}
              start={diploma.date}
              // className="text-lg font-medium text-primary"
            />

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {diploma.description}
            </p>

            {/* Date */}
            <div>
              <small className="text-green-500 font-medium">
                <time>{new Date(diploma.date).toDateString()}</time>
              </small>
            </div>
          </div>

          {/* Price and Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-baseline gap-2">
              {diploma.discount > 0 ? (
                <>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${(diploma.price * (1 - diploma.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    ${diploma.price}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ${diploma.price}
                </span>
              )}
            </div>
            <Link href={`/diplomas/${diploma.documentId}`}>
              <Button
                className="w-full sm:w-auto px-6 py-2 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-white font-semibold"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}