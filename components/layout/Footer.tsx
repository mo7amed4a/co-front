import React from 'react'
import { IconHome } from './Header'
import Link from 'next/link'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { FooterType } from '@/types/types'

export default async function Footer({
  data
}:{
  data: FooterType
}) {

  return (
    <footer className="mt-auto bg-primary w-full relative">
      <img src={'/test/footer-shape-left.webp'} className="w-full h-full object-cover absolute inset-0 " />
      <div className="mt-auto w-full max-w-7xl py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full md:col-span-2">
            <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
              <IconHome className='w-auto -ms-5'/>
            </a>
            <p className='text-white leading-relaxed font-normal'>{data.description}</p>
          </div>
          <div className='md:col-span-1 hidden lg:block'></div>
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Links</h4>
            <div className="mt-3 grid space-y-3">
              {
                data?.links?.map(link => (
                  <p key={link.id}><Link className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href={link.link}>{link.title}</Link></p>
                ))
              }
            </div>
          </div>
          <div className="space-y-4 col-span-1">
                <h2 className="text-lg font-semibold text-gray-100">Contact Information</h2>
                {data?.contact_links && 
                <div className="space-y-3 text-sm text-gray-400">
                  <Link href={`tel:${data?.contact_links.phone}`} className="flex items-center gap-2 hover:text-gray-200">
                    <Phone className="h-5 w-5" />
                    <span>{data?.contact_links.phone}</span>
                  </Link>
                  <span className="flex items-center gap-2 hover:text-gray-200">
                    <MapPin className="h-5 w-5" />
                    <span>{data?.contact_links.address}</span>
                  </span>
                  <Link href={`mailto:${data?.contact_links.email}`} className="flex items-center gap-2 hover:text-gray-200">
                    <Mail className="h-5 w-5" />
                    <span>{data?.contact_links.email}</span>
                  </Link>
                </div>}
              </div>
      
        </div>
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center border-t border-t-gray-400 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()}. All rights reserved.</p>
          </div>
          <div>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-cyan-600/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
             href={data?.social_links?.facebook}>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-cyan-600/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
             href={data?.social_links?.x}>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-cyan-600/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
             href={data?.social_links?.instagram}>
              <Instagram className='size-4'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
