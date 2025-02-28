"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
import Image from "next/image";
import BookingDrawer from "./BookingDrawer";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Diplomas",
    href: "/diplomas",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  // {
  //   title: "Teams",
  //   href: "/teams",
  // },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="flex h-16 !w-full shrink-0 items-center px-4 md:px-6 custom-container font-roboto">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex justify-between w-full md:hidden">
          <IconHome />
          <div className="ms-auto flex gap-2">
            <SheetTrigger asChild>
              <Button variant="default" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button> 
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="left" className="pt-10">
          <IconHome />
          <div className="grid gap-2 py-6">
            {links.map((link, index) =>
              (
                <Link onClick={() => setIsOpen(false)}
                  key={index}
                  href={link.href}
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                >
                  {link.title}
                </Link>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex items-center justify-between w-full gap-6">
        <IconHome />

        <div className="gap-2">
        {links.map((link) =>
              (
                  <Link key={link.href} 
                    href={link.href}
                    className="group text-white inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {link.title}
                  </Link>
              )
            )}
        </div>
       
        <div className="flex gap-x-2 md:gap-x-4 items-center">
          <BookingDrawer>
            <div className="cursor-pointer text-white">Booking</div>
          </BookingDrawer> 
        </div> 
      </div>
    </header>
  );
}



export const IconHome = ({
  className
}: {
  className?: string
}) => (
    <Link
          href="#"
          className="flex items-center h-9 md:h-12 rounded-xl text-white p-2 gap-2 font-bold text-lg"
          prefetch={false}
        >
          <Image src="/logo/logo.png" alt="logo" className={`h-20 w-20 ${className || ""}`} width={1000} height={1000} />
        </Link>
)

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
