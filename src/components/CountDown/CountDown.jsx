import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 6,
    minutes: 36,
    seconds: 13
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }

        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours
        let newDays = prevTime.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="p-5 px-10  bg-white shadow-sm rounded-2xl border border-gray-100">
          <h4 className="text-2xl font-bold">{value.toString().padStart(2, '0')}</h4>
          <p className="text-sm text-gray-600 capitalize">{unit}</p>
        </div>
      ))}
    </div>
  )
}