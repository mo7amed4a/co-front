import BlogCard from '@/components/blog/blog'
import { api } from '@/lib/axios'
import { QueryGetBlogs } from '@/lib/queryGraphql'
import { BlogsQuery } from '@/types/types'
import Link from 'next/link'
import React from 'react'

export default async function page() {

  const res = await api.post("", {
    query: QueryGetBlogs,
  })
  const {blogs}:BlogsQuery = res.data.data

  return (
    <div>
                <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          <div className="mx-auto mt-10 w-full max-w-xl md:mt-36 lg:max-w-screen-xl">
            <div className="mb-16 lg:mb-0 lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    Approved by google</p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-mono tracking-tight sm:text-5xl sm:leading-snug" style={{}}>
                  World&apos;s Best
                  AI<br />
                  <span className="inline-block font-bold text-primary" style={{}}>Intelligent Audience Sampling</span>
                </h2>
                <p className="text-base md:text-lg" style={{}}>Helping You Find The Exact Audience You Need
                  By Recruiting From 100+ Different Consumer
                  Segments And Industries.</p>
              </div>
              <div className="flex items-center">
                <Link href="/" className="mr-6 inline-flex h-12 items-center justify-center rounded bg-primary px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-cyan-400 focus:ring">
                  Get started </Link>
                <Link href="/" className="inline-flex items-center font-semibold text-primary transition-colors duration-200 hover:text-cyan-400">Learn
                  more</Link>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full space-x-3 overflow-hidden px-2 md:justify-end">
            {/* Col 2 */}
            <div className="my-auto hidden w-72 flex-col space-y-3 md:mt-36 lg:flex">
              <img src="https://static.additionalsheet.com/images/hero/hero-2.png" alt="" style={{}} />
            </div>
            <div className="my-auto w-80 flex-col space-y-3 md:mt-36 lg:flex bg-white shadow-lg rounded-xl px-4 py-4">
              <div className="flex py-2 px-2 text-gray-700">
                <div className="my-auto mr-4 bg-white p-3 text-primary ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div >
                  <p className="text-2xl font-bold">1420</p>
                  <p className="text-sm">Monthly Users</p>
                </div>
              </div>
              <div className="flex py-2 px-2 text-gray-700">
                <div className="my-auto mr-4 bg-white p-3 text-primary ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div >
                  <p className="text-2xl font-bold">550</p>
                  <p className="text-sm">Graduates</p>
                </div>
              </div>
              <div className="flex py-2 px-2 text-gray-700">
                <div className="my-auto mr-4 bg-white p-3 text-primary ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div >
                  <p className="text-2xl font-bold">240</p>
                  <p className="text-sm">Fortune 500 Employed</p>
                </div>
              </div>
            </div>
          </div>
        </div>


<div className="bg-white dark:bg-gray-800 dark:text-white">
  <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid lg:grid-cols-5 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      <div className="lg:col-span-full">
        <div className="py-8 lg:pe-8">
         {blogs && <div className='grid lg:grid-cols-3 gap-5'>
                {blogs.map(blog => <BlogCard key={blog.documentId} blog={blog} />)}
            </div>}
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
