export const defaultData = {
  defaultWorkData: [
    {
      position: "Project Manager",
      company: "ABC Corp",
      location: "New York, NY",
      period: "Jan 2021 - Present",
      description:
        "Led cross-functional teams on software development projects with budgets up to $500k. Improved delivery timelines by 20% through streamlined processes and agile methodologies. Managed stakeholder communications and weekly reporting.",
      form: "work",
      id: crypto.randomUUID(),
    },
    {
      position: "Operations Associate",
      company: "XYZ Solutions",
      location: "Brooklyn, NY",
      period: "Aug 2018 - Dec 2020",
      description:
        "Supported daily business operations, customer onboarding, and logistics coordination. Analyzed operational data and recommended improvements that reduced costs by 15%. Assisted in training and mentoring 3 junior team members.",
      form: "work",
      id: crypto.randomUUID(),
    },
  ],

  defaultPersonalData: [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      tel: "(001) 123-4567",
      address: "Broadway Ave 1",
      form: "personal",
      id: crypto.randomUUID(),
    },
  ],

  defaultEducationData: [
    {
      school: "Harvard University",
      location: "Cambridge, MA",
      degree: "Bachelor of Business Administration (BBA)",
      period: "Sep 2014 - Jun 2018",
      form: "education",
      id: crypto.randomUUID(),
    },
  ],
};
