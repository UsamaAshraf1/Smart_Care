import Link from "next/link"
import Image from "next/image"
import { HeartPulse, Brain, Bone, Baby, Stethoscope, Microscope, ChevronRight, Users } from "lucide-react"

export default function DepartmentsPage() {
  const departments = [
    {
      id: "general-practice",
      name: "General Practice",
      description:
        "Comprehensive primary healthcare services for patients of all ages, focusing on preventive care and overall wellness.",
      icon: <Stethoscope className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "dentistry",
      name: "Dentistry",
      description:
        "Complete dental care services including preventive, restorative, and cosmetic treatments for optimal oral health.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-red"
        >
          <path d="M12 5.5c-1.5-1-2-2.5-2-3.5 0-1.5.5-2 2-2s2 .5 2 2c0 1-.5 2.5-2 3.5z" />
          <path d="M8.5 8.5c-1.5-1.5-3-2-4-2-1.5 0-2 .5-2 2s.5 2 2 2c1 0 2.5-.5 4-2z" />
          <path d="M15.5 8.5c1.5-1.5 3-2 4-2 1.5 0 2 .5 2 2s-.5 2-2 2c-1 0-2.5-.5-4-2z" />
          <path d="M12 18.5c-1.5 1-2 2.5-2 3.5 0 1.5.5 2 2 2s2-.5 2-2c0-1-.5-2.5-2-3.5z" />
          <path d="M8.5 15.5c-1.5 1.5-3 2-4 2-1.5 0-2-.5-2-2s.5-2 2-2c1 0 2.5.5 4 2z" />
          <path d="M15.5 15.5c1.5 1.5 3 2 4 2 1.5 0 2-.5 2-2s-.5-2-2-2c-1 0-2.5.5-4 2z" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "dermatology",
      name: "Dermatology & Aesthetics",
      description:
        "Expert care for skin conditions and aesthetic treatments to enhance your natural beauty and skin health.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-red"
        >
          <path d="M8 14v.5"></path>
          <path d="M12 14v.5"></path>
          <path d="M16 14v.5"></path>
          <path d="M17 18.5a9 9 0 1 0-10 0"></path>
        </svg>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "gynecology",
      name: "Gynecology",
      description: "Specialized care for women's health issues, including reproductive and hormonal health management.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-red"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M7 16.3c0-1 1.2-2.1 2.7-2.6a9 9 0 0 1 4.6 0c1.5.5 2.7 1.6 2.7 2.6"></path>
        </svg>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.",
      icon: <Baby className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "internal-medicine",
      name: "Internal Medicine",
      description:
        "Comprehensive care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases.",
      icon: <Stethoscope className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "family-medicine",
      name: "Family Medicine",
      description: "Holistic healthcare for the entire family, addressing health concerns at every stage of life.",
      icon: <Users className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "neurology",
      name: "Neurology",
      description:
        "Specialized care for disorders of the brain, spine, and nervous system, using advanced diagnostic techniques.",
      icon: <Brain className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      description:
        "Expert care for bone and joint conditions, injuries, and disorders, with both surgical and non-surgical treatments.",
      icon: <Bone className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "tcam",
      name: "TCAM*",
      description:
        "Traditional, Complementary and Alternative Medicine integrating ancient healing practices with modern healthcare.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-red"
        >
          <path d="M12 2L4 10l8 8 8-8-8-8z"></path>
          <path d="M4 22h16"></path>
          <path d="M12 18v4"></path>
        </svg>
      ),
      image: "/placeholder.svg?height=300&width=500",
      comingSoon: true,
    },
    {
      id: "cardiology",
      name: "Cardiology*",
      description: "Comprehensive heart care with advanced diagnostic and treatment options for cardiac conditions.",
      icon: <HeartPulse className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
      comingSoon: true,
    },
    {
      id: "laboratory",
      name: "Laboratory",
      description: "State-of-the-art diagnostic testing services to support accurate diagnosis and treatment planning.",
      icon: <Microscope className="h-8 w-8 text-brand-red" />,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "home-healthcare",
      name: "Home Healthcare",
      description: "Bringing quality healthcare to your doorstep with our dedicated team of healthcare professionals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-red"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      image: "/placeholder.svg?height=300&width=500",
      comingSoon: true,
      comingSoonText: "Coming in 2-3 months",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Departments</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Specialized care across multiple medical disciplines to address all your healthcare needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-blue/10 to-brand-blue/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <div
                key={department.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <div className="relative h-[200px] w-full">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {department.comingSoon && (
                    <div className="absolute top-4 left-4 z-20 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
                      {department.comingSoonText || "Coming Soon"}
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="rounded-full bg-white p-3 shadow-md">{department.icon}</div>
                </div>
                <div className="bg-white p-6 relative z-20">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                    {department.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-gray-700 transition-colors">
                    {department.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-brand-blue/20 transition-colors">
                    <Link
                      href={`/departments/${department.id}`}
                      className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-red transition-colors"
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

