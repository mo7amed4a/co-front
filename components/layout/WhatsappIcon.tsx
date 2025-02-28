import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import BookingDrawer from "./BookingDrawer";
import { GraduationCap } from "lucide-react";

export default function FixedIcon() {
  return (
    <div
      id="whatsapp"
      className="fixed bottom-5 right-5 z-[10] flex flex-col gap-3"
    >
      <a href="https://wa.me/+971501768577" className="size-11 rounded-full lg:size-14">
        <Image
          alt="whatsapp icon"
          width={400}
          height={400}
          src="/icons/WhatsApp-icon.webp"
        />
      </a>
      <BookingDrawer >
        <Button className="size-11 rounded-full lg:size-14">
          <GraduationCap className="!size-6"/>
        </Button>
      </BookingDrawer>
    </div>
  );
}
