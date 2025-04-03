import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Patient Testimonials</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear what our patients have to say about their experience at Smartcare Polyclinic
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Quote className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">
                "The care I received at Smartcare Polyclinic was exceptional. The doctors were attentive and took the
                time to explain everything clearly."
              </p>
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-muted-foreground">Cardiology Patient</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <Quote className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">
                "The online booking system made scheduling appointments so convenient. I was able to see my doctor
                quickly without any hassle."
              </p>
              <div>
                <p className="font-semibold">Maria Garcia</p>
                <p className="text-sm text-muted-foreground">Regular Patient</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <Quote className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">
                "I've been bringing my children to Smartcare for years. The pediatric team is amazing and always makes
                my kids feel comfortable."
              </p>
              <div>
                <p className="font-semibold">Robert Johnson</p>
                <p className="text-sm text-muted-foreground">Parent of Pediatric Patients</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

