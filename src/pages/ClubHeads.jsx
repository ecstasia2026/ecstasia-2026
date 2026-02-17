import TeamMemberCard from '../components/essential/TeamCard'

function ClubHeads() {
  const coreTeam = [
    {
      id: 1,
      fsId: "CH2026-4600",
      name: "Anwesha Bharma",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "Sports Club",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
    },
        {
      id: 8,
      fsId: "CH2026-4601",
      name: "Parthashastri",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "Rhythmic syndrome",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
    },
            {
      id: 7,
      fsId: "CH2026-4602",
      name: "Parthashastri",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "Symphony",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
    },
            {
      id: 6,
      fsId: "CH2026-4603",
      name: "Parthashastri",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "Theatrix",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
    },
            {
      id: 5,
      fsId: "CH2026-4604",
      name: "Parthashastri",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "ACM",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
    },
                {
      id: 5,
      fsId: "CH2026-4604",
      name: "Parthashastri",
      year: "3rd",
      course: "CST",
      isStudent: false,
      position: "DSU",
      imageUrl: "https://res.cloudinary.com/dooekcvv0/image/upload/v1771355884/q1liubekp1jmchqjmgmo.png",
      linkedinURL: ""
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
          Club Heads
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

export default ClubHeads