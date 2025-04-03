"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CalendarIcon, Clock, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookingWidgetProps {
  doctorId: string
  doctorName: string
}

export function BookingWidget({ doctorId, doctorName }: BookingWidgetProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return

    setIsLoading(true)

    // Show toast notification
    toast({
      title: "Preparing your booking",
      description: "Please wait while we set up your appointment details",
    })

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to the appointment booking page with pre-filled doctor
      router.push(
        `/appointments/book?doctor=${doctorId}&date=${selectedDate.toISOString()}&time=${encodeURIComponent(selectedTime)}`,
      )
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium text-brand-blue flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5" />
            Select Date
          </h3>
          <Card className="border-brand-blue/20">
            <CardContent className="p-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                className="mx-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-brand-blue flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Select Time
          </h3>
          <Card className="border-brand-blue/20">
            <CardContent className="p-4 h-[350px] overflow-y-auto">
              <div className="mb-2 pb-2 border-b">
                <h4 className="text-sm font-medium text-brand-blue">Morning</h4>
              </div>
              <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-2 gap-2 mb-4">
                {timeSlots
                  .filter((time) => time.includes("AM"))
                  .map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <RadioGroupItem value={time} id={`time-${time}`} className="text-brand-blue" />
                      <Label htmlFor={`time-${time}`} className="cursor-pointer">
                        {time}
                      </Label>
                    </div>
                  ))}
              </RadioGroup>

              <div className="mb-2 pb-2 border-b">
                <h4 className="text-sm font-medium text-brand-blue">Afternoon</h4>
              </div>
              <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-2 gap-2">
                {timeSlots
                  .filter((time) => time.includes("PM"))
                  .map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <RadioGroupItem value={time} id={`time-${time}`} className="text-brand-blue" />
                      <Label htmlFor={`time-${time}`} className="cursor-pointer">
                        {time}
                      </Label>
                    </div>
                  ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-brand-blue/5 p-4 rounded-lg border border-brand-blue/20">
          <h3 className="font-medium mb-2">Appointment Summary</h3>
          <p className="text-sm mb-1">
            <span className="font-medium">Doctor:</span> {doctorName}
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Date:</span> {selectedDate.toLocaleDateString()}
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Time:</span> {selectedTime}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || isLoading}
          className="bg-brand-blue hover:bg-brand-blue/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            <>
              Continue to Patient Details <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

