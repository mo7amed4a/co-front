import BlogCard from '@/components/blog/blog'
import RichViewer from '@/components/diploma/RichViewer'
import { api } from '@/lib/axios'
import { QueryGetBlog } from '@/lib/queryGraphql'
import { BlogsQuery } from '@/types/types'
import Link from 'next/link'
import React from 'react'

export default async function page({
  params
}:{
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  const res = await api.post("", {
    query: QueryGetBlog,
    variables: {
        "documentId": id
    }
  })
  const {blogs, blog}:BlogsQuery = res.data.data

  return (
    <div>


<div className="bg-white dark:bg-gray-800 dark:text-white">
  <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid lg:grid-cols-5 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      <div className="lg:col-span-3">
        <div className="py-8 lg:pe-8">
         {blog && <div className="space-y-5 lg:space-y-8">
            <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-500 decoration-2 hover:underline" href="/">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>
            <h2 className="text-3xl font-bold lg:text-5xl" style={{}}>{blog.title}</h2>
            <div className="flex items-center gap-x-5">
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-300">{new Date(blog.createdAt).toDateString()}</p>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              {blog.descripton}
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              <RichViewer content={blog.content} />
            </p>
          </div>}
        </div>
      </div>
      <div className="lg:col-span-2 w-40 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50  dark:lg:from-gray-950 lg:via-transparent lg:to-transparent">
        <div className="sticky top-0 start-0 py-8 lg:ps-8">
            {blogs && <div className='space-y-4'>
                {blogs.map(blog => <BlogCard col key={blog.documentId} blog={blog} />)}
            </div>}
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
