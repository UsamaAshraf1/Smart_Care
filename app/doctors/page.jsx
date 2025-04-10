"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetDoctors } from "@/Network/Doctors";

export default function DoctorsPage() {
  const [doctorsData, setDoctorsData] = useState([]);

  const fetchDoctors = async () => {
    const response = await GetDoctors();
    setDoctorsData(response?.data);
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
  // This would typically come from a database
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Doctors
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Meet our team of experienced healthcare professionals dedicated
                to providing exceptional care
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-blue/10 to-brand-blue/5">
        <div className="container px-4 md:px-6">
          <div className="mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="relative">
                <input
                  placeholder="Search by name..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue">
                <option value="all">All Specialties</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="internal-medicine">Internal Medicine</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-brand-blue text-brand-blue rounded-md hover:bg-brand-blue hover:text-white transition-colors">
                Reset Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctorsData.map((doctor, index) => (
              // <div
              //   key={index}
              //   className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
              // >
              //   <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

              //   <div className="relative h-[250px] w-full overflow-hidden">
              //     <Image
              //       src={doctor.image || "/placeholder.svg"}
              //       alt={doctor.name}
              //       fill
              //       className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              //     />
              //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              //   </div>

              //   {/* Specialty Badge */}
              //   <div className="absolute top-4 left-4 z-20">
              //     <div className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
              //       {doctor.specialty}
              //     </div>
              //   </div>

              //   {/* Experience Badge */}
              //   <div className="absolute top-4 right-4 z-20">
              //     <div className="bg-white text-brand-blue text-xs font-bold px-3 py-1 rounded-full shadow-md">
              //       {index % 2 === 0
              //         ? "10+ years"
              //         : index % 3 === 0
              //         ? "15+ years"
              //         : "5+ years"}
              //     </div>
              //   </div>

              //   {/* Doctor Info */}
              //   <div className="p-6 relative z-20">
              //     <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
              //       {doctor.name}
              //     </h3>
              //     <p className="text-muted-foreground group-hover:text-white/80 transition-colors mb-4">
              //       {doctor.specialty}
              //     </p>

              //     {/* Availability */}
              //     <div className="flex items-center mb-4 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         className="h-5 w-5 mr-2 text-brand-blue group-hover:text-white transition-colors"
              //         fill="none"
              //         viewBox="0 0 24 24"
              //         stroke="currentColor"
              //       >
              //         <path
              //           strokeLinecap="round"
              //           strokeLinejoin="round"
              //           strokeWidth={2}
              //           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              //         />
              //       </svg>
              //       <span>
              //         Next Available:{" "}
              //         {index % 3 === 0
              //           ? "Today"
              //           : index % 2 === 0
              //           ? "Tomorrow"
              //           : "In 2 days"}
              //       </span>
              //     </div>

              //     <div className="flex justify-between items-center pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors">
              //       <Link
              //         href={doctor.href}
              //         className="text-brand-blue font-medium group-hover:text-white transition-colors"
              //       >
              //         View Profile
              //       </Link>
              //       <Link
              //         href={`/appointments/book?doctor=${doctor.href
              //           .split("/")
              //           .pop()}`}
              //         className="px-3 py-1 bg-brand-blue text-white rounded-md hover:bg-brand-red transition-colors group-hover:bg-white group-hover:text-brand-blue"
              //       >
              //         Book Now
              //       </Link>
              //     </div>
              //   </div>
              // </div>
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                <div className="relative h-[250px] w-full overflow-hidden">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {doctor?.department?.name}
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white text-brand-blue text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {doctor?.experience}
                  </div>
                </div>

                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors mb-4">
                    {doctor.specialty}
                  </p>

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
                      href={`doctors/${doctor.name}`}
                      className="text-brand-blue font-medium group-hover:text-white transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={`/appointments/book?doctor`}
                      className="px-3 py-1 bg-brand-blue text-white rounded-md hover:bg-brand-red transition-colors group-hover:bg-white group-hover:text-brand-blue"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
