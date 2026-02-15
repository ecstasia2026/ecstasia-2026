import React from 'react'
import TeamMemberCard from '../components/essential/TeamCard';

function VideoEditingTeam() {
  const coreTeam = [
    {
      id: 1,
      fsId: "VD2026-3001",
      name: "Srijoyee Haldar",
      year: "3rd Year",
      course: "CSE",
      isStudent: true,
      position: "Videography Lead",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771154574/kvccwlfqonql5402rtun.jpg",
      linkedinURL: "https://www.instagram.com/_srijoyee_?igsh=cGRkYTE0NHhwMW0w"
    },
    {
      id: 2,
      fsId: "VD2026-3002",
      name: "Atri Banerjee",
      year: "3rd Year",
      course: "CSE",
      isStudent: true,
      position: "Videography Co-Lead",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/atree.nrg/"
    },
    {
      id: 3,
      fsId: "VD2026-3003",
      name: "Aman Roushan",
      year: "2nd Year",
      course: "Robotics",
      isStudent: true,
      position: "Editor",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771154685/ne9mcnov93ckvdwjnu1b.jpg",
      linkedinURL: ""
    },
    {
      id: 4,
      fsId: "VD2026-3004",
      name: "Saranya Choudhary",
      year: "1st Year",
      course: "CSE IOT CS BCT",
      isStudent: true,
      position: "Editor",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/st4rg4rlll?igsh=dHlqdXUxbG1kNjFr"
    },
    {
      id: 5,
      fsId: "VD2026-3005",
      name: "Aman Paramanik",
      year: "1st Year",
      course: "CSE(IOT)",
      isStudent: true,
      position: "Editor",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/zoro2_424?igsh=Z2lldHIya2M1aWE1"
    },
    {
      id: 6,
      fsId: "VD2026-3006",
      name: "Ayush Kumar Nayak",
      year: "1st Year",
      course: "CSE(IOT)",
      isStudent: true,
      position: "Editor",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/ayush_saw9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      id: 7,
      fsId: "VD2026-3007",
      name: "Aritra Saha",
      year: "1st Year",
      course: "CSE(AI)",
      isStudent: true,
      position: "Editor",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/aritrabolchi?igsh=a2ZhcDdnNjBsdnk4"
    },
    {
      id: 8,
      fsId: "VD2026-3008",
      name: "Sarbendra Nath Das",
      year: "2nd Year",
      course: "CES(IOT,CS,BT)",
      isStudent: true,
      position: "Editor",
      imageUrl: "",
      linkedinURL: ""
    },
    {
      id: 9,
      fsId: "VD2026-3009",
      name: "Rounak Ghosh",
      year: "2nd Year",
      course: "CSE(IOT,CS,BT)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/avro_1202?igsh=bG80ejR0NTNkampi"
    },
    {
      id: 10,
      fsId: "VD2026-3010",
      name: "Sayak Manna",
      year: "2nd Year",
      course: "CSE",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/sayak_forsure?igsh=MTExYW9hdmk0bng1Mw=="
    },
    {
      id: 11,
      fsId: "VD2026-3011",
      name: "Kuntal Ghosh",
      year: "1st Year",
      course: "CSE(IOT,CS,BT)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/_bytekicker?igsh=ODZ1NnZ2M2hjOHYy"
    },
    {
      id: 12,
      fsId: "VD2026-3012",
      name: "Anubhab Das",
      year: "1st Year",
      course: "CSE CYBER SECURITY",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/anubhab.18?igsh=MThrdWMyODE5MjAzeA=="
    },
    {
      id: 13,
      fsId: "VD2026-3013",
      name: "Aric Paul",
      year: "1st Year",
      course: "CSE IOT",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/_.luqmxn.__?igsh=MW9sdGdvemJtcjhh"
    },
    {
      id: 14,
      fsId: "VD2026-3014",
      name: "Tushar Biswas",
      year: "2nd Year",
      course: "CSIT",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: ""
    },
    {
      id: 15,
      fsId: "VD2026-3015",
      name: "Prithwi Dey",
      year: "1st Year",
      course: "CSE IOT",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/_prithwi__?igsh=bzlzcTJybnNyaWZi&utm_source=qr"
    },
    {
      id: 16,
      fsId: "VD2026-3016",
      name: "Ritam Das Gupta",
      year: "2nd Year",
      course: "CSE(IOT,CS,BT)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: ""
    },
    {
      id: 17,
      fsId: "VD2026-3017",
      name: "Souradeep Saha",
      year: "1st Year",
      course: "CSE(IOT BCT CS)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/soura.deep_07?igsh=MTZqNGZ0dWd3MXIweA=="
    },
    {
      id: 18,
      fsId: "VD2026-3018",
      name: "Debargha Mazumder",
      year: "1st Year",
      course: "CSE(IOT, BCT, CS)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: ""
    },
    {
      id: 19,
      fsId: "VD2026-3019",
      name: "Rangan Mukherjee",
      year: "2nd Year",
      course: "CSE(A.I)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/la_derniere_nuit?igsh=N2Z6dmZ4bHRjOTN0&utm_source=qr"
    },
    {
      id: 20,
      fsId: "VD2026-3020",
      name: "Debarshi Banerjee",
      year: "2nd Year",
      course: "CSE(IOTCSBCT)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/deb_756.exe?igsh=MXdtcmVzOTdyaWQ0Ng=="
    },
    {
      id: 21,
      fsId: "VD2026-3021",
      name: "Deepjyoti Bhattacharya",
      year: "3rd Year",
      course: "CSE(IOT,CS,BT)",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/_deepjyoti.official_?igsh=eGQzaTljeXJjOXc1"
    },
    {
      id: 22,
      fsId: "VD2026-3022",
      name: "Arpayan Chakraborty",
      year: "2nd Year",
      course: "Robotic and AI",
      isStudent: true,
      position: "Photographer",
      imageUrl: "",
      linkedinURL: "https://www.instagram.com/_arpxyxn_?igsh=MXBsdnlvMThwbTRkaw=="
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
          Video Editing Team
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
  );
}

export default VideoEditingTeam