import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DoctorCardProps {
  image: string
  name: string
  specialty: string
  href: string
}

export function DoctorCard({ image, name, specialty, href }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{specialty}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6 flex justify-center">
        <Link href={href} className="w-full">
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

