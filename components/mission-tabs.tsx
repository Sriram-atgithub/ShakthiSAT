"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// ✅ CRITICAL FIX: Dynamic imports to prevent blocking
const Starfield = dynamic(
  () => import("@/components/starfield").then((mod) => mod.Starfield),
  { 
    ssr: false,
    loading: () => null // Don't block render
  }
)

const MissionTabs = dynamic(
  () => import("@/components/mission-tabs"),
  {
    ssr: false, // ✅ IMPORTANT: Disable SSR if it's causing issues
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-3 text-muted-foreground">Loading mission details...</span>
      </div>
    )
  }
)

export default function DonationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Add your form submission logic here
      const formData = new FormData(e.currentTarget)
      
      // Example: Send to API
      // await fetch('/api/donations', {
      //   method: 'POST',
      //   body: formData
      // })
      
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      alert("Thank you! Your details have been submitted.")
      e.currentTarget.reset()
      setFileName("")
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your details. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0E27] text-foreground relative overflow-x-hidden">
      {/* ✅ Background renders independently */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-12 gradient-text text-balance">
            Donate for Mission ShakthiSAT
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column - Mission Statement */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl font-bold text-pretty gradient-text">To the Moon We Rise</p>
                <div className="text-5xl md:text-6xl">🌙🚀</div>
              </div>

              <Card className="bg-card/40 backdrop-blur-sm border-primary/20 p-6">
                <p className="text-xl md:text-2xl font-bold gradient-text mb-2">Be Part of History.</p>
                <p className="text-xl md:text-2xl font-bold gradient-text">Be Part of Mission ShakthiSAT.</p>
              </Card>
            </div>

            {/* Right Column - Mission Description */}
            <div className="md:col-span-7 space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Mission ShakthiSAT is the{" "}
                  <strong className="text-primary">
                    world's first all-girls, international lunar satellite mission
                  </strong>
                  . It brings together young girls and women from{" "}
                  <strong className="text-secondary">108 countries</strong>, not as symbolic participants, but as{" "}
                  <strong className="text-accent">active contributors</strong> to a real space mission.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  This mission exists to redefine who gets to belong in space, who gets access to advanced science, and
                  who gets to lead the future of space exploration.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xl md:text-2xl font-bold text-center gradient-text">
                    This is not charity. This is participation in a historic shift.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ✅ Mission Tabs with proper loading - won't block */}
        <section className="container mx-auto px-4 py-16">
          <MissionTabs />
        </section>

        {/* Why Your Donation Matters */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text text-center">Why Your Donation Matters</h2>

          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-8">
              Your contribution does not fund promotion, visibility, or symbolic gestures. It directly removes barriers
              that prevent girls and young women from entering STEM and space science. For many participants, Mission
              ShakthiSAT represents the first and only opportunity to access advanced scientific infrastructure, expert
              mentorship, and real-world space technology exposure.
            </p>
            <p className="text-xl font-semibold text-primary">Your support transforms exclusion into inclusion.</p>
          </Card>
        </section>

        {/* How Donation Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text text-center">How Donation Works</h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Education and Training */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">1. Education and Training</h3>
              <p className="text-lg leading-relaxed mb-6">
                Mission ShakthiSAT delivers structured, experiential STEM education designed to move students from
                curiosity to technical competence and mission readiness. Participants undergo guided programs that
                include:
              </p>
              <ul className="space-y-4 text-foreground/90 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    Hands-on STEM workshops focused on applied science, engineering thinking, systems design, and
                    real-world problem-solving rather than theoretical or rote learning
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>
                    Space science curriculum covering orbital mechanics, space environment, satellite missions, lunar
                    exploration fundamentals, Earth observation, and real-world applications of physics and mathematics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>
                    Satellite systems and engineering fundamentals, including electrical power systems, communication
                    subsystems, payload architecture, onboard computing, attitude determination and control basics, and
                    thermal considerations
                  </span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-6 leading-relaxed">
                This training is delivered in an age-appropriate yet technically authentic manner, ensuring girls gain
                conceptual understanding, engineering exposure, and decision-making confidence. The objective is not
                short-term inspiration, but long-term technical literacy and capability building.
              </p>
            </Card>

            {/* Satellite and Mission Exposure */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">2. Satellite and Mission Exposure</h3>
              <p className="text-lg leading-relaxed mb-6">
                Mission ShakthiSAT immerses students in the end-to-end lifecycle of real space missions, from concept to
                launch readiness. Girls receive direct exposure to:
              </p>
              <ul className="space-y-4 text-foreground/90 list-none pl-0 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    CubeSAT payload learning, including mission objectives, payload functionality, system constraints,
                    trade-off analysis, and space qualification requirements
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>
                    Integration and assembly exposure, where students actively participate in structured CubeSAT
                    integration workflows, understanding how individual subsystems come together to form a flight-ready
                    satellite
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>
                    Ground station and mission operations understanding, including satellite tracking, telemetry, and
                    telecommand basics, mission health monitoring, data downlink concepts, and post-launch operations
                  </span>
                </li>
              </ul>

              <h4 className="text-xl font-bold mb-4 text-accent">Multi-Satellite Mission Architecture</h4>
              <p className="text-lg leading-relaxed mb-4">
                Donations directly support the development of six satellites across different mission phases:
              </p>
              <ul className="space-y-2 text-foreground/90 list-none pl-0 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary">●</span>
                  <span>8U CubeSAT Prototype Model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">●</span>
                  <span>8U CubeSAT Engineering Model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>8U CubeSAT Flight Model</span>
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-6">
                These 8U satellites are planned for Low Earth Orbit (LEO) and are intended to be launched on
                International Girl Child Day from Sriharikota, subject to formal approval and request through PMO India.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                In parallel, the mission includes the development of an advanced:
              </p>
              <ul className="space-y-2 text-foreground/90 list-none pl-0 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary">●</span>
                  <span>1U Satellite Prototype</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">●</span>
                  <span>1U CubeSAT Engineering Model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>1U CubeSAT Flight Model for a lunar mission</span>
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                This lunar satellite involves joint efforts from international scientists, ISRO scientists, and global
                technical support teams, reinforcing the mission's emphasis on cooperation, excellence, and responsible
                space exploration.
              </p>
            </Card>

            {/* Global Participation */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent">3. Global Participation</h3>
              <p className="text-lg leading-relaxed mb-6">
                Mission ShakthiSAT is built as a country-level global collaboration, not a symbolic campaign. The
                program enables:
              </p>
              <ul className="space-y-4 text-foreground/90 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    Participation of girls from 108 countries, ensuring representation across geography, culture, and
                    socioeconomic backgrounds
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>
                    International scientific and technical collaboration, where students understand how space missions
                    rely on cooperation between nations, agencies, universities, and research institutions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>
                    Logistics, representation, and inclusion support, ensuring no student is excluded due to financial,
                    geographic, or infrastructural barriers
                  </span>
                </li>
              </ul>
            </Card>

            {/* Ambassador and Advisor Participation */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                4. Ambassador and Advisor Participation
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Donations also support the physical participation of Mission ShakthiSAT ambassadors and advisors,
                including:
              </p>
              <ul className="space-y-4 text-foreground/90 list-none pl-0 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>International and domestic flight tickets to India and return journeys</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>Visa processing and documentation support from the participant's home country to India</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>
                    Travel, accommodation, and hospitality in India, ensuring a safe, dignified, and inclusive
                    environment during mission activities, training programs, and collaborative events
                  </span>
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                This ensures that global participation is not virtual alone, but deeply immersive and equitable.
              </p>
            </Card>

            {/* Girl Child Empowerment */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">5. Girl Child Empowerment</h3>
              <p className="text-lg leading-relaxed mb-6">
                At its core, Mission ShakthiSAT is a long-term empowerment initiative, not a one-time intervention.
                Support mechanisms include:
              </p>
              <ul className="space-y-4 text-foreground/90 list-none pl-0 mb-6">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    Scholarships and sponsorships that remove financial barriers to participation, travel, learning, and
                    mission involvement
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">●</span>
                  <span>
                    Long-term mentoring pathways, connecting students with scientists, engineers, educators, and
                    advisors from India and across the world
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">●</span>
                  <span>
                    Continued access to STEM and space careers, enabling participants to transition from early exposure
                    to higher education, research, and leadership roles
                  </span>
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                The mission focuses on building confidence, agency, technical depth, and leadership readiness, ensuring
                that girls do not merely enter STEM spaces but are equipped to lead, innovate, and shape the future of
                space exploration.
              </p>
            </Card>
          </div>
        </section>

        {/* Donate Today CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text text-center">Donate Today</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* UPI / GPay */}
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">UPI / GPay</h3>
                <div className="space-y-2">
                  <p className="text-lg">GPay Number:</p>
                  <p className="text-3xl font-bold text-foreground">99628 33622</p>
                </div>
              </Card>

              {/* Bank Transfer India */}
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary">🏦 Bank Transfer (India)</h3>
                <div className="space-y-2 text-foreground/90">
                  <p>
                    <strong>Name:</strong> SKI STAR FOUNDATION
                  </p>
                  <p>
                    <strong>Bank:</strong> HDFC Bank
                  </p>
                </div>
              </Card>
            </div>

            {/* International Bank Transfer */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-accent">🌍 Bank Transfer (International and Domestic)</h3>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/90">
                <div>
                  <p className="font-semibold mb-1">Account Name:</p>
                  <p>SKI STAR FOUNDATION</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Account Number (INR):</p>
                  <p>8440210000008297</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Bank Name:</p>
                  <p>DBS Bank India Limited</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">IFSC Code:</p>
                  <p>DBSS0IN0440</p>
                  <p className="text-sm text-muted-foreground">(Please note ZERO in ZERO FOUR FOUR ZERO)</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">SWIFT Code:</p>
                  <p>DBSSINBB</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Bank Address:</p>
                  <p className="text-sm">
                    26, Thirumalai Pillai Road, Thirumurthy Nagar, T. Nagar, Chennai – 600017, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ✅ After You Donate Form - With proper state management */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text text-center">After You Donate</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-8 text-center">
                Once you donate, you will be invited to share your details. Every donor's name will be symbolically
                carried as part of the Mission ShakthiSAT journey to the Moon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="donor-name">Donor Name</Label>
                  <Input 
                    id="donor-name" 
                    name="name"
                    placeholder="Enter your full name" 
                    className="bg-muted/50" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donor-country">Donor Country</Label>
                  <Input 
                    id="donor-country" 
                    name="country"
                    placeholder="Enter your country" 
                    className="bg-muted/50" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donor-mobile">Donor Mobile Number</Label>
                  <Input 
                    id="donor-mobile" 
                    name="mobile"
                    type="tel" 
                    placeholder="Enter your mobile number" 
                    className="bg-muted/50" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donor-email">Donor Email ID</Label>
                  <Input 
                    id="donor-email" 
                    name="email"
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-muted/50" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donor-address">Donor Address</Label>
                  <Textarea 
                    id="donor-address" 
                    name="address"
                    placeholder="Enter your full address" 
                    className="bg-muted/50 min-h-24" 
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-proof">Proof of Donation: Payment Info (PDF, screenshot images)</Label>
                  <Input 
                    id="payment-proof" 
                    name="proof"
                    type="file" 
                    accept="image/*,.pdf" 
                    className="bg-muted/50" 
                    onChange={handleFileChange}
                    required
                    disabled={isSubmitting}
                  />
                  {fileName && (
                    <p className="text-sm text-primary mt-1">Selected: {fileName}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Details"
                  )}
                </Button>
              </form>

              <p className="text-center text-xl font-semibold mt-8 text-primary">
                Your contribution becomes part of history.
              </p>
            </Card>
          </div>
        </section>

        {/* More Than a Donation */}
        <section className="container mx-auto px-4 py-16 pb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text text-center">More Than a Donation</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-8 md:p-12">
              <p className="text-xl leading-relaxed mb-8">This is an investment in:</p>

              <ul className="space-y-3 text-lg mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-2xl">●</span>
                  <span>Education</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-2xl">●</span>
                  <span>Gender equity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-2xl">●</span>
                  <span>Scientific access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-2xl">●</span>
                  <span>Global collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-2xl">●</span>
                  <span>The future of women in space</span>
                </li>
              </ul>

              <div className="space-y-4 text-lg leading-relaxed text-center">
                <p className="font-semibold text-xl">When girls rise, science advances.</p>
                <p className="font-semibold text-xl">When women lead, the future becomes inclusive.</p>
                <p className="text-2xl font-bold gradient-text mt-6">{"Together, let us rise to the Moon. 🚀"}</p>
              </div>

              <div className="mt-12 pt-8 border-t border-border text-center space-y-2">
                <p className="text-sm text-muted-foreground">Powered by</p>
                <p className="text-xl font-bold">Space Kidz India</p>
                <p className="text-sm text-muted-foreground">An initiative by SKI STAR FOUNDATION</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}