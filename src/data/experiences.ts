import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Development Engineer",
    company: "Synergech",
    startDate: "Mar 2025",
    isCurrentJob: true,
    location: "India",
    description: [
    ],
  },
  {
    designation: "Full Stack Trainee (Intern)",
    company: "360 Ripples",
    startDate: "Aug 2024",
    endDate: "Feb 2025",
    isCurrentJob: false,
    location: "India",
    description: [
      "Received training in full stack development.",
      "Learned and practiced backend technologies like Spring Boot and container orchestration using Kubernetes.",
      "Built sample projects using modern frontend and backend frameworks.",
      "Gained hands-on experience in API integration and responsive design.",
    ],
  },
  {
    designation: "Backend Development Intern",
    company: "Tmachine Software Solutions",
    startDate: "Dec 2023",
    endDate: "Jun 2023",
    isCurrentJob: false,
    location: "India",
    description: [
      "Developed a model to track gaze points using TensorFlow and CNN architecture.",
      "Integrated the trained model into a Django backend for real-time predictions.",
      "Built the frontend using React (class-based components), Redux for state management, and Turborepo for monorepo management.",
    ],
  },
  {
    designation: "AWS Cloud Intern",
    company: "Marcello Tech",
    startDate: "Jan 2023",
    endDate: "Jan 2023",
    isCurrentJob: false,
    location: "India",
    description: [
      "Completed an internship in AWS Cloud Computing.",
      "Learned and applied fundamental cloud services and deployment strategies.",
      "Built and deployed sample applications on AWS infrastructure.",
    ],
  },
];

export default experiences;
