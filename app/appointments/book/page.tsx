"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, ArrowRight, CheckCircle2, Star, Loader2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

export default function BookAppointmentPage() {
  const router = useRouter()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const doctorId = searchParams.get("doctor")
  const dateParam = searchParams.get("date")
  const timeParam = searchParams.get("time")

  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(dateParam ? new Date(dateParam) : undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    timeParam ? decodeURIComponent(timeParam) : undefined,
  )
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(doctorId ? "cardiology" : undefined)
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(doctorId || undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    // Simulate loading appointments data
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (doctorId && dateParam && timeParam && step === 1) {
      // Show toast for pre-filled information
      toast({
        title: "Information pre-filled",
        description: "We've pre-filled your appointment details from the doctor's page",
      })
      // Advance to step 2 after a short delay
      setTimeout(() => {
        setStep(2)
      }, 500)
    }
  }, [doctorId, dateParam, timeParam, step, toast])

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
    "4:00 PM",
    "4:30 PM",
  ]

  // Departments
  const departments = [
    { id: "cardiology", name: "Cardiology" },
    { id: "neurology", name: "Neurology" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "internal-medicine", name: "Internal Medicine" },
  ]

  // Doctors (would typically be filtered based on selected department)
  const doctors = [
    { id: "sarah-johnson", name: "Dr. Sarah Johnson", department: "cardiology" },
    { id: "robert-williams", name: "Dr. Robert Williams", department: "cardiology" },
    { id: "michael-chen", name: "Dr. Michael Chen", department: "neurology" },
    { id: "lisa-rodriguez", name: "Dr. Lisa Rodriguez", department: "neurology" },
    { id: "emily-rodriguez", name: "Dr. Emily Rodriguez", department: "pediatrics" },
    { id: "david-kim", name: "Dr. David Kim", department: "pediatrics" },
    { id: "maria-garcia", name: "Dr. Maria Garcia", department: "orthopedics" },
    { id: "john-smith", name: "Dr. John Smith", department: "internal-medicine" },
  ]

  const filteredDoctors = selectedDepartment
    ? doctors.filter((doctor) => doctor.department === selectedDepartment)
    : doctors

  const nextStep = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(step + 1)
      window.scrollTo(0, 0)

      // Show toast based on step
      if (step === 1) {
        toast({
          title: "Doctor selected",
          description: `You've selected ${doctors.find((d) => d.id === selectedDoctor)?.name}`,
        })
      } else if (step === 2) {
        toast({
          title: "Appointment time selected",
          description: `${selectedDate?.toLocaleDateString()} at ${selectedTime}`,
        })
      } else if (step === 3) {
        toast({
          title: "Patient information saved",
          description: "Your information has been saved successfully",
        })
      }
    }, 800)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const completeBooking = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Appointment Booked!",
        description: "Your appointment has been confirmed. Check your email for details.",
        variant: "success",
      })
      router.push("/appointments/confirmation")
    }, 1500)
  }

  if (pageLoading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 text-brand-blue animate-spin" />
          <p className="text-lg font-medium text-brand-blue">Loading appointment system...</p>
        </div>
      </div>
    )
  }

  // Mock upcoming appointments data
  const upcomingAppointments = [
    {
      id: "1",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      department: "Neurology",
      date: "2024-03-22",
      time: "2:30 PM",
      status: "Pending",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book Your Appointment</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Schedule a visit with our specialists in just a few simple steps
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-brand-blue text-white" : "bg-muted"}`}
                  >
                    1
                  </div>
                  <span className="ml-2 font-medium">Select Department & Doctor</span>
                </div>
                <div className="flex-1 h-px mx-4 bg-border"></div>
                <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-brand-blue text-white" : "bg-muted"}`}
                  >
                    2
                  </div>
                  <span className="ml-2 font-medium">Choose Date & Time</span>
                </div>
                <div className="flex-1 h-px mx-4 bg-border"></div>
                <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-brand-blue text-white" : "bg-muted"}`}
                  >
                    3
                  </div>
                  <span className="ml-2 font-medium">Patient Information</span>
                </div>
                <div className="flex-1 h-px mx-4 bg-border"></div>
                <div className={`flex items-center ${step >= 4 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 4 ? "bg-brand-blue text-white" : "bg-muted"}`}
                  >
                    4
                  </div>
                  <span className="ml-2 font-medium">Review & Payment</span>
                </div>
              </div>
            </div>

            {/* Show upcoming appointments to prevent duplicates */}
            {step === 1 && (
              <div className="mb-8">
                <Card className="border-brand-blue/20">
                  <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-brand-blue" />
                      Your Upcoming Appointments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    {upcomingAppointments.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                          <div
                            key={appointment.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
                          >
                            <div className="space-y-1">
                              <div className="font-medium text-brand-blue">{appointment.doctor}</div>
                              <div className="text-sm text-muted-foreground">{appointment.department}</div>
                              <div className="flex items-center text-sm">
                                <Calendar className="mr-1 h-4 w-4 text-brand-blue" />
                                {appointment.date}
                              </div>
                              <div className="flex items-center text-sm">
                                <Clock className="mr-1 h-4 w-4 text-brand-blue" />
                                {appointment.time}
                              </div>
                              <div className="flex items-center text-sm">
                                {appointment.status === "Confirmed" ? (
                                  <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                                ) : (
                                  <Clock className="mr-1 h-4 w-4 text-amber-500" />
                                )}
                                <span
                                  className={`${
                                    appointment.status === "Confirmed" ? "text-green-500" : "text-amber-500"
                                  }`}
                                >
                                  {appointment.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                              >
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground">You have no upcoming appointments</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 1 && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Select Department & Doctor</h2>
                      <p className="text-muted-foreground">Choose the department and doctor for your appointment</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                          <SelectTrigger id="department" className="border-brand-blue/30 focus:ring-brand-blue">
                            <SelectValue placeholder="Select a department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.id} value={dept.id}>
                                {dept.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Graphical doctor selection */}
                      <div className="space-y-2">
                        <Label>Select Doctor</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {filteredDoctors.map((doctor) => (
                            <div
                              key={doctor.id}
                              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all hover:border-brand-blue hover:shadow-sm ${
                                selectedDoctor === doctor.id
                                  ? "border-brand-blue bg-brand-blue/5 ring-2 ring-brand-blue/30"
                                  : ""
                              }`}
                              onClick={() => setSelectedDoctor(doctor.id)}
                            >
                              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm mr-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64"
                                  alt={doctor.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{doctor.name}</h3>
                                <p className="text-sm text-muted-foreground">{doctor.department}</p>
                                <div className="flex items-center mt-1">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-3 w-3 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs text-muted-foreground ml-1">
                                    {doctor.id === "sarah-johnson"
                                      ? "(127 reviews)"
                                      : doctor.id === "michael-chen"
                                        ? "(93 reviews)"
                                        : "(45 reviews)"}
                                  </span>
                                </div>
                                <div className="text-xs text-brand-blue mt-1">
                                  Next available:{" "}
                                  {doctor.id === "sarah-johnson"
                                    ? "Today"
                                    : doctor.id === "michael-chen"
                                      ? "Tomorrow"
                                      : "In 2 days"}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={nextStep}
                        disabled={!selectedDepartment || !selectedDoctor || isLoading}
                        className="bg-brand-blue hover:bg-brand-blue/90"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                          </>
                        ) : (
                          <>
                            Continue <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Choose Date & Time</h2>
                      <p className="text-muted-foreground">Select your preferred appointment date and time</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Select Date</Label>
                        <div className="border rounded-md p-2 border-brand-blue/30">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            className="mx-auto"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Select Time</Label>
                        <div className="h-[350px] overflow-y-auto border rounded-md p-4 border-brand-blue/30">
                          <div className="mb-2 pb-2 border-b">
                            <h3 className="text-sm font-medium text-brand-blue">Morning</h3>
                          </div>
                          <RadioGroup
                            value={selectedTime}
                            onValueChange={setSelectedTime}
                            className="grid grid-cols-2 gap-2 mb-4"
                          >
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
                            <h3 className="text-sm font-medium text-brand-blue">Afternoon</h3>
                          </div>
                          <RadioGroup
                            value={selectedTime}
                            onValueChange={setSelectedTime}
                            className="grid grid-cols-2 gap-2"
                          >
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
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={nextStep}
                        disabled={!selectedDate || !selectedTime || isLoading}
                        className="bg-brand-blue hover:bg-brand-blue/90"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                          </>
                        ) : (
                          <>
                            Continue <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Patient Information</h2>
                      <p className="text-muted-foreground">Please provide your personal and medical information</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            className="border-brand-blue/30 focus:ring-brand-blue"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            className="border-brand-blue/30 focus:ring-brand-blue"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="border-brand-blue/30 focus:ring-brand-blue"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            className="border-brand-blue/30 focus:ring-brand-blue"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" className="border-brand-blue/30 focus:ring-brand-blue" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Textarea
                          id="reason"
                          placeholder="Please describe your symptoms or reason for the appointment"
                          className="border-brand-blue/30 focus:ring-brand-blue min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newPatient"
                            className="text-brand-blue border-brand-blue/30 focus:ring-brand-blue"
                          />
                          <Label htmlFor="newPatient">I am a new patient</Label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="insurance"
                            className="text-brand-blue border-brand-blue/30 focus:ring-brand-blue"
                          />
                          <Label htmlFor="insurance">I have health insurance</Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                      >
                        Back
                      </Button>
                      <Button onClick={nextStep} disabled={isLoading} className="bg-brand-blue hover:bg-brand-blue/90">
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                          </>
                        ) : (
                          <>
                            Continue <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Review & Payment</h2>
                      <p className="text-muted-foreground">Review your appointment details and complete the booking</p>
                    </div>

                    <div className="border rounded-md p-4 bg-muted/50">
                      <h3 className="font-medium mb-4 text-brand-blue">Appointment Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">Department:</span>
                          <span className="font-medium">
                            {departments.find((d) => d.id === selectedDepartment)?.name || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">Doctor:</span>
                          <span className="font-medium">
                            {doctors.find((d) => d.id === selectedDoctor)?.name || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">
                            {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">Time:</span>
                          <span className="font-medium">{selectedTime || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2">
                          <span>Total:</span>
                          <span className="text-brand-blue">$150.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Sign in or sign up prompt */}
                    <div className="border rounded-md p-6 bg-brand-blue/5 space-y-4">
                      <h3 className="font-medium text-center">Please sign in or create an account to continue</h3>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-brand-blue hover:bg-brand-blue/90 flex-1">Sign In</Button>
                        <Button
                          variant="outline"
                          className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 flex-1"
                        >
                          Create Account
                        </Button>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Already have an appointment?{" "}
                          <Link href="/account" className="text-brand-blue hover:underline">
                            View in your account
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          placeholder="Enter name as it appears on card"
                          className="border-brand-blue/30 focus:ring-brand-blue"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="Enter your card number"
                          className="border-brand-blue/30 focus:ring-brand-blue"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="border-brand-blue/30 focus:ring-brand-blue"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="CVC" className="border-brand-blue/30 focus:ring-brand-blue" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="saveCard"
                            className="text-brand-blue border-brand-blue/30 focus:ring-brand-blue"
                          />
                          <Label htmlFor="saveCard">Save card for future appointments</Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={completeBooking}
                        disabled={isLoading}
                        className="bg-brand-blue hover:bg-brand-blue/90"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                          </>
                        ) : (
                          <>
                            Complete Booking <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

