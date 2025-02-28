import React from 'react'
import State from './State'
import Link from 'next/link'
import { AboutSectionType } from '@/types/types'
import { BaseUrl } from '@/lib/axios'
import Image from 'next/image'

export default function AboutSection({
  data
}:{
  data: AboutSectionType
}) {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
            <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 className="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                {data?.title}</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
               {data?.description}</p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
             {
              data?.state?.map((item) => (
                <State key={item.id} state={item}/>
              ))
             }
             
            </div>
           
          </div>
        </div>
        <button className="sm:w-fit w-full group px-3.5 py-2 bg-primary/90 hover:bg-primary rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
          <Link href="/about" className="px-1.5 text-primary-foreground text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">ReadMore</Link>
          <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="w-full lg:justify-start justify-center items-start flex">
        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          {data?.image &&<Image width={1264} height={1246} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src={BaseUrl + data?.image?.url} alt={data?.image?.alternativeText} />}
        </div>
      </div>
    </div>
  </div>
</section>

                                        
  )
}
