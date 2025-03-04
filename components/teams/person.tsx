import { BaseUrl } from '@/lib/axios'
import { PersonType } from '@/types/types'
import Image from 'next/image'
import React from 'react'

export default function Person({
  person
}:{
  person: PersonType
}) {
  return (
    <div className="text-center">
        <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src={BaseUrl + person.photo.url} width={1400} height={1000} alt={person.photo.alternativeText||"Image Description"} />
        <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium  sm:text-base lg:text-lg">
                {person.name}
            </h3>
            <p className="text-xs text-gray-500 sm:text-sm lg:text-base">
                {person.title}
            </p>
        </div>
    </div>
  )
}
