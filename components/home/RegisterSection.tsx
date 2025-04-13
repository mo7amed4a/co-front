import React from 'react'
import BookingForm from '../layout/bookingForm'
import { BaseUrl } from '@/lib/axios';

export default function RegisterSection({
    data
}:{
    data: {
        title: string;
        image: {
          alternativeText: string;
          url: string;
        };
      }
}) {
  return (
    <section className="py-24">
      <div className='text-center text-xl font-semibold py-10'>{data.title}</div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="lg:mb-0 mb-10 order-2 lg:order-1">
            <div className="group w-full h-full">
              <div className="relative h-[30rem]">
                <img
                  src={BaseUrl+data.image.url}
                  alt={data.image.alternativeText}
                  className="w-full h-full rounded-none bg-blend-multiply bg-primary object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
