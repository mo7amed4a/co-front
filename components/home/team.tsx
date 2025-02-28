import React from 'react'
import Person from '../teams/person'

export default function Team() {
  return (
   <div className="bg-gray-100">
  <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-primary">Our team</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
   <Person />
    </div>
  </div>
</div>

  )
}
