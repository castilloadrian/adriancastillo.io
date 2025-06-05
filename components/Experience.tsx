'use client'

import { useState } from 'react'

interface ExperienceItem {
  years: string;
  role: string;
}

interface CompanyExperience {
  company: string;
  roles: ExperienceItem[];
}

const experiences: CompanyExperience[] = [
  {
    company: "hellofresh",
    roles: [
      {
        years: "june 2024 - present",
        role: "software engineer"
      }
    ]
  },
  {
    company: "h-e-b",
    roles: [
      {
        years: "mar 2022 - feb 2025",
        role: "software engineer II"
      },
      {
        years: "sept 2021 - mar 2022",
        role: "software engineer I"
      },
      {
        years: "june 2021 - july 2021",
        role: "software engineer intern"
      },
      {
        years: "june 2020 - july 2020",
        role: "software engineer intern"
      }
    ]
  }
];

export default function Experience() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)

  const toggleCompany = (company: string) => {
    setExpandedCompany(expandedCompany === company ? null : company)
  }

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">experience</h2>
      <div className="space-y-4">
        {experiences.map((company) => (
          <div key={company.company} className="space-y-2">
            <button
              onClick={() => toggleCompany(company.company)}
              className="text-lg hover:underline underline-offset-4 text-left"
            >
              <span className="text-foreground">{company.company}</span>{' '}
              <span className="text-muted-foreground">software engineer</span>
            </button>
            
            {expandedCompany === company.company && (
              <div className="space-y-3 pl-4 border-l-2 border-muted">
                {company.roles.map((role, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="text-lg">{role.role}</span>
                      <span className="text-sm text-muted-foreground">{role.years}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 