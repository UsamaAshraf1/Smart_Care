import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartPulse, Brain, Baby, Stethoscope, CheckCircle2 } from "lucide-react"
import { DoctorCard } from "@/components/doctor-card"

interface DepartmentPageProps {
  params: {
    id: string
  }
}

export default function DepartmentPage({ params }: DepartmentPageProps) {
  // This would typically come from a database
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
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Robert Williams",
          specialty: "Interventional Cardiology",
          href: "/doctors/robert-williams",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. James Chen",
          specialty: "Cardiac Electrophysiology",
          href: "/doctors/james-chen",
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
        "Multiple Sclerosis Management",
        "Epilepsy Management",
        "Headache and Migraine Treatment",
        "Stroke Prevention and Recovery",
      ],
      doctors: [
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Michael Chen",
          specialty: "Neurology",
          href: "/doctors/michael-chen",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Lisa Rodriguez",
          specialty: "Neurophysiology",
          href: "/doctors/lisa-rodriguez",
        },
      ],
    },
    // Add more departments as needed
    pediatrics: {
      name: "Pediatrics",
      description:
        "Our Pediatrics Department provides comprehensive healthcare for infants, children, and adolescents. Our pediatricians are dedicated to providing compassionate care and supporting the healthy development of your child.",
      icon: <Baby className="h-12 w-12" />,
      image: "/placeholder.svg?height=400&width=800",
      services: [
        "Well-Child Visits",
        "Immunizations",
        "Growth and Development Monitoring",
        "Acute Illness Care",
        "Chronic Disease Management",
        "Behavioral Health Screening",
        "Nutrition Counseling",
        "Adolescent Medicine",
      ],
      doctors: [
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. Emily Rodriguez",
          specialty: "Pediatrics",
          href: "/doctors/emily-rodriguez",
        },
        {
          image: "/placeholder.svg?height=300&width=300",
          name: "Dr. David Kim",
          specialty: "Pediatric Cardiology",
          href: "/doctors/david-kim",
        },
      ],
    },
  }

  const department = departments[params.id as keyof typeof departments] || {
    name: "Department Not Found",
    description: "The requested department information is not available.",
    icon: <Stethoscope className="h-12 w-12" />,
    image: "/placeholder.svg?height=400&width=800",
    services: [],
    doctors: [],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-primary/10">{department.icon}</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{department.name}</h1>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{department.description}</p>
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
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
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
            <TabsContent value="services" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {department.services.map((service, index) => (
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
                {department.doctors.map((doctor, index) => (
                  <DoctorCard
                    key={index}
                    image={doctor.image}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    href={doctor.href}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

