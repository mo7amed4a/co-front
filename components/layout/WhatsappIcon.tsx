import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import BookingDrawer from "./BookingDrawer";
import { CalendarPlus } from "lucide-react";

export default function FixedIcon({
  link
}:{
  link: string
}) {
  return (
    <div
      id="whatsapp"
      className="fixed bottom-5 right-5 z-[10] flex flex-col gap-3"
    >
      {link&& <a href={link} className="size-11 rounded-full lg:size-14">
        <Image
          alt="whatsapp icon"
          width={400}
          height={400}
          src="/icons/WhatsApp-icon.webp"
        />
      </a>}
      <BookingDrawer >
        <Button className="size-11 rounded-full lg:size-14">
          <CalendarPlus className="!size-6"/>
        </Button>
      </BookingDrawer>
    </div>
  );
}
