"use client";
import Link from "next/link";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  Phone,
  MapPin,
  Award,
  Users,
  HeartPulse,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { GetDepartments } from "../Network/Department";

export default function Home() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [departmentsData, setDepartmentsData] = useState();
  const fetchDepartments = async () => {
    const response = await GetDepartments();
    console.log(response);
    setDepartmentsData(response?.data);
  };
  useEffect(() => {
    fetchDepartments();
  }, []);

  const doctors = [
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      href: "/doctors/sarah-johnson",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      href: "/doctors/michael-chen",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      href: "/doctors/emily-rodriguez",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Robert Williams",
      specialty: "Interventional Cardiology",
      href: "/doctors/robert-williams",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Lisa Rodriguez",
      specialty: "Neurophysiology",
      href: "/doctors/lisa-rodriguez",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. David Kim",
      specialty: "Pediatric Cardiology",
      href: "/doctors/david-kim",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. James Chen",
      specialty: "Cardiac Electrophysiology",
      href: "/doctors/james-chen",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. Maria Garcia",
      specialty: "Orthopedics",
      href: "/doctors/maria-garcia",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      name: "Dr. John Smith",
      specialty: "Internal Medicine",
      href: "/doctors/john-smith",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Quick Appointment Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative medical pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-24 h-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brand-blue"
            >
              <path d="M8 2v4m8-4v4M3 10h18M19 4v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-32 h-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brand-red"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-1/4 w-28 h-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brand-blue"
            >
              <path d="M12 2a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v1a3 3 0 0 0 6 0v-1h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V5a3 3 0 0 0-3-3z" />
            </svg>
          </div>
          {/* <div className="absolute bottom-20 right-1/3 w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brand-red"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div> */}
          <div className="absolute top-1/3 left-1/3 w-36 h-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-brand-blue"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>

        {/* Curved shapes for visual interest */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-blue/10 to-transparent"></div>
        <div className="absolute left-0 w-40 inset-y-0 bg-gradient-to-r from-brand-red/5 to-transparent"></div>
        <div className="absolute right-0 w-40 inset-y-0 bg-gradient-to-l from-brand-red/5 to-transparent"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-brand-blue/20 px-3 py-1 text-sm text-brand-blue font-medium mb-2">
              Quick Appointment
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Appointment
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Schedule a visit with our specialists in just a few clicks
              </p>
            </div>
            <div className="w-full max-w-md space-y-4 mt-4">
              <div className="p-6 rounded-xl bg-white shadow-lg border border-brand-blue/20 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-4">
                  <Link
                    href="/appointments/book"
                    aria-label="Book an appointment now"
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
                      size="lg"
                    >
                      Book Now
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-brand-blue"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Most appointments available within 24-48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-blue/10 to-brand-blue/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-brand-blue/20 px-3 py-1 text-sm text-brand-blue font-medium mb-2">
              Our Specialties
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Departments
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Specialized care across multiple medical disciplines with
                cutting-edge technology
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {departmentsData?.slice(0, 3)?.map((items, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue opacity-0 transition-opacity z-10"></div>
                    <div className="absolute top-0 right-0 p-4">
                      <div className="rounded-full bg-white p-3 shadow-md">
                        <Users className="h-8 w-8 text-brand-red" />
                      </div>
                    </div>
                    <div className="bg-white p-6 relative z-20">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                        {items?.name}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                        {items?.shortDes?.length > 120
                          ? `${items.shortDes.slice(0, 120)}...`
                          : items.shortDes}
                      </p>
                      <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors">
                        <Link
                          href={`/departments/${items?.name}`}
                          className="inline-flex items-center text-brand-blue font-medium group-hover:text-white transition-colors"
                        >
                          Learn More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/departments">
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                View All Departments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Specialists
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Experienced professionals dedicated to your health and
                well-being
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {(doctors?.slice(0, 3) || [])?.map((doctor, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                {/* Doctor Image with Gradient Overlay */}
                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Specialty Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {doctor.specialty}
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white text-brand-blue text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {index % 2 === 0
                      ? "10+ years"
                      : index % 3 === 0
                      ? "15+ years"
                      : "5+ years"}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors mb-4">
                    {doctor.specialty}
                  </p>

                  {/* Availability */}
                  <div className="flex items-center mb-4 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-brand-blue group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      Next Available:{" "}
                      {index % 3 === 0
                        ? "Today"
                        : index % 2 === 0
                        ? "Tomorrow"
                        : "In 2 days"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors">
                    <Link
                      href={doctor.href}
                      className="text-brand-blue font-medium group-hover:text-white transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={`/appointments/book?doctor=${doctor.href
                        .split("/")
                        .pop()}`}
                      className="px-3 py-1 bg-brand-blue text-white rounded-md hover:bg-brand-red transition-colors group-hover:bg-white group-hover:text-brand-blue"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/doctors">
              <Button variant="outline">View All Doctors</Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Smartcare Polyclinic
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're committed to providing exceptional healthcare services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Excellence in Care</h3>
                <p className="text-muted-foreground">
                  Award-winning healthcare services with proven results
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Expert Team</h3>
                <p className="text-muted-foreground">
                  Highly qualified specialists across all departments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Timely Service</h3>
                <p className="text-muted-foreground">
                  Efficient appointment system with minimal waiting times
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                <HeartPulse className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Patient-Centered</h3>
                <p className="text-muted-foreground">
                  Personalized care focused on your unique needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                We're here to help. Reach out to us with any questions or to
                schedule an appointment.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>04-2558804</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>
                    Ground & Mezzanine Floor, Doha Centre, Al Maktoum
                    Road, Deira, Dubai.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span>Mon-Fri: 8am-8pm, Sat: 9am-5pm, Sun: Closed</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.93838182427!2d55.313813974379315!3d25.26417152898661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccc8fe40eb3%3A0x611410df2bbf455c!2sDoha%20Centre!5e1!3m2!1sen!2s!4v1743667870898!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
