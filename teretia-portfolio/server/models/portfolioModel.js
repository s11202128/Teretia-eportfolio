const portfolioData = {
  profile: {
    name: "Teretia Tawaia",
    title: "Geospatial Science Professional & Environmental Project Officer",
    location: "Tarawa, Kiribati",
    email: "t.taam@melad.gov.ki",
    phone: "+686 7000000",
    whatsapp: "+686 73013905",
    education: {
      degree: "Bachelor of Geospatial Science",
      institution: "The University of the South Pacific (USP)",
      year: "2025"
    },
    bio: "Passionate Geospatial Science graduate and Environmental Project Officer with expertise in marine litter reduction, environmental resilience frameworks, and community stakeholder engagement across Kiribati and the Pacific region."
  },
  skills: [
    { category: "Core Expertise", items: ["Environmental Conservation", "Geospatial Data Analysis", "Project Coordination", "Stakeholder Engagement"] },
    { category: "Professional Skills", items: ["Climate Resilience Frameworks", "Waste Management & Marine Litter", "Teamwork & Collaboration", "Fluent English Communication"] }
  ],
  experience: [
    {
      title: "National Project Officer",
      project: "Pacific Ocean Litter Project (POLP)",
      organization: "Environment and Conservation Division (ECD), Ministry of Environment, Lands & Agricultural Development (MELAD), Government of Kiribati",
      period: "Feb 2026 – Dec 2026",
      location: "Tarawa, Kiribati",
      highlights: [
        "Coordinated and supported implementation of regional marine litter and plastic pollution reduction activities under the Waste Management & Pollution Prevention unit.",
        "Built and maintained strong working relationships with government agencies, development partners, and community representatives.",
        "Managed responsibilities independently, met tight deadlines, and adapted to evolving project priorities."
      ]
    },
    {
      title: "Local Technical Counterpart",
      project: "Environment Resilience Framework (ERF)",
      organization: "Environment and Conservation Division (ECD), Ministry of Environment, Lands & Agricultural Development (MELAD), Government of Kiribati",
      period: "Jun 2025 – Dec 2025",
      location: "Tarawa, Kiribati",
      highlights: [
        "Supported the Climate Change Unit's initiatives on environmental conservation, preservation, and coastal protection.",
        "Engaged diverse stakeholders and fostered collaboration on sustainable practices across island communities.",
        "Applied geospatial and technical knowledge to develop practical solutions for the Division."
      ]
    }
  ],
  references: [
    {
      name: "Ms Teniti Aro Taam",
      position: "Ag. Project Manager, Waste Management & Pollution Prevention",
      organization: "Environment and Conservation Division, MELAD, Kiribati",
      email: "t.taam@melad.gov.ki"
    },
    {
      name: "Ms Terikano Nakekea",
      position: "Head of Unit, Climate Change",
      organization: "Environment and Conservation Division, MELAD, Kiribati",
      email: "t.nakekea@melad.gov.ki"
    }
  ]
};

module.exports = {
  getPortfolioData: () => portfolioData
};
