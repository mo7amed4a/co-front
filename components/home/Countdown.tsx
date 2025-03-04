"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function Countdown({
  start,
  text
}:{
  start: string
  text:string
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!start || !isRunning) return

    const calculateTimeLeft = () => {
      const difference = +new Date(start || "2025-12-31") - +new Date()

      if (difference <= 0) {
        setIsRunning(false)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [start, isRunning])


  return (
    <Card className="w-full border-none shadow-none">
    <CardHeader className='pt-0'>
      <CardTitle className="text-center text-primary">{text}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">{timeLeft.days}</div>
          <div className="text-sm text-muted-foreground">days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm text-muted-foreground">hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm text-muted-foreground">minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm text-muted-foreground">seconds</div>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}
