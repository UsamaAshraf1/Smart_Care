import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, HeartPulse, CheckCircle2, Building, Globe, History } from "lucide-react"

export const metadata = {
  title: "About Us | Smartcare Polyclinic Dubai",
  description:
    "Learn about Smartcare Polyclinic Dubai, our mission, values, and commitment to providing exceptional healthcare services in Dubai.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Smartcare Polyclinic</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Providing exceptional healthcare services in Dubai since 2010
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-brand-blue px-3 py-1 text-sm text-white">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Leading Healthcare in Dubai
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Smartcare Polyclinic was founded with a vision to provide world-class healthcare services to the diverse
                population of Dubai. What started as a small clinic has now grown into a comprehensive medical center
                offering a wide range of specialized services.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Our team of internationally trained doctors, state-of-the-art facilities, and patient-centered approach
                have made us one of the most trusted healthcare providers in the UAE.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Smartcare Polyclinic Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Guided by our commitment to excellence and compassionate care
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-brand-blue/10">
                    <HeartPulse className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To provide accessible, high-quality healthcare services that improve the health and wellbeing of our
                  community through compassionate care, innovation, and excellence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-brand-blue/10">
                    <Award className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the leading healthcare provider in Dubai, recognized for clinical excellence, patient
                  satisfaction, and innovative medical solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-brand-blue/10">
                    <Users className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Our Values</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Excellence in patient care</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Integrity and transparency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Compassion and respect</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5" />
                    <span>Innovation and continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Recognized for excellence in healthcare services
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Award className="h-12 w-12 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold">JCI Accredited</h3>
                <p className="text-muted-foreground">
                  Joint Commission International certification for quality healthcare
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold">50,000+</h3>
                <p className="text-muted-foreground">Patients treated annually with high satisfaction rates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Building className="h-12 w-12 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold">State-of-the-Art</h3>
                <p className="text-muted-foreground">Modern facilities with the latest medical technology</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Globe className="h-12 w-12 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold">International Team</h3>
                <p className="text-muted-foreground">Doctors trained at prestigious institutions worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-brand-red px-3 py-1 text-sm text-white">Our History</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Decade of Excellence</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-brand-blue text-white">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">2010</h3>
                    <p className="text-muted-foreground">
                      Smartcare Polyclinic was established with just 5 doctors and 2 departments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-brand-blue text-white">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">2015</h3>
                    <p className="text-muted-foreground">
                      Expanded to a larger facility with 10 departments and advanced diagnostic equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-brand-blue text-white">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">2018</h3>
                    <p className="text-muted-foreground">
                      Received JCI accreditation and launched our digital appointment system
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-brand-blue text-white">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">2023</h3>
                    <p className="text-muted-foreground">
                      Opened our second branch in Dubai and introduced telemedicine services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Smartcare Polyclinic Timeline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-blue">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-6">
            Experience the Smartcare Difference
          </h2>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl mb-8">
            Join thousands of satisfied patients who trust us with their healthcare needs
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/appointments/book">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

