import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Blog } from '@/types/types'
import { BaseUrl } from '@/lib/axios'
import Link from 'next/link'

export default function BlogCard({
    col=false,
    dark=false,
    full=false,
    blog
}:{
    col?:boolean
    dark?:boolean
    full?:boolean
    blog?: Blog
}) {
  return blog && (
    <Card className={`w-full shadow-none bg-transparent rounded-none border-none ${col ? "grid lg:grid-cols-2 gap-4": " flex flex-col " + !full && "max-w-md"}`}>
        <CardHeader className={`${col? "py-0" : ""} p-0`}>
            <Image src={BaseUrl + blog?.image.url} className={`${col ? 'size-full' : "size-full lg:h-72"}`} width={1200} height={1200} alt={blog?.image?.alternativeText || "alt"}/>
        </CardHeader>
        <Link href={`/blogs/${blog?.documentId}`} className={`${col? "flex flex-col justify-center h-full" : "pt-8"}`} >
            <CardContent className={` px-0 space-y-2 pt-4`}>
                <time className='text-gray-400'>{new Date(blog?.createdAt).toDateString()}</time>
                <CardTitle className={`${dark && "text-white"} flex justify-between font-normal leading-relaxed`}>{blog?.title} <ArrowUpRight /></CardTitle>
                <CardDescription className={`${dark && "text-gray-200"}`}>{blog?.descripton}</CardDescription>
            </CardContent>
        </Link>
    </Card>
  )
}
