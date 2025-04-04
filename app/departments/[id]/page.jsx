"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HeartPulse,
  Brain,
  Baby,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import { DoctorCard } from "@/components/doctor-card";
import { GetDepartmentsByName } from "@/Network/Department";

export default function DepartmentPage({ params }) {
  const [departmentsDetail, setDepartmentsDetail] = useState();
  const departments = {
    cardiology: {
      name: "Cardiology",
      description:
        "Our Cardiology Department provides comprehensive care for heart and vascular conditions. Our team of experienced cardiologists uses the latest diagnostic tools and treatments to help patients maintain heart health and manage cardiac conditions.",
      icon: <HeartPulse className="h-12 w-12" />,
      image: "/placeholder.svg?height=400&width=800",
      services: [
        "Cardiac Consultation and Evaluation",
        "Electrocardiogram (ECG/EKG)",
        "Echocardiography",
        "Stress Testing",
        "Holter Monitoring",
        "Cardiac Rehabilitation",
        "Heart Disease Prevention",
        "Pacemaker Management",
      ],
      doctors: [
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Sarah Johnson",
          specialty: "Cardiology",
          href: "/doctors/sarah-johnson",
        },
      ],
    },
    neurology: {
      name: "Neurology",
      description:
        "The Neurology Department specializes in the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our neurologists are committed to providing the highest quality care for patients with neurological conditions.",
      icon: <Brain className="h-12 w-12" />,
      image: "/placeholder.svg?height=400&width=800",
      services: [
        "Neurological Consultation and Evaluation",
        "Electroencephalogram (EEG)",
        "Electromyography (EMG)",
        "Nerve Conduction Studies",
      ],
      doctors: [
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Michael Chen",
          specialty: "Neurology",
          href: "/doctors/michael-chen",
        },
      ],
    },
  };

  // const department = departments[params.id] || {
  //   name: "Department Not Found",
  //   description: "The requested department information is not available.",
  //   icon: <Stethoscope className="h-12 w-12" />,
  //   image: "/placeholder.svg?height=400&width=800",
  //   services: [],
  //   doctors: [],
  // };

  // console.log(params?.id);

  const fetchDetparmentDetail = async () => {
    const Name = decodeURIComponent(params?.id || "");
    const response = await GetDepartmentsByName(Name);
    console.log(response);
    setDepartmentsDetail(response?.data);
  };

  useEffect(() => {
    fetchDetparmentDetail();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    {departmentsDetail?.icon || <HeartPulse className="h-12 w-12" />}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {departmentsDetail?.name}
                  </h1>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {departmentsDetail?.des}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/appointments/book">
                  <Button size="lg">Book Appointment</Button>
                </Link>
                <Link href="/doctors">
                  <Button size="lg" variant="outline">
                    Meet Our Doctors
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full md:h-[400px]">
                <Image
                  src={
                    departmentsDetail?.image ||
                    "/placeholder.svg?height=400&width=800"
                  }
                  alt={departmentsDetail?.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="services" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {departmentsDetail?.services?.map((service, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="doctors" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {departmentsDetail?.doctors.map((doctor, index) => (
                  <DoctorCard
                    key={index}
                    image={doctor.image}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    href={doctor.href}
                  />
                ))}
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
