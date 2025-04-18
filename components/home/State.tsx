import { StateType } from '@/types/types'
import React from 'react'

export default function State({
    state
}: {
    state: StateType
}) {
  return (
    <div className="w-full h-full p-3.5 transition-all duration-700 ease-in-out flex flex-col md:grid md:grid-cols-3 justify-start items-start gap-2.5">
        <h4 className="text-gray-700 text-2xl  font-manrope leading-9 text-nowrap md:w-2/4">{state.text}
        </h4>
        <p className="text-gray-500 text-base font-normal leading-relaxed md:col-span-2">{state.description}</p>
    </div>
  )
}
