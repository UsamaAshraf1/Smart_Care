"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
import { BookingWidget } from "@/components/booking-widget";
import { useSearchParams } from "next/navigation";
import { GetDoctors } from "@/Network/Doctors";

export default function DoctorPage({ params }) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "about";
  const [doctor, setDoctor] = useState();

  const decodedId = decodeURIComponent(params?.id || "").replace(/%20/g, " ");
  console.log(decodedId);

  // const doctors = {
  //   "sarah-johnson": {
  //     name: "Dr. Sarah Johnson",
  //     title: "Cardiologist",
  //     image: "/placeholder.svg?height=400&width=400",
  //     description:
  //       "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology and heart failure management.",
  //     education: [
  //       "M.D., Harvard Medical School",
  //       "Residency in Internal Medicine, Massachusetts General Hospital",
  //       "Fellowship in Cardiology, Cleveland Clinic",
  //     ],
  //     experience: [
  //       "Chief of Cardiology, Smartcare Polyclinic (Current)",
  //       "Attending Physician, City General Hospital (2010-2018)",
  //       "Assistant Professor of Medicine, State University Medical Center (2008-2010)",
  //     ],
  //     specialties: [
  //       "Preventive Cardiology",
  //       "Heart Failure Management",
  //       "Cardiac Rehabilitation",
  //       "Echocardiography",
  //     ],
  //     certifications: [
  //       "American Board of Internal Medicine - Cardiovascular Disease",
  //       "Advanced Cardiac Life Support (ACLS)",
  //       "Fellow of the American College of Cardiology (FACC)",
  //     ],
  //     languages: ["English", "Spanish"],
  //     ratings: 4.9,
  //     reviewCount: 127,
  //   },
  //   "michael-chen": {
  //     name: "Dr. Michael Chen",
  //     title: "Neurologist",
  //     image: "/placeholder.svg?height=400&width=400",
  //     description:
  //       "Dr. Michael Chen is a highly skilled neurologist specializing in the diagnosis and treatment of neurological disorders. With a focus on stroke prevention and treatment, he brings cutting-edge care to his patients.",
  //     education: [
  //       "M.D., Johns Hopkins University School of Medicine",
  //       "Residency in Neurology, UCSF Medical Center",
  //       "Fellowship in Vascular Neurology, Mayo Clinic",
  //     ],
  //     experience: [
  //       "Director of Stroke Program, Smartcare Polyclinic (Current)",
  //       "Neurologist, University Hospital (2012-2019)",
  //       "Clinical Researcher, Neurological Institute (2009-2012)",
  //     ],
  //     specialties: [
  //       "Stroke Prevention and Treatment",
  //       "Headache Disorders",
  //       "Neuromuscular Diseases",
  //       "Epilepsy Management",
  //     ],
  //     certifications: [
  //       "American Board of Psychiatry and Neurology",
  //       "Vascular Neurology Certification",
  //       "Fellow of the American Academy of Neurology (FAAN)",
  //     ],
  //     languages: ["English", "Mandarin"],
  //     ratings: 4.8,
  //     reviewCount: 93,
  //   },
  //   "emily-rodriguez": {
  //     name: "Dr. Emily Rodriguez",
  //     title: "Pediatrician",
  //     image: "/placeholder.svg?height=400&width=400",
  //     description:
  //       "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from birth through adolescence. She focuses on preventive care and developmental pediatrics.",
  //     education: [
  //       "M.D., Stanford University School of Medicine",
  //       "Residency in Pediatrics, Children's Hospital of Philadelphia",
  //       "Fellowship in Developmental Pediatrics, Boston Children's Hospital",
  //     ],
  //     experience: [
  //       "Lead Pediatrician, Smartcare Polyclinic (Current)",
  //       "Pediatrician, Children's Medical Group (2013-2020)",
  //       "Clinical Instructor, Medical University Pediatric Department (2011-2013)",
  //     ],
  //     specialties: [
  //       "Well-Child Care",
  //       "Developmental Pediatrics",
  //       "Behavioral Health",
  //       "Adolescent Medicine",
  //     ],
  //     certifications: [
  //       "American Board of Pediatrics",
  //       "Pediatric Advanced Life Support (PALS)",
  //       "Fellow of the American Academy of Pediatrics (FAAP)",
  //     ],
  //     languages: ["English", "Spanish"],
  //     ratings: 4.9,
  //     reviewCount: 156,
  //   },
  // };

  // const doctor = doctors[params.id] || {
  //   name: "Doctor Not Found",
  //   title: "",
  //   image: "/placeholder.svg?height=400&width=400",
  //   description: "The requested doctor information is not available.",
  //   education: [],
  //   experience: [],
  //   specialties: [],
  //   certifications: [],
  //   languages: [],
  //   ratings: 0,
  //   reviewCount: 0,
  // };

  const fetchDoctors = async () => {
    const response = await GetDoctors();
    const matchedDoctor = response.data.find(
      (doctor) => doctor.name === decodedId
    );
    setDoctor(matchedDoctor);
  };
  useEffect(() => {
    fetchDoctors();
  }, []);

  console.log(doctor);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {doctor?.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {doctor?.department?.name}
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(doctor?.averageRating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {doctor?.averageRating} ({doctor?.reviewCount || 0} reviews)
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground">{doctor?.department?.des}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Link href={`/doctors/${params?.id}?tab=booking`}> */}
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                >
                  Book Appointment
                </Button>
                {/* </Link> */}
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" /> Contact
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-background shadow-xl">
                <Image
                  src={doctor?.image || "/placeholder.svg"}
                  alt={doctor?.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue={activeTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="specialties">Specialties</TabsTrigger>
              <TabsTrigger value="booking">Book Now</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Languages</h3>
                      <ul className="space-y-1">
                        {doctor?.languages?.map((language, index) => (
                          <li key={index}>{language}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Certifications</h3>
                      <ul className="space-y-1">
                        {/* {doctor?.educationCertifications?.map(
                          (certification, index) => ( */}
                        <li className="flex items-start space-x-2">
                          <Award className="h-5 w-5 text-primary mt-0.5" />
                          <span>{doctor?.educationCertifications?.FCPS}</span>
                        </li>
                        {/* )
                        )} */}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Education & Training
                  </h3>
                  <ul className="space-y-4">
                    {doctor?.education?.map((edu, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Professional Experience
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-2">
                      <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                      <span>{doctor?.experience}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specialties" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Clinical Specialties
                  </h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    {doctor?.specialties?.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 rounded-md bg-primary/5"
                      >
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="booking" className="mt-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                  <CardTitle>Book an Appointment with {doctor?.name}</CardTitle>
                </CardHeader>
                {/* <CardContent className="p-6">
                  <BookingWidget
                    doctorId={params?.id}
                    doctorName={doctor?.name}
                  />
                </CardContent> */}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Schedule an Appointment
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
            Ready to meet with {doctor?.name}? Book your appointment now.
          </p>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Available Monday - Friday</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Smartcare Polyclinic, 123 Medical Center Drive</span>
            </div>
            {/* <Link href={`/doctors/${params?.id}?tab=booking`} className="mt-4">
              <Button size="lg">Book Appointment</Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
