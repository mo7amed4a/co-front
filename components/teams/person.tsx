import { BaseUrl } from '@/lib/axios'
import { PersonType } from '@/types/types'
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Avatar, AvatarImage } from '../ui/avatar'

export default function Person({
  person
}:{
  person: PersonType
}) {
  return (
    <>
    <Card className='w-full border-none shadow-none group hover:bg-primary'>
      <CardHeader className='flex items-center'>
        <Avatar className='size-32 md:size-40'>
          <AvatarImage src={BaseUrl + person.photo.url} />
        </Avatar>
      </CardHeader>
      <CardContent className='border-t group-hover:border-primary/70 group-hover:text-white'>
      <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium  sm:text-base lg:text-lg">
                  {person.name}
              </h3>
              <p className="text-xs text-gray-500 sm:text-sm lg:text-base">
                  {person.title}
              </p>
          </div>
      </CardContent>
    </Card>
      {/* <div className="text-center">
          <Image className="rounded-xl sm:size-48 lg:size-60 mx-auto" src={BaseUrl + person.photo.url} width={1400} height={1000} alt={person.photo.alternativeText||"Image Description"} />
          
      </div> */}
    </>
  )
}
