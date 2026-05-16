import ExperienceList from "./ExperienceList";

const workList = [
  {
    name: "Canada Border Services Agency (CBSA)",
    tags: ["May 2023 to present", "Executive Assistant"],
  },
  {
    tags: [
      "Feb 2026 to Jul 2026",
      "Jun 2025 to Oct 2025",
      "A/Resource Management Supervisor",
    ],
  },
  {
    tags: ["April 2023 to May 2023", "A/ATIP Officer"],
  },
  {
    tags: ["Oct 2022 to May 2023", "Administrative Assistant"],
  },
];

const WorkExperience = () => (
  <ExperienceList title="Work Experience" items={workList} />
);

export default WorkExperience;
