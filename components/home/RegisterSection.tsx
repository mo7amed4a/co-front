import React from 'react'
import BookingForm from '../layout/bookingForm'

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
    <section className="bg--100 py-20 space-y-10">
        <div className='text-center'>
          <h2 className='text-lg font-bold md:text-xl'>{data?.title}</h2>
        </div>
        <div className="container grid grid-cols-2">
          <div>
            مش عارف اعمل اي هنا
          </div>
          <div>
            <div className="lg:w-3/4 mx-auto">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
  )
}
