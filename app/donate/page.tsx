"use client"

import { Suspense, lazy } from "react"
import dynamic from "next/dynamic" // Implemented dynamic import
import { 
  Rocket, 
  Globe, 
  Heart, 
  GraduationCap, 
  Satellite, 
  CreditCard, 
  Landmark,
  UploadCloud
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactFooter } from "@/components/contact-footer"

// ✅ FIX 1: Dynamically load Starfield with SSR disabled to prevent Hydration Freeze
const Starfield = dynamic(() => import("@/components/starfield").then((mod) => mod.Starfield), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0A0E27]" /> // Instant dark background while loading
})

// ✅ FIX 2: Lazy load heavy interactive tabs
const LazyMissionTabs = lazy(() => import("@/components/mission-tabs"))

// ✅ FIX 3: Create a Skeleton Loader to prevent Layout Shift while tabs load
function TabsSkeleton() {
  return (
    <div className="w-full space-y-4 animate-pulse">
      <div className="flex gap-2 justify-center mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-10 w-32 bg-white/10 rounded-md" />
        ))}
      </div>
      <div className="h-64 bg-white/5 rounded-xl border border-white/10" />
    </div>
  )
}

export default function DonationPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-foreground relative overflow-x-hidden font-sans">
      
      {/* Background Layer - Fixed & Non-Blocking */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent pb-2">
              Donate for Mission ShakthiSAT
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Invest in the future of women in space exploration.
            </p>
          </div>

          {/* Mission Statement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
            {/* Left Column - Headline */}
            <div className="md:col-span-5 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  To the Moon We Rise <span className="text-4xl align-middle">🌙🚀</span>
                </h2>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] bg-clip-text text-transparent">
                    Be Part of History.<br />
                    Be Part of Mission ShakthiSAT.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Description */}
            <div className="md:col-span-7">
              <Card className="bg-card/40 border-border hover:border-primary/30 transition-colors backdrop-blur-sm">
                <CardContent className="p-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Mission ShakthiSAT is the <strong className="text-primary">world&apos;s first all-girls, international lunar satellite mission</strong>. 
                    It brings together young girls and women from <strong className="text-secondary">108 countries</strong>, not as symbolic participants, but as <strong className="text-[#FFD700]">active contributors</strong> to a real space mission.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xl font-semibold text-center text-foreground">
                      This is not charity. This is participation in a historic shift.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Tabs Section - Wrapped in Suspense with Skeleton */}
          <section className="mb-20">
            <Suspense fallback={<TabsSkeleton />}>
              <LazyMissionTabs />
            </Suspense>
          </section>

          {/* Why Your Donation Matters */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-foreground">Why Your Donation Matters</h2>
            <Card className="max-w-4xl mx-auto bg-card/30 border-secondary/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your contribution directly removes barriers that prevent girls and young women from entering STEM. For many, Mission ShakthiSAT is their first opportunity to access advanced scientific infrastructure and expert mentorship.
                </p>
                <p className="text-2xl font-bold text-secondary">
                  Your support transforms exclusion into inclusion.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* How Donation Works - Grid Layout */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">How Donation Works</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: Education */}
              <Card className="bg-card/20 border-border hover:bg-card/30 transition-colors backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">Education & Training</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>Delivering structured, experiential STEM education designed to move students from curiosity to technical competence.</p>
                </CardContent>
              </Card>

              {/* Card 2: Mission Exposure */}
              <Card className="bg-card/20 border-border hover:bg-card/30 transition-colors backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Satellite className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">Satellite Development</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>Funding the development of 6 satellites (8U CubeSats) and Lunar Probes, payload learning, and ground station operations.</p>
                </CardContent>
              </Card>

              {/* Card 3: Global Participation */}
              <Card className="bg-card/20 border-border hover:bg-card/30 transition-colors backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-[#FFD700]/10">
                    <Globe className="h-8 w-8 text-[#FFD700]" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">Global Participation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Ensuring representation across 108 countries by covering logistics, representation, and inclusion support for students.</p>
                </CardContent>
              </Card>

              {/* Card 4: Empowerment */}
              <Card className="bg-card/20 border-border hover:bg-card/30 transition-colors backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-[#FF6EC7]/10">
                    <Heart className="h-8 w-8 text-[#FF6EC7]" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">Girl Child Empowerment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Providing scholarships, sponsorships, and long-term mentoring pathways to ensure girls are equipped to lead.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Payment Details Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">Donate Today</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
              {/* UPI / GPay */}
              <Card className="bg-card/30 border-primary/30 text-center backdrop-blur-md">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full bg-primary/10 mb-2">
                    <CreditCard className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-2xl">UPI / GPay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">GPay Number</p>
                  <p className="text-3xl font-bold text-foreground tracking-wide">99628 33622</p>
                </CardContent>
              </Card>

              {/* Bank Transfer India */}
              <Card className="bg-card/30 border-secondary/30 text-center backdrop-blur-md">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full bg-secondary/10 mb-2">
                    <Landmark className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-secondary text-2xl">Bank Transfer (India)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/90">
                  <p><strong>Name:</strong> SKI STAR FOUNDATION</p>
                  <p><strong>Bank:</strong> HDFC Bank</p>
                </CardContent>
              </Card>
            </div>

            {/* International Bank Transfer */}
            <Card className="bg-card/30 border-[#FFD700]/30 max-w-5xl mx-auto backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FFD700] flex items-center gap-3">
                  <Globe className="h-6 w-6" /> 
                  International & Domestic Bank Transfer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Account Name</p>
                      <p className="text-lg font-semibold">SKI STAR FOUNDATION</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Account Number (INR)</p>
                      <p className="text-lg font-mono">8440210000008297</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Bank Name</p>
                      <p className="text-lg">DBS Bank India Limited</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">IFSC Code</p>
                      <p className="text-lg font-mono">DBSS0IN0440</p>
                      <p className="text-xs text-muted-foreground">(Note: ZERO in ZERO FOUR FOUR ZERO)</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">SWIFT Code</p>
                      <p className="text-lg font-mono">DBSSINBB</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Address</p>
                      <p className="text-sm">26, Thirumalai Pillai Road, Thirumurthy Nagar, T. Nagar, Chennai – 600017, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* After Donation Form */}
          <section className="mb-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-foreground">After You Donate</h2>

              <Card className="bg-[#12152e] border-white/20 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-center text-muted-foreground mb-8">
                    Once you donate, please share your details. Every donor&apos;s name will be symbolically carried as part of the Mission ShakthiSAT journey to the Moon.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="donor-name" className="text-foreground">Full Name</Label>
                        <Input id="donor-name" placeholder="Enter name" className="bg-white/5 border-white/10 text-white focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-country" className="text-foreground">Country</Label>
                        <Input id="donor-country" placeholder="Enter country" className="bg-white/5 border-white/10 text-white focus:border-primary" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="donor-mobile" className="text-foreground">Mobile Number</Label>
                        <Input id="donor-mobile" type="tel" placeholder="+91..." className="bg-white/5 border-white/10 text-white focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-email" className="text-foreground">Email Address</Label>
                        <Input id="donor-email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white focus:border-primary" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="donor-address" className="text-foreground">Full Address</Label>
                      <Textarea id="donor-address" placeholder="Enter full postal address" className="bg-white/5 border-white/10 text-white min-h-[100px] focus:border-primary" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="payment-proof" className="text-foreground">Proof of Donation (Screenshot/PDF)</Label>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="payment-proof" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-white/5 border-white/20 transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          </div>
                          <Input id="payment-proof" type="file" className="hidden" accept="image/*,.pdf" />
                        </label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white text-lg font-bold py-6 mt-4">
                      Submit Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer Statement */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-xl font-semibold text-foreground">When girls rise, science advances.</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
              Together, let us rise to the Moon. 🚀
            </p>
          </div>

        </div>
        
        <ContactFooter />
      </main>
    </div>
  )
}