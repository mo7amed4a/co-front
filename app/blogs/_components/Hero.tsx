import { BaseUrl } from '@/lib/axios'
import { HeroType } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export default function HeroBlog({
  data
}:{
  data: HeroType
}) {
  return (
   <div className="bg-white dark:bg-gray-800 dark:text-white">
  <div className="relative">
    <img src={ data?.background?.url ? (BaseUrl + data?.background?.url) : "https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} className="absolute inset-0 object-cover w-full h-full" />
    <div className="relative bg-primary/75">
      <svg className="absolute inset-x-0 -bottom-4 text-white" viewBox="0 0 1160 163">
        <path fill="currentColor" d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z" />
      </svg>
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              {data?.title}
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              {data?.description}
            </p>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white dark:bg-gray-700 rounded shadow-2xl flex flex-col items-center justify-center p-7 sm:p-10">
              <Image src={"/logo/logo.png"} className='size-40' width={500} height={500} alt='' />
              {/* <BookingDrawer>
                <h3 className="mb-4 w-full text-center justify-center text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl flex items-center gap-3">
                  Register now
                  <span className='size-2 inline-block bg-red-500 p-1 rounded-full animate-ping'></span>
                </h3>
              </BookingDrawer> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
