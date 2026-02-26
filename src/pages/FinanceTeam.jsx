import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function FinanceTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Saksham Chaubey",
      year: "4th Year",
      course: "CSE (AI & ML)",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771234739/ygwtvgwi1iv1x5sanqit.jpg",
      position: "Lead",
      linkedinURL: "https://www.instagram.com/saksham_chaubey27?utm_source=qr&igsh=cWR2NTczZGI1MnBk",
      fsId: "FI2026-4001"
    },
    {
      id: 1,
      name: "Kumar Siddharth",
      year: "3rd Year",
      course: "CSIT",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771234954/avtj1rbsks4xl0qdkwnn.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/iamkumarsiddharth?igsh=MXE3eGdjODUxZjZmYw==",
      fsId: "FI2026-4002"
    },
    {
      id: 3,
      name: "Priyanshu",
      year: "2nd Year",
      course: "CSE",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771235019/rb2bnfkrgnfiqmi9m95y.jpg",
      position: "Member",
      linkedinURL: "",
      fsId: "FI2026-4003"
    },
        {
      id: 4,
      name: "Ayushman Tiwari",
      year: "3rd Year",
      course: "CST",
      isStudent: true,
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1772091010/d9ktt7iilislzkby8afm.jpg",
      position: "Member",
      linkedinURL: "https://www.instagram.com/tiwari_ayushman22?igsh=MWRsNjdvYXQzdmpycw==",
      fsId: "FI2026-4004"
    },
  ];
  return (
    <div
      className="min-h-screen w-full py-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
          url('/wood.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center text-white px-6 w-full max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-heading mb-16">
          Finance Team
        </h1>

        {/* AUTO-FIT GRID — PERFECT ALIGNMENT */}
        <div
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            gap-12 md:gap-14
            justify-items-center
          "
        >
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.fsId} {...member} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default FinanceTeam