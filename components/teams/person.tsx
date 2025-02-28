import React from 'react'

export default function Person() {
  return (
    <div className="text-center">
        <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
        <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium  sm:text-base lg:text-lg">
                Maria Powers
            </h3>
            <p className="text-xs text-gray-500 sm:text-sm lg:text-base">
                Director of sales
            </p>
        </div>
    </div>
  )
}
