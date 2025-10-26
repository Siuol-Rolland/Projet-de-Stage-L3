"use client"

import {
  Activity,
  Stethoscope,
  Calendar,
  ClipboardList,
  Heart,
  Home,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Wallet,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/main/card"
import { Button } from "@/components/ui/button"
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/main/chart"
import { useState } from "react"

const bodyFluidData = [
  { name: "Extracellular", value: 20, color: "#56a5fd" },
  { name: "Intracellular", value: 30, color: "#a78bfa" },
  { name: "Mineral", value: 10, color: "#60d5f5" },
  { name: "Protein", value: 16.8, color: "#4f46e5" },
  { name: "Carbohydrates", value: 6.9, color: "#8b5cf6" },
]

const solidCompositionData = [
  { name: "Fat Mass", value: 87, color: "#56a5fd" },
  { name: "Lean Mass", value: 67, color: "#60d5f5" },
  { name: "Other", value: 46, color: "#a78bfa" },
]


export default function MainPage() {
  const [currentMonth, setCurrentMonth] = useState("January 2022")
  const [selectedDate, setSelectedDate] = useState(18)

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)
  const startDay = 6 // Saturday

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-border flex flex-col items-center py-6 gap-8">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Stethoscope className="w-6 h-6 text-primary-foreground" />
        </div>

        <nav className="flex flex-col gap-6 flex-1">
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Home className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <ClipboardList className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </nav>

        <div className="flex flex-col gap-6">
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Hi Andri Setiawan,</p>
              <h1 className="text-3xl font-bold text-foreground">Welcome Back!</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity relative">
                <Bell className="w-5 h-5 text-primary-foreground" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Card */}
              <Card className="bg-primary border-0 overflow-hidden">
                <CardContent className="p-8 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-primary-foreground/80 text-sm mb-2">Reminder</p>
                    <h2 className="text-2xl font-bold text-primary-foreground mb-6 leading-tight">
                      Have You Had a<br />
                      Routine Health Check
                      <br />
                      This Month?
                    </h2>
                    <div className="flex gap-3">
                      <Button className="bg-white/20 hover:bg-white/30 text-primary-foreground border-0">
                        Check Now
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white/30 text-primary-foreground hover:bg-white/10"
                      >
                        View Report
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img src="/dash1.png" alt="Doctor" className="h-72 w-auto object-contain" />
                  </div>
                </CardContent>
              </Card>

              {/* Health Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-white border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Heart Rate</p>
                        <p className="text-lg font-bold text-foreground">
                          80 <span className="text-xs font-normal">beats / min</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Blood Glucose</p>
                        <p className="text-lg font-bold text-foreground">
                          4.75 <span className="text-xs font-normal">liters</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Oxygen Level</p>
                        <p className="text-lg font-bold text-foreground">
                          5 <span className="text-xs font-normal">million / ml</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Body Fluid Composition */}
                <Card className="bg-white border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">
                          Body Fluid Composition
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">100% of the total</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-accent">+ 0.15%</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Percentage",
                        },
                      }}
                      className="h-[200px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={bodyFluidData}>
                          <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                          <YAxis hide />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            {bodyFluidData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {bodyFluidData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-xs text-muted-foreground">{item.name}</span>
                          <span className="text-xs font-semibold text-foreground">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Composition of Solids */}
                <Card className="bg-white border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">Composition of Solids</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">
                          Atomic and molecular
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary/80">
                        View Report
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Value",
                        },
                      }}
                      className="h-[200px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={solidCompositionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {solidCompositionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex flex-col gap-2 mt-4">
                      {solidCompositionData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs text-muted-foreground">{item.name}</span>
                          </div>
                          <span className="text-xs font-semibold text-foreground">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Check-Up Badge */}
              <div className="bg-white rounded-2xl p-4 border border-border flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Upcoming Check-Up</span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center relative">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-[10px] text-white flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>

              {/* Calendar */}
              <Card className="bg-white border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-foreground">{currentMonth}</CardTitle>
                    <div className="flex gap-2">
                      <button className="w-6 h-6 rounded-md hover:bg-muted flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="w-6 h-6 rounded-md hover:bg-muted flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: startDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {daysInMonth.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          aspect-square rounded-lg text-sm font-medium transition-colors
                          ${
                            day === selectedDate
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted text-foreground"
                          }
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Your Last Health Check */}
              <Card className="bg-white border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-foreground">Your Last Health Check</CardTitle>
                    <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary/80">
                      View all →
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Dental Health</p>
                      <p className="text-xs text-muted-foreground">November 22, 2021</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Brain IQ Test</p>
                      <p className="text-xs text-muted-foreground">October 15, 2021</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Regular Kidney Check</p>
                      <p className="text-xs text-muted-foreground">August 12, 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Balance */}
              <Card className="bg-gradient-to-br from-primary to-accent border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-primary-foreground/80 mb-1">Insurance Balance</p>
                      <p className="text-3xl font-bold text-primary-foreground">$24,000</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">VC</span>
                    </div>
                    <span className="text-sm text-primary-foreground/90">Your Card</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div> 
  )
}
