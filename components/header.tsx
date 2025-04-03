"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import Logo from "../public/Logo.svg";

export function Header() {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-brand-blue">Smart</span>
            <span className="text-brand-red">care</span>
            <span> Polyclinic</span>
          </span> */}
          <div>
            <Image
              src={Logo} // Replace with your logo path
              alt="Smartcare Polyclinic Logo"
              className="object-contain w-full h-[70px]"
            />
          </div>
        </Link>
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {/* <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link> */}
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/departments" onClick={() => setIsOpen(false)}>
                  Departments
                </Link>
                <Link href="/doctors" onClick={() => setIsOpen(false)}>
                  Doctors
                </Link>
                <Link
                  href="/appointments/book"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 desktop_view_nav_items">
            <NavigationMenu>
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/departments/cardiology"
                        title="Cardiology"
                      >
                        Heart care specialists and treatments
                      </ListItem>
                      <ListItem href="/departments/neurology" title="Neurology">
                        Brain and nervous system care
                      </ListItem>
                      <ListItem
                        href="/departments/orthopedics"
                        title="Orthopedics"
                      >
                        Bone and joint specialists
                      </ListItem>
                      <ListItem
                        href="/departments/pediatrics"
                        title="Pediatrics"
                      >
                        Child healthcare specialists
                      </ListItem>
                      <ListItem href="/departments" title="View All">
                        See all departments and specialties
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/doctors" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Doctors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/appointments/book" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Book Appointment
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/login">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
