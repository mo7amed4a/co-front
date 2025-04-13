import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { DiplomaType } from '@/types/types'
import { BaseUrl } from '@/lib/axios'
import { Button } from '../ui/button'
import Link from 'next/link'
// import { Badge } from '../ui/badge'
import { formatDate, fromNow } from '@/lib/moment'

export default function CardDiploma({
  diploma
}:{
  diploma: DiplomaType}) {
  return (
    <Card className="overflow-hidden h-full rounded-none py-0 border-none ">
      <CardHeader className="!p-0 !overflow-hidden relative">
        <Image
          className="h-64 w-full"
          src={BaseUrl + diploma?.image?.url}
          alt={diploma?.image?.alternativeText || "alt" || "jd"}
          width={1000}
          height={1000}
        />
        {/* {diploma?.badge && (
          <Badge className="absolute top-1 end-2">{diploma?.badge}</Badge>
        )} */}
        {/* <div
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          className="flex justify-end bg-white item-center absolute -bottom-1 end-0 ps-5 pe-2"
        >
          {diploma.discount > 0 ? (
            <div className="text-sm font-bold text-green-500 md:text-base">
              ${(diploma.price * (1 - diploma.discount / 100)).toFixed(2)}
              <small className="line-through text-gray-500 ps-1">
                ${diploma.price}
              </small>
            </div>
          ) : (
            <div className="text-sm font-bold text-green-500 md:text-base">
              ${diploma.price}
            </div>
          )}
        </div> */}
      </CardHeader>
      <CardContent className="py-4 px-2">
        <Link href={`/diplomas/${diploma.documentId}`} className=" space-y-2">
          <CardTitle className="line-clamp-2 font-normal leading-relaxed">{diploma.text}</CardTitle>
          <div className="text-sm font-normal text-gray-400 flex justify-between">
            <small>{formatDate(diploma?.date)}</small>
            <small>{fromNow(diploma?.date)}</small>
          </div>
          <CardDescription className="line-clamp-3 pt-0">
            {diploma?.description.slice(0, 120)}
          </CardDescription>
        </Link>
      </CardContent>
      <CardFooter>
        <Link href={`/diplomas/${diploma.documentId}`} className='w-full'>
          <Button variant={"ghost"} className="w-full rounded-none duration-300 transition-all bg-gray-500/10 hover:scale-105">
            Register
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
