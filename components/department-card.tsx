import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

interface DepartmentCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function DepartmentCard({ icon, title, description, href }: DepartmentCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex flex-col items-center p-6 text-center space-y-4 flex-grow">
        <div className="p-2 rounded-full bg-primary/10">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Link href={href} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

