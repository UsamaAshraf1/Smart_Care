import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Smartcare Polyclinic</h3>
            <p className="text-sm text-muted-foreground">
              Providing quality healthcare services with compassion and expertise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-muted-foreground hover:text-foreground">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-foreground">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments/book" className="text-muted-foreground hover:text-foreground">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/departments/cardiology" className="text-muted-foreground hover:text-foreground">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/departments/neurology" className="text-muted-foreground hover:text-foreground">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/departments/orthopedics" className="text-muted-foreground hover:text-foreground">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/departments/pediatrics" className="text-muted-foreground hover:text-foreground">
                  Pediatrics
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contact@smartcare.com</span>
              </li>
              <li>
                <address className="not-italic">
                  123 Medical Center Drive
                  <br />
                  Healthcare City, HC 12345
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smartcare Polyclinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

