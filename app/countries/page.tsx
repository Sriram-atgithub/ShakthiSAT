"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlobalParticipation } from "@/components/global-participation";
import { ContactFooter } from "@/components/contact-footer";

export default function CountriesPage() {
  const [showOnboarded, setShowOnboarded] = useState(false);

  // ✅ Country name → ISO code mapping
  const countryCodes: Record<string, string> = {
    India: "IN", USA: "US", UK: "GB", Canada: "CA", France: "FR", Germany: "DE",
    Brazil: "BR", Japan: "JP", Australia: "AU", "South Korea": "KR", Italy: "IT",
    Spain: "ES", Russia: "RU", Mexico: "MX", "South Africa": "ZA", Argentina: "AR",
    Netherlands: "NL", Sweden: "SE", Norway: "NO", Finland: "FI", Denmark: "DK",
    Poland: "PL", Turkey: "TR", Singapore: "SG", Malaysia: "MY", Thailand: "TH",
    Vietnam: "VN", Indonesia: "ID", Philippines: "PH", Bangladesh: "BD",
    Nepal: "NP", "Sri Lanka": "LK", UAE: "AE", "Saudi Arabia": "SA", Egypt: "EG",
    Kenya: "KE", Nigeria: "NG", Ghana: "GH", Ethiopia: "ET", Morocco: "MA",
    Chile: "CL", Peru: "PE", Colombia: "CO", Venezuela: "VE", "New Zealand": "NZ",
    Israel: "IL", Portugal: "PT", Greece: "GR", Switzerland: "CH", Austria: "AT",
    Belgium: "BE", "Czech Republic": "CZ", Hungary: "HU", Romania: "RO",
    Croatia: "HR", Ireland: "IE", Iceland: "IS", Luxembourg: "LU", Qatar: "QA",
    Oman: "OM", Kuwait: "KW", Jordan: "JO", Lebanon: "LB", Pakistan: "PK",
    Uzbekistan: "UZ", Kazakhstan: "KZ", Mongolia: "MN", Cambodia: "KH", Laos: "LA",
    Myanmar: "MM", Tanzania: "TZ", Uganda: "UG", Zimbabwe: "ZW", Zambia: "ZM",
    Algeria: "DZ", Tunisia: "TN", Paraguay: "PY", Bolivia: "BO", Ecuador: "EC",
    Panama: "PA", "Costa Rica": "CR", Honduras: "HN", "El Salvador": "SV",
    Guatemala: "GT", Cuba: "CU", Jamaica: "JM", "Dominican Republic": "DO",
    Haiti: "HT", "Trinidad and Tobago": "TT", Fiji: "FJ", "Papua New Guinea": "PG",
    Maldives: "MV", Bhutan: "BT", Rwanda: "RW", Namibia: "NA", Botswana: "BW",
    Mozambique: "MZ", Madagascar: "MG", Mauritius: "MU", Brunei: "BN",
    Seychelles: "SC", Malawi: "MW", Burundi: "BI", Georgia: "GE", Armenia: "AM",
    Moldova: "MD", Ukraine: "UA", "North Macedonia": "MK",
  };

  // ✅ All countries onboarded
  const onboardedCountries = Object.keys(countryCodes);

  const renderModal = (
    title: string,
    countries: string[],
    onClose: () => void
  ) => (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-8 overflow-y-auto">
      <div className="w-full max-w-7xl bg-[#0A0E27]/80 border border-[#6A4FC8]/50 rounded-2xl p-6 relative">
        <h2 className="text-3xl text-white font-semibold mb-6 text-center">{title}</h2>

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white hover:text-[#E26EE5] text-2xl font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
          {countries.map((country) => {
            const iso = countryCodes[country];

            return (
              <div key={country} className="flex flex-col items-center group" title={country}>
                <Image
                  src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
                  alt={country}
                  width={60}
                  height={40}
                  className="rounded-md shadow-md group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 mt-1">
                  {country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <GlobalParticipation />

        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#E26EE5]" />
              Our Global Network
            </CardTitle>

            <Button
              onClick={() => setShowOnboarded(true)}
              className="bg-[#6A4FC8] hover:bg-blue-800 text-white rounded-xl"
            >
              View Participating Countries
            </Button>
          </CardHeader>

          <CardContent className="text-[#C0C0C0] space-y-4">
            <p>
              ShakthiSAT represents collaboration across all participating nations,
              united under one mission of empowering young women through space science.
            </p>
          </CardContent>
        </Card>
      </div>

      {showOnboarded &&
        renderModal("Participating Countries", onboardedCountries, () =>
          setShowOnboarded(false)
        )}

      <ContactFooter />
    </main>
  );
}
