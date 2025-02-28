"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BaseUrl } from "@/lib/axios";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Image as ImageType} from "@/types/types";

export default function ImageGallery({ images }: { images: ImageType[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, showPrevious, showNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Dialog key={image.documentId} open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="p-0 overflow-hidden h-auto"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={BaseUrl + image.url}
                alt={image.alternativeText}
                width={1500}
                height={1500}
                className="w-full h-auto object-cover"
              />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] md:max-w-3xl pb-4" ref={dialogRef}>
            <div className="relative h-full">
              <ScrollArea className="h-52 lg:h-[30rem]">
                <Image
                  src={BaseUrl + images[currentIndex].url}
                  alt={images[currentIndex].alternativeText}
                  width={1500}
                  height={1500}
                  className="w-full h-auto"
                />
                <ScrollBar orientation="vertical" className="!hidden" />
              </ScrollArea>
              <Button
                variant="outline"
                size="icon"
                className="absolute -start-4 top-1/2 transform -translate-y-1/2"
                onClick={showPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute -end-4 top-1/2 transform -translate-y-1/2"
                onClick={showNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-center text-xs text-gray-500">
              Use the arrow keys to navigate between images.
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
