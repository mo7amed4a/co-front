import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { DiplomaType } from '@/types/types'
import { BaseUrl } from '@/lib/axios'
import { Button } from '../ui/button'
import BookingDrawer from '../layout/BookingDrawer'
import Link from 'next/link'

export default function CardDiploma({
  diploma
}:{
  diploma: DiplomaType}) {
  return (
    <Card className='overflow-hidden h-full w-72 rounded-none'>
        <CardHeader className='p-0 !overflow-hidden'>
          <Image className='h-40 w-full' src={BaseUrl + diploma?.image?.url} alt={diploma?.image?.alternativeText} width={1000} height={1000} />
        </CardHeader>
        <CardContent className='py-4 px-2'>
          <Link href={`/diplomas/${diploma.documentId}`} className=' space-y-4'>
            <CardTitle className='line-clamp-2'>{diploma.text}</CardTitle>
            <CardDescription className='line-clamp-3'>{diploma?.description.slice(0, 120)}</CardDescription>
          </Link>
        </CardContent>
        <CardFooter>
          <BookingDrawer diploma={diploma} >
            <Button className='w-full rounded-none duration-300 transition-all hover:bg-primary/80 hover:scale-105'>Booking Now</Button>
          </BookingDrawer>
        </CardFooter>
    </Card>
  )
}
