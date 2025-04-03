import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Calendar,
  FileText,
  Settings,
  CreditCard,
  Clock,
  CheckCircle2,
  Edit,
  Download,
  Bell,
  AlertCircle,
  CreditCardIcon,
  Receipt,
  FileCheck,
  Shield,
  UserCog,
} from "lucide-react"

export default function AccountPage() {
  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "April 15, 2024",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      department: "Neurology",
      date: "May 3, 2024",
      time: "2:00 PM",
      status: "Pending",
    },
  ]

  // Mock data for past appointments
  const pastAppointments = [
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      department: "Pediatrics",
      date: "March 10, 2024",
      time: "9:00 AM",
      status: "Completed",
    },
    {
      id: 4,
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      date: "January 22, 2024",
      time: "11:30 AM",
      status: "Completed",
    },
  ]

  // Mock data for medical records
  const medicalRecords = [
    {
      id: 1,
      title: "Annual Physical Examination",
      doctor: "Dr. John Smith",
      date: "January 15, 2024",
      type: "Examination",
    },
    {
      id: 2,
      title: "Blood Test Results",
      doctor: "Dr. Sarah Johnson",
      date: "January 22, 2024",
      type: "Laboratory",
    },
    {
      id: 3,
      title: "Cardiology Consultation",
      doctor: "Dr. Sarah Johnson",
      date: "January 22, 2024",
      type: "Consultation",
    },
  ]

  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Sarah Johnson is tomorrow at 10:30 AM",
      date: "1 day ago",
      isRead: false,
      type: "appointment",
    },
    {
      id: 2,
      title: "Medical Records Updated",
      message: "Your blood test results have been uploaded to your records",
      date: "2 days ago",
      isRead: true,
      type: "records",
    },
    {
      id: 3,
      title: "Payment Confirmation",
      message: "Your payment of $150 for the last appointment has been processed",
      date: "3 days ago",
      isRead: true,
      type: "billing",
    },
    {
      id: 4,
      title: "Prescription Refill",
      message: "Your prescription refill request has been approved",
      date: "5 days ago",
      isRead: true,
      type: "prescription",
    },
  ]

  // Mock data for billing
  const billingHistory = [
    {
      id: 1,
      service: "Cardiology Consultation",
      date: "January 22, 2024",
      amount: "$150.00",
      status: "Paid",
    },
    {
      id: 2,
      service: "Blood Test",
      date: "January 22, 2024",
      amount: "$75.00",
      status: "Paid",
    },
    {
      id: 3,
      service: "Pediatric Checkup",
      date: "March 10, 2024",
      amount: "$120.00",
      status: "Pending",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Account</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Manage your appointments, medical records, and personal information
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[250px_1fr] lg:gap-12">
            <aside className="flex flex-col space-y-4">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-gradient-to-b from-brand-blue/10 to-white">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Profile" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">Patient ID: P12345</p>
                </div>
              </div>

              {/* Notifications Panel */}
              <Card className="border-brand-blue/20 overflow-hidden">
                <CardHeader className="bg-brand-blue text-white p-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Notifications
                    </CardTitle>
                    <span className="bg-white text-brand-blue text-xs font-bold px-2 py-0.5 rounded-full">
                      {notifications.filter((n) => !n.isRead).length} New
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0 max-h-[250px] overflow-y-auto">
                  {notifications.length > 0 ? (
                    <div className="divide-y">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition-colors ${!notification.isRead ? "bg-brand-blue/5 border-l-4 border-brand-blue" : ""}`}
                        >
                          <div className="flex items-start space-x-3">
                            <div
                              className={`p-2 rounded-full ${
                                notification.type === "appointment"
                                  ? "bg-brand-blue/10 text-brand-blue"
                                  : notification.type === "records"
                                    ? "bg-green-100 text-green-600"
                                    : notification.type === "billing"
                                      ? "bg-amber-100 text-amber-600"
                                      : "bg-purple-100 text-purple-600"
                              }`}
                            >
                              {notification.type === "appointment" ? (
                                <Calendar className="h-4 w-4" />
                              ) : notification.type === "records" ? (
                                <FileText className="h-4 w-4" />
                              ) : notification.type === "billing" ? (
                                <CreditCardIcon className="h-4 w-4" />
                              ) : (
                                <FileCheck className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium">{notification.title}</h4>
                                <span className="text-xs text-muted-foreground">{notification.date}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No notifications</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <nav className="flex flex-col space-y-1">
                    <Link
                      href="/account"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 bg-brand-blue text-white font-medium"
                    >
                      <User className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/account/appointments"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Appointments</span>
                    </Link>
                    <Link
                      href="/account/records"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      <FileText className="h-5 w-5" />
                      <span>Medical Records</span>
                    </Link>
                    <Link
                      href="/account/billing"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Billing</span>
                    </Link>
                    <Link
                      href="/account/settings"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Link>
                  </nav>
                </CardContent>
              </Card>
            </aside>

            <div className="space-y-6">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-brand-blue/10">
                  <TabsTrigger
                    value="appointments"
                    className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                  >
                    Appointments
                  </TabsTrigger>
                  <TabsTrigger
                    value="records"
                    className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                  >
                    Medical Records
                  </TabsTrigger>
                  <TabsTrigger
                    value="billing"
                    className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                  >
                    Billing
                  </TabsTrigger>
                  <TabsTrigger
                    value="profile"
                    className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                  >
                    Profile
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="appointments" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Your Appointments</h2>
                    <Link href="/appointments/book">
                      <Button className="bg-brand-blue hover:bg-brand-blue/90">Book New Appointment</Button>
                    </Link>
                  </div>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Upcoming Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {upcomingAppointments.length > 0 ? (
                        <div className="space-y-4">
                          {upcomingAppointments.map((appointment) => (
                            <div
                              key={appointment.id}
                              className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:border-brand-blue/30 hover:shadow-sm transition-all"
                            >
                              <div className="space-y-1">
                                <div className="font-medium text-brand-blue">{appointment.doctor}</div>
                                <div className="text-sm text-muted-foreground">{appointment.department}</div>
                                <div className="flex items-center text-sm">
                                  <Calendar className="mr-1 h-4 w-4 text-brand-blue" />
                                  {appointment.date}
                                </div>
                                <div className="flex items-center text-sm">
                                  <Clock className="mr-1 h-4 w-4 text-brand-blue" />
                                  {appointment.time}
                                </div>
                                <div className="flex items-center text-sm">
                                  {appointment.status === "Confirmed" ? (
                                    <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                                  ) : (
                                    <Clock className="mr-1 h-4 w-4 text-amber-500" />
                                  )}
                                  <span
                                    className={`${
                                      appointment.status === "Confirmed" ? "text-green-500" : "text-amber-500"
                                    }`}
                                  >
                                    {appointment.status}
                                  </span>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4 md:mt-0">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                                >
                                  Reschedule
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-brand-red border-brand-red hover:bg-brand-red/10"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground">No upcoming appointments</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Past Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {pastAppointments.length > 0 ? (
                        <div className="space-y-4">
                          {pastAppointments.map((appointment) => (
                            <div
                              key={appointment.id}
                              className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:border-brand-blue/30 hover:shadow-sm transition-all"
                            >
                              <div className="space-y-1">
                                <div className="font-medium text-brand-blue">{appointment.doctor}</div>
                                <div className="text-sm text-muted-foreground">{appointment.department}</div>
                                <div className="flex items-center text-sm">
                                  <Calendar className="mr-1 h-4 w-4 text-brand-blue" />
                                  {appointment.date}
                                </div>
                                <div className="flex items-center text-sm">
                                  <Clock className="mr-1 h-4 w-4 text-brand-blue" />
                                  {appointment.time}
                                </div>
                                <div className="flex items-center text-sm">
                                  <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                                  <span className="text-green-500">{appointment.status}</span>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4 md:mt-0">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                                >
                                  View Details
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                                >
                                  Book Again
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground">No past appointments</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="records" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Medical Records</h2>
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                      Request Records
                    </Button>
                  </div>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Your Medical Records</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      {medicalRecords.length > 0 ? (
                        <div className="space-y-4">
                          {medicalRecords.map((record) => (
                            <div
                              key={record.id}
                              className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:border-brand-blue/30 hover:shadow-sm transition-all"
                            >
                              <div className="space-y-1">
                                <div className="font-medium text-brand-blue">{record.title}</div>
                                <div className="text-sm text-muted-foreground">{record.doctor}</div>
                                <div className="flex items-center text-sm">
                                  <Calendar className="mr-1 h-4 w-4 text-brand-blue" />
                                  {record.date}
                                </div>
                                <div className="flex items-center text-sm">
                                  <FileText className="mr-1 h-4 w-4 text-brand-blue" />
                                  {record.type}
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4 md:mt-0">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                                >
                                  <Download className="mr-1 h-4 w-4" />
                                  Download
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground">No medical records available</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Health Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 p-4 border rounded-lg">
                          <h3 className="font-bold flex items-center text-brand-blue">
                            <AlertCircle className="mr-2 h-5 w-5" />
                            Allergies
                          </h3>
                          <ul className="space-y-1 text-sm">
                            <li>Penicillin</li>
                            <li>Peanuts</li>
                          </ul>
                        </div>
                        <div className="space-y-2 p-4 border rounded-lg">
                          <h3 className="font-bold flex items-center text-brand-blue">
                            <Pill className="mr-2 h-5 w-5" />
                            Current Medications
                          </h3>
                          <ul className="space-y-1 text-sm">
                            <li>Lisinopril 10mg - Once daily</li>
                            <li>Metformin 500mg - Twice daily</li>
                          </ul>
                        </div>
                        <div className="space-y-2 p-4 border rounded-lg">
                          <h3 className="font-bold flex items-center text-brand-blue">
                            <Activity className="mr-2 h-5 w-5" />
                            Vital Statistics
                          </h3>
                          <ul className="space-y-1 text-sm">
                            <li>Blood Pressure: 120/80 mmHg</li>
                            <li>Heart Rate: 72 bpm</li>
                            <li>Weight: 70 kg</li>
                            <li>Height: 175 cm</li>
                          </ul>
                        </div>
                        <div className="space-y-2 p-4 border rounded-lg">
                          <h3 className="font-bold flex items-center text-brand-blue">
                            <FileCheck className="mr-2 h-5 w-5" />
                            Immunizations
                          </h3>
                          <ul className="space-y-1 text-sm">
                            <li>Influenza - Oct 2023</li>
                            <li>COVID-19 - May 2023</li>
                            <li>Tetanus - Jan 2020</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="billing" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Billing & Payments</h2>
                    <Button className="bg-brand-blue hover:bg-brand-blue/90">Make a Payment</Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border-brand-blue/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-brand-blue/10 mb-4">
                          <Receipt className="h-8 w-8 text-brand-blue" />
                        </div>
                        <h3 className="font-bold text-xl">$345.00</h3>
                        <p className="text-muted-foreground">Current Balance</p>
                      </CardContent>
                    </Card>
                    <Card className="border-brand-blue/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-green-100 mb-4">
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-bold text-xl">$225.00</h3>
                        <p className="text-muted-foreground">Paid (Last 30 days)</p>
                      </CardContent>
                    </Card>
                    <Card className="border-brand-blue/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-amber-100 mb-4">
                          <Clock className="h-8 w-8 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-xl">$120.00</h3>
                        <p className="text-muted-foreground">Pending Insurance</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Payment History</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Service</th>
                              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {billingHistory.map((item) => (
                              <tr key={item.id} className="hover:bg-muted/50">
                                <td className="py-3 px-4">{item.service}</td>
                                <td className="py-3 px-4">{item.date}</td>
                                <td className="py-3 px-4">{item.amount}</td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      item.status === "Paid"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-amber-100 text-amber-800"
                                    }`}
                                  >
                                    {item.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/10"
                                  >
                                    View Receipt
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-md bg-blue-100">
                            <CreditCardIcon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 04/25</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/10"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-brand-red hover:text-brand-red/80 hover:bg-brand-red/10"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-dashed border-brand-blue/50 text-brand-blue hover:bg-brand-blue/10"
                      >
                        + Add Payment Method
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="profile" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Personal Information</h2>
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                      <Edit className="mr-1 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Full Name</p>
                          <p className="font-medium">John Doe</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Date of Birth</p>
                          <p className="font-medium">January 15, 1985</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">john.doe@example.com</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">+1 (555) 123-4567</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="font-medium">123 Main Street, Apt 4B</p>
                          <p className="font-medium">New York, NY 10001</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Emergency Contact</p>
                          <p className="font-medium">Jane Doe</p>
                          <p className="font-medium">+1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Insurance Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Insurance Provider</p>
                          <p className="font-medium">HealthPlus Insurance</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Policy Number</p>
                          <p className="font-medium">HP123456789</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Group Number</p>
                          <p className="font-medium">GRP987654</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Coverage Start Date</p>
                          <p className="font-medium">January 1, 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-brand-blue/20">
                    <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-blue/5">
                      <CardTitle>Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-md bg-brand-blue/10">
                              <Shield className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <p className="font-medium">Password</p>
                              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                          >
                            Change Password
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-md bg-brand-blue/10">
                              <UserCog className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <p className="font-medium">Two-Factor Authentication</p>
                              <p className="text-sm text-muted-foreground">Enhance your account security</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                          >
                            Enable
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 rounded-md bg-brand-blue/10">
                              <Bell className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <p className="font-medium">Notification Preferences</p>
                              <p className="text-sm text-muted-foreground">Manage how you receive alerts</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                          >
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Missing import for the Activity icon
import { Activity, Pill } from "lucide-react"

