"use client"

import { Rocket, Heart, Users, Globe, GraduationCap, Satellite, Target, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFooter } from "@/components/contact-footer"
import { useState } from "react"

export default function DonatePage() {
  const [showDonorForm, setShowDonorForm] = useState(false)

  const countries = [
    "Afghanistan", "Albania", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Bahamas", "Bahrain",
    "Benin", "Bolivia", "Botswana", "Brazil", "Brunei", "Burkina Faso", "Cameroon", "Canada", "Central African Republic",
    "Chile", "Colombia", "Costa Rica", "Croatia", "Dominica", "Egypt", "El Salvador", "Equatorial Guinea", "Eswatini",
    "Ethiopia", "Fiji", "France", "Gabon", "Gambia", "Ghana", "Greece", "Grenada", "Guatemala", "Guyana", "Haiti",
    "Honduras", "Hungary", "India", "Ireland", "Italy", "Ivory Coast", "Jamaica", "Jordan", "Kenya", "Kuwait",
    "Kyrgyzstan", "Latvia", "Lesotho", "Liberia", "Luxembourg", "North Macedonia", "Madagascar", "Malawi", "Malaysia",
    "Malta", "Mauritius", "Mexico", "Moldova", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
    "New Zealand", "Nigeria", "Oman", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Portugal", "Qatar",
    "Romania", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovenia",
    "Spain", "Sri Lanka", "St. Kitts and Nevis", "St. Lucia", "St. Vincent and the Grenadines", "Tanzania", "Thailand",
    "Solomon Islands", "Togo", "Trinidad and Tobago", "Tunisia", "Turkmenistan", "United Arab Emirates", "Uganda",
    "United Kingdom", "Uruguay", "Uzbekistan", "Zambia", "Zimbabwe", "Cosmic Girls (Organization)"
  ]

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education and Training",
      description: "Hands-on STEM workshops, space science curriculum, and satellite systems engineering fundamentals delivered through experiential learning.",
      color: "#FFD700"
    },
    {
      icon: Satellite,
      title: "Satellite & Mission Exposure",
      description: "Direct exposure to CubeSAT payload learning, integration workflows, ground station operations, and real space mission participation.",
      color: "#FF6EC7"
    },
    {
      icon: Globe,
      title: "Global Participation",
      description: "Supporting 108 countries with logistics, travel, accommodation, and ensuring no student is excluded due to financial barriers.",
      color: "#6A4FC8"
    },
    {
      icon: Heart,
      title: "Girl Child Empowerment",
      description: "Scholarships, long-term mentoring pathways, and continued access to STEM careers for lasting impact beyond the mission.",
      color: "#13b9d2"
    }
  ]

  const satellites = [
    {
      name: "8U CubeSAT Series",
      models: ["Prototype Model", "Engineering Model", "Flight Model"],
      destination: "Low Earth Orbit (LEO)",
      launch: "International Girl Child Day from Sriharikota"
    },
    {
      name: "1U Lunar CubeSAT",
      models: ["Prototype", "Engineering Model", "Flight Model"],
      destination: "Lunar Mission",
      collaboration: "ISRO Scientists & International Teams"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">🌙🚀</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            To the Moon We Rise
          </h1>
          <p className="text-2xl text-white font-semibold mb-4">
            Be Part of History. Be Part of Mission ShakthiSAT.
          </p>
          <p className="text-xl text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
            Mission ShakthiSAT is the world's first all-girls, international lunar satellite mission bringing together young girls and women from 108 countries as active contributors to a real space mission.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-white text-center leading-relaxed mb-4">
              This mission exists to redefine who gets to belong in space, who gets access to advanced science, and who gets to lead the future of space exploration.
            </p>
            <p className="text-2xl text-[#FFD700] text-center font-bold">
              This is not charity. This is participation in a historic shift.
            </p>
          </CardContent>
        </Card>

        {/* Why This Mission Exists */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Why Mission ShakthiSAT Exists
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#1a1f3a]/50 border-[#FF6EC7]/30">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#FFD700] mb-2">14-19%</div>
                <p className="text-[#C0C0C0]">Women in global space workforce</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a1f3a]/50 border-[#FF6EC7]/30">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#FF6EC7] mb-2">2-3%</div>
                <p className="text-[#C0C0C0]">Women in leadership roles in STEM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1a1f3a]/50 border-[#FF6EC7]/30">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-[#6A4FC8] mb-2">Millions</div>
                <p className="text-[#C0C0C0]">Girls excluded due to lack of access</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardContent className="p-8">
              <p className="text-lg text-white text-center leading-relaxed mb-4">
                Mission ShakthiSAT is a decisive step to break this imbalance at its root.
              </p>
              <p className="text-lg text-[#C0C0C0] text-center leading-relaxed">
                This mission does not aim to inspire from a distance. It enables girls to build, assemble, and understand space technology with their own hands.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What Makes It Transformational */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            What Makes Mission ShakthiSAT Transformational
          </h2>
          
          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 mb-6">
            <CardContent className="p-8">
              <p className="text-lg text-white mb-6 text-center">
                Through Mission ShakthiSAT, students receive hands-on exposure to real CubeSAT integration and assembly:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Satellite Subsystems Understanding</h3>
                    <p className="text-[#C0C0C0] text-sm">Deep dive into power, communication, and control systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#FF6EC7] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Payload Integration Concepts</h3>
                    <p className="text-[#C0C0C0] text-sm">Hands-on experience with mission-critical components</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#6A4FC8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Assembly and Testing Workflows</h3>
                    <p className="text-[#C0C0C0] text-sm">Real-world satellite construction protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#13b9d2] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Ground Station Fundamentals</h3>
                    <p className="text-[#C0C0C0] text-sm">Mission control and satellite communication basics</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-center text-[#FFD700] font-semibold">
            This is experiential STEM at its highest level.
          </p>
        </section>

        {/* 108 Countries Section */}
        <section className="mb-16">
          <div className="border-2 border-white/30 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
              108 Countries. One Mission. One Global Commitment. 🌍
            </h2>
            
            <p className="text-lg text-[#C0C0C0] text-center mb-8 max-w-3xl mx-auto">
              Mission ShakthiSAT is intentionally designed as a country-based global collaboration, ensuring transparency, inclusivity, and global recognition.
            </p>
            
            <div className="bg-[#0A0E27]/50 rounded-lg p-6 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {countries.map((country, index) => (
                  <div 
                    key={index}
                    className="text-[#C0C0C0] text-sm hover:text-[#FFD700] transition-colors duration-200 p-2 bg-[#1a1f3a]/30 rounded text-center"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Are The Girls */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Who Are the Girls Behind Mission ShakthiSAT 👧
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">Backgrounds Represented</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-[#FFD700] rounded-full"></div>
                  <p className="text-[#C0C0C0]">Government and low-income schools</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-[#FF6EC7] rounded-full"></div>
                  <p className="text-[#C0C0C0]">Rural and semi-urban regions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-[#6A4FC8] rounded-full"></div>
                  <p className="text-[#C0C0C0]">First-generation learner families</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-[#13b9d2] rounded-full"></div>
                  <p className="text-[#C0C0C0]">Underserved and underrepresented communities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-[#FFD700] rounded-full"></div>
                  <p className="text-[#C0C0C0]">Students with strong potential but limited STEM access</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1f3a]/50 border-[#FF6EC7]/30">
              <CardHeader>
                <CardTitle className="text-white text-xl">First-Time Experiences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-[#C0C0C0] mb-4">
                  For many participants, this mission marks:
                </p>
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-[#FFD700]" />
                  <p className="text-[#C0C0C0]">Their first laboratory experience</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#FF6EC7]" />
                  <p className="text-[#C0C0C0]">Their first interaction with a scientist or engineer</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Satellite className="h-5 w-5 text-[#6A4FC8]" />
                  <p className="text-[#C0C0C0]">Their first exposure to a real satellite</p>
                </div>
                <p className="text-[#FFD700] font-semibold mt-6">
                  Mission ShakthiSAT becomes their first doorway into science, leadership, and global collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Satellite Architecture */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Multi-Satellite Mission Architecture 🛰️
          </h2>
          
          <p className="text-lg text-[#C0C0C0] text-center mb-8">
            Donations directly support the development of six satellites across different mission phases:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {satellites.map((satellite, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{satellite.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-[#FFD700] font-semibold mb-2">Models:</h4>
                    {satellite.models.map((model, idx) => (
                      <div key={idx} className="flex items-center space-x-2 mb-1">
                        <div className="h-1.5 w-1.5 bg-[#FF6EC7] rounded-full"></div>
                        <p className="text-[#C0C0C0]">{model}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-[#FFD700] font-semibold mb-1">Destination:</h4>
                    <p className="text-white">{satellite.destination}</p>
                  </div>
                  {satellite.launch && (
                    <div>
                      <h4 className="text-[#FFD700] font-semibold mb-1">Launch Plan:</h4>
                      <p className="text-[#C0C0C0]">{satellite.launch}</p>
                    </div>
                  )}
                  {satellite.collaboration && (
                    <div>
                      <h4 className="text-[#FFD700] font-semibold mb-1">Collaboration:</h4>
                      <p className="text-[#C0C0C0]">{satellite.collaboration}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Your Donation Matters */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Why Your Donation Matters
          </h2>
          
          <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-white text-center leading-relaxed mb-4">
                Your contribution does not fund promotion, visibility, or symbolic gestures.
              </p>
              <p className="text-xl text-[#FFD700] text-center font-bold">
                It directly removes barriers that prevent girls and young women from entering STEM and space science.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 hover:border-[#FFD700]/50 transition-all duration-300">
                <CardHeader>
                  <area.icon className="h-12 w-12 mb-4" style={{ color: area.color }} />
                  <CardTitle className="text-white text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C0C0C0] leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ambassador Support */}
        <section className="mb-16">
          <Card className="bg-[#1a1f3a]/50 border-[#FF6EC7]/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ambassador and Advisor Participation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#C0C0C0] leading-relaxed">
                Donations also support the physical participation of Mission ShakthiSAT ambassadors and advisors, ensuring global participation is deeply immersive and equitable:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#0A0E27]/50 rounded-lg p-4">
                  <h4 className="text-[#FFD700] font-semibold mb-2">✈️ Travel Support</h4>
                  <p className="text-[#C0C0C0] text-sm">International and domestic flight tickets to India and return journeys</p>
                </div>
                
                <div className="bg-[#0A0E27]/50 rounded-lg p-4">
                  <h4 className="text-[#FF6EC7] font-semibold mb-2">📋 Documentation</h4>
                  <p className="text-[#C0C0C0] text-sm">Visa processing and documentation support from home countries</p>
                </div>
                
                <div className="bg-[#0A0E27]/50 rounded-lg p-4">
                  <h4 className="text-[#6A4FC8] font-semibold mb-2">🏨 Hospitality</h4>
                  <p className="text-[#C0C0C0] text-sm">Travel, accommodation ensuring safe, dignified, and inclusive environment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Peaceful Use of Space */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30">
            <CardHeader>
              <Target className="h-12 w-12 text-[#FFD700] mb-4 mx-auto" />
              <CardTitle className="text-3xl text-white text-center">
                Responsible and Peaceful Use of Outer Space
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-[#C0C0C0] text-center leading-relaxed">
                Mission ShakthiSAT stands for more than gender equity. It actively promotes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <p className="text-white">Peaceful use of outer space</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6EC7] flex-shrink-0" />
                  <p className="text-white">International cooperation over competition</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#6A4FC8] flex-shrink-0" />
                  <p className="text-white">Sustainable space practices</p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#13b9d2] flex-shrink-0" />
                  <p className="text-white">Space debris mitigation awareness</p>
                </div>
              </div>

              <p className="text-[#FFD700] text-center font-semibold mt-6">
                This mission teaches young women not only how to build satellites, but how to think ethically about the future of space.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Donation Methods */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Donate Today 🤍
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* India Donations */}
            <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">🇮🇳 India Donations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* UPI/GPay */}
                <div className="bg-[#0A0E27]/50 rounded-lg p-6">
                  <h3 className="text-[#FFD700] font-semibold mb-3 text-lg">📱 UPI / GPay</h3>
                  <div className="bg-[#1a1f3a] rounded p-4 border border-[#6A4FC8]/30">
                    <p className="text-white text-center text-xl font-mono">99628 33622</p>
                  </div>
                </div>

                {/* Bank Transfer India */}
                <div className="bg-[#0A0E27]/50 rounded-lg p-6">
                  <h3 className="text-[#FFD700] font-semibold mb-3 text-lg">🏦 Bank Transfer</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-[#FF6EC7]">Beneficiary:</span>
                      <span className="text-white ml-2">SKI STAR FOUNDATION</span>
                    </div>
                    <div>
                      <span className="text-[#FF6EC7]">Bank:</span>
                      <span className="text-white ml-2">HDFC Bank</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Donations */}
            <Card className="bg-gradient-to-br from-[#FF6EC7]/20 to-[#6A4FC8]/20 border-[#FFD700]/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">🌍 International Donations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-[#0A0E27]/50 rounded-lg p-6">
                  <h3 className="text-[#FFD700] font-semibold mb-4 text-lg">🏦 Bank Transfer</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-[#FF6EC7] font-semibold mb-1">Account Name:</div>
                      <div className="text-white">SKI STAR FOUNDATION</div>
                    </div>
                    
                    <div>
                      <div className="text-[#FF6EC7] font-semibold mb-1">Account Number (INR):</div>
                      <div className="text-white font-mono">8440210000008297</div>
                    </div>
                    
                    <div>
                      <div className="text-[#FF6EC7] font-semibold mb-1">Bank Name:</div>
                      <div className="text-white">DBS Bank India Limited</div>
                    </div>
                    
                    <div>
                      <div className="text-[#FF6EC7] font-semibold mb-1">Bank Address:</div>
                      <div className="text-white">
                        26, Thirumalai Pillai Road,<br />
                        Thirumurthy Nagar,<br />
                        T. Nagar, Chennai – 600017,<br />
                        Tamil Nadu, India
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[#FF6EC7] font-semibold mb-1">IFSC Code:</div>
                        <div className="text-white font-mono">DBSS0IN0440</div>
                      </div>
                      <div>
                        <div className="text-[#FF6EC7] font-semibold mb-1">SWIFT Code:</div>
                        <div className="text-white font-mono">DBSSINBB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* After You Donate */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white text-center">After You Donate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-[#C0C0C0] text-center leading-relaxed">
                Once you donate, you will be invited to share your details.
              </p>
              
              <div className="bg-[#0A0E27]/50 rounded-lg p-6">
                <p className="text-xl text-[#FFD700] text-center font-semibold mb-6">
                  Every donor's name will be symbolically carried as part of the Mission ShakthiSAT journey to the Moon. 🌙
                </p>
                
                <div className="space-y-3 text-[#C0C0C0]">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Donor Name</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Donor Country</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Donor Mobile Number</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Donor Email ID</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Donor Address</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-[#FF6EC7]" />
                    <span>Proof of donation (PDF, screenshot images)</span>
                  </div>
                </div>
              </div>

              <p className="text-2xl text-white text-center font-bold">
                Your contribution becomes part of history.
              </p>

              <button
                onClick={() => setShowDonorForm(true)}
                className="w-full max-w-md mx-auto block bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] text-[#0A0E27] font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-200"
              >
                Submit Donor Details
              </button>
            </CardContent>
          </Card>
        </section>

        {/* Final Message */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
                More Than a Donation
              </h2>
              
              <p className="text-xl text-white">This is an investment in:</p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <GraduationCap className="h-10 w-10 text-[#FFD700] mx-auto" />
                  <p className="text-white font-semibold">Education</p>
                </div>
                <div className="space-y-2">
                  <Heart className="h-10 w-10 text-[#FF6EC7] mx-auto" />
                  <p className="text-white font-semibold">Gender Equity</p>
                </div>
                <div className="space-y-2">
                  <Target className="h-10 w-10 text-[#6A4FC8] mx-auto" />
                  <p className="text-white font-semibold">Scientific Access</p>
                </div>
                <div className="space-y-2">
                  <Globe className="h-10 w-10 text-[#13b9d2] mx-auto" />
                  <p className="text-white font-semibold">Global Collaboration</p>
                </div>
                <div className="space-y-2">
                  <Rocket className="h-10 w-10 text-[#FFD700] mx-auto" />
                  <p className="text-white font-semibold">Future of Women in Space</p>
                </div>
                <div className="space-y-2">
                  <Users className="h-10 w-10 text-[#FF6EC7] mx-auto" />
                  <p className="text-white font-semibold">Leadership</p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-2xl text-[#FFD700] font-bold">
                  When girls rise, science advances.
                </p>
                <p className="text-2xl text-[#FF6EC7] font-bold">
                  When women lead, the future becomes inclusive.
                </p>
                <p className="text-3xl text-white font-bold mt-6">
                  Together, let us rise to the Moon. 🚀
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Credit */}
        <div className="text-center space-y-2 mb-8">
          <p className="text-[#C0C0C0]">Powered by</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Space Kidz India
          </p>
          <p className="text-[#C0C0C0]">An initiative by SKI STAR FOUNDATION</p>
        </div>

      </div>

      {/* Donor Form Modal */}
      {showDonorForm && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 overflow-y-auto py-8"
          onClick={() => setShowDonorForm(false)}
        >
          <div
            className="bg-[#12152e] rounded-xl relative border-2 border-[#FFD700]/30 w-full max-w-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-5 text-white text-3xl z-50"
              onClick={() => setShowDonorForm(false)}
            >
              ×
            </button>

            <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
              Donor Information Form
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Country *</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none"
                  placeholder="Enter your country"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none"
                  placeholder="+XX XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Email ID *</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Address *</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <label className="block text-[#FFD700] font-semibold mb-2">Proof of Donation *</label>
                <input 
                  type="file" 
                  required
                  accept="image/*,.pdf"
                  className="w-full bg-[#1a1f3a] border border-[#6A4FC8]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#6A4FC8] file:text-white file:cursor-pointer"
                />
                <p className="text-[#C0C0C0] text-sm mt-2">Upload payment screenshot or receipt (PDF/Image)</p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] text-[#0A0E27] font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-200"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}

      <ContactFooter />
    </main>
  )
}