export class PortfolioModel {
  static async fetchPortfolio() {
    try {
      const response = await fetch('/api/portfolio');
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (err) {
      console.warn('Backend connection failed, using fallback data:', err);
      return {
        profile: {
          name: "Teretia Tawaia",
          title: "Geospatial Science Professional & Environmental Project Officer",
          location: "Tarawa, Kiribati",
          email: "t.taam@melad.gov.ki",
          whatsapp: "+686 73013905",
          education: { degree: "Bachelor of Geospatial Science", institution: "The University of the South Pacific (USP)", year: "2025" },
          bio: "Passionate Geospatial Science graduate and Environmental Project Officer with expertise in marine litter reduction, environmental resilience frameworks, and community stakeholder engagement across Kiribati."
        },
        skills: [
          { category: "Core Expertise", items: ["Environmental Conservation", "Geospatial Data Analysis", "Project Coordination", "Stakeholder Engagement"] },
          { category: "Professional Skills", items: ["Climate Resilience Frameworks", "Waste Management & Marine Litter", "Teamwork & Collaboration", "Fluent English Communication"] }
        ],
        experience: [
          {
            title: "National Project Officer",
            project: "Pacific Ocean Litter Project (POLP)",
            organization: "Environment and Conservation Division (ECD), MELAD, Government of Kiribati",
            period: "Feb 2026 – Dec 2026",
            location: "Tarawa, Kiribati",
            highlights: ["Coordinated regional marine litter and plastic pollution reduction activities.", "Built and maintained relationships with government and community stakeholders.", "Managed responsibilities independently and met project deadlines."]
          },
          {
            title: "Local Technical Counterpart",
            project: "Environment Resilience Framework (ERF)",
            organization: "Environment and Conservation Division (ECD), MELAD, Government of Kiribati",
            period: "Jun 2025 – Dec 2025",
            location: "Tarawa, Kiribati",
            highlights: ["Supported Climate Change Unit initiatives on environmental preservation.", "Fostered community collaboration on sustainable practices.", "Applied technical skills to practical environmental challenges."]
          }
        ],
        references: [
          { name: "Ms Teniti Aro Taam", position: "Ag. Project Manager, Waste Management & Pollution Prevention", organization: "Environment and Conservation Division, MELAD, Kiribati", email: "t.taam@melad.gov.ki" },
          { name: "Ms Terikano Nakekea", position: "Head of Unit, Climate Change", organization: "Environment and Conservation Division, MELAD, Kiribati", email: "t.nakekea@melad.gov.ki" }
        ]
      };
    }
  }
}
