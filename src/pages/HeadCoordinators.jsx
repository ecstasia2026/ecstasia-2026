import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard'

function HeadCoordinators() {
  const coreTeam =
    [
      {
        fsId: "CO2026-7403",
        name: "Tuhin Majumder",
        year: "1st Year",
        course: "CSE (DATA SCIENCE)",
        isStudent: false,
        position: "Head Coordinator",
        imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771426270/jjsrmzpbkzameewidsrv.jpg",
        linkedinURL: ""
      },
      {
        fsId: "CO2026-7404",
        name: "Nilanjan Mondal",
        year: "1st Year",
        course: "CSE (DATA SCIENCE)",
        isStudent: false,
        position: "Head Coordinator",
        imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771426298/qivee3wusiejid5k51gt.webp",
        linkedinURL: ""
      }
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
          Head Coordinators
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

export default HeadCoordinators