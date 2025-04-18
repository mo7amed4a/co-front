'use client'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React from 'react'

export default function RichViewer({
    content,
    className
}: {content: [], className?:string}) {
  return (
    content && (
      <div className={`prose prose-a:text-blue-500 ${className}`}>
        <BlocksRenderer content={content} />
      </div>
      )
  )
}