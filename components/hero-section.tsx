import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero_image from "../public/smartCare_hero.jpg";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_image}
          alt="Dubai Smartcare Polyclinic"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Your Health Is Our Priority
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Smartcare Polyclinic offers comprehensive healthcare services
                with cutting-edge technology and compassionate care in the heart
                of Dubai.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/appointments/book">
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/departments">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:text-white"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <Image
                src="https://marketplace.canva.com/EAGIenJ__Xk/2/0/1131w/canva-brown-watercolor-floral-aesthetic-background-document-a4-20Wu25IS9UM.jpg"
                alt="Smartcare Polyclinic"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
