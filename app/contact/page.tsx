import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export const metadata = {
  title: "Contact Us | Smartcare Polyclinic Dubai",
  description:
    "Get in touch with Smartcare Polyclinic Dubai. Find our location, contact information, and send us a message for appointments or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're here to help. Reach out to us with any questions or to schedule an appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Visit us at our location or reach out through any of the channels below.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-brand-red mt-0.5" />
                      <div>
                        <h3 className="font-bold">Our Location</h3>
                        <p className="text-muted-foreground">
                          123 Healthcare Avenue, Dubai Healthcare City
                          <br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-brand-red mt-0.5" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">
                          Main: +971 4 123 4567
                          <br />
                          Emergency: +971 4 123 4568
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-brand-red mt-0.5" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">
                          General Inquiries: info@smartcarepolyclinic.com
                          <br />
                          Appointments: appointments@smartcarepolyclinic.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-brand-red mt-0.5" />
                      <div>
                        <h3 className="font-bold">Working Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 8:00 PM
                          <br />
                          Saturday: 9:00 AM - 5:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className="font-bold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="p-2 rounded-full bg-brand-blue/10 hover:bg-brand-blue/20">
                    <Facebook className="h-5 w-5 text-brand-blue" />
                  </Link>
                  <Link href="#" className="p-2 rounded-full bg-brand-blue/10 hover:bg-brand-blue/20">
                    <Twitter className="h-5 w-5 text-brand-blue" />
                  </Link>
                  <Link href="#" className="p-2 rounded-full bg-brand-blue/10 hover:bg-brand-blue/20">
                    <Instagram className="h-5 w-5 text-brand-blue" />
                  </Link>
                  <Link href="#" className="p-2 rounded-full bg-brand-blue/10 hover:bg-brand-blue/20">
                    <Linkedin className="h-5 w-5 text-brand-blue" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conveniently located in Dubai Healthcare City
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Map location of Smartcare Polyclinic"
              width={1200}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

