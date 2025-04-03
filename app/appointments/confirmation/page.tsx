"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Calendar, Clock, User, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ConfirmationPage() {
  const { toast } = useToast()

  useEffect(() => {
    // Show success toast when page loads
    toast({
      title: "Appointment Confirmed!",
      description: "Your appointment has been successfully booked.",
      variant: "success",
    })
  }, [toast])

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Appointment Confirmed!</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your appointment has been successfully booked. We look forward to seeing you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Appointment Details</h2>
                    <p className="text-muted-foreground">Please review your appointment information below</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Date</h3>
                        <p>Monday, April 15, 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Time</h3>
                        <p>10:30 AM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <User className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Doctor</h3>
                        <p>Dr. Sarah Johnson - Cardiology</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p>Smartcare Polyclinic</p>
                        <p>123 Medical Center Drive, Healthcare City</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Important Information</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Please arrive 15 minutes before your appointment time.</li>
                      <li>Bring your ID, insurance card, and any relevant medical records.</li>
                      <li>If you need to cancel or reschedule, please do so at least 24 hours in advance.</li>
                      <li>A confirmation email has been sent to your registered email address.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <Link href="/account/appointments" className="w-full">
                      <Button className="w-full">View My Appointments</Button>
                    </Link>
                    <Link href="/" className="w-full">
                      <Button variant="outline" className="w-full">
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

