import BlogCard from '@/components/blog/blog'
import { api } from '@/lib/axios'
import { QueryGetBlogs } from '@/lib/queryGraphql'
import { BlogsQuery } from '@/types/types'
import React from 'react'
import HeroBlog from './_components/Hero'

export const dynamic = "force-dynamic"

export default async function page() {

  const res = await api.post("", {
    query: QueryGetBlogs,
  })
  const {blogs, blogsPage}:BlogsQuery = res.data.data

  return (
    <div>
      <HeroBlog data={blogsPage?.hero}/>
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
