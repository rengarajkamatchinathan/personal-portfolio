export interface Certification {
  id: string
  name: string
  issuer: string
  year: string // shown top-right; free-form, e.g. "2026" or "Sep 2025"
  short?: string // short badge code shown when there's no logo, e.g. "AWS", "K8S"
  url?: string // credential / verify link — the "verify" link shows only when present
  logo?: string // path to an issuer logo in /public (e.g. "/logos/aws.svg"); overrides the short code
}

// Placeholder content — edit with your real certifications.
// Badge: shows `logo` if the file exists, otherwise the `short` code, otherwise a ✓ badge.
export const certifications: Certification[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: "2026",
    short: "AWS",
    logo: "/logos/aws.svg",
    url: "https://www.credly.com/badges/d41d50c1-0a07-4c37-9db0-0d484fb4c93a/public_url",
  },
  {
    id: "az-900",
    name: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
    issuer: "Amazon Web Services",
    year: "2023",
    short: "AWS",
    logo: "/logos/aws.svg",
    url: "https://www.credly.com/badges/196be5ae-e559-438b-aa18-b8f3636f697e/public_url",
  },
  {
    id: "udemy-java",
    name: "Java Programming",
    issuer: "Udemy",
    year: "2023",
    short: "UD",
    logo: "/logos/udemy.svg",
    url: "https://www.udemy.com/certificate/UC-96308a33-9bd5-45d7-a8ef-9c0a220c8b87/",
  },
  {
    id: "udemy-django",
    name: "Django Framework",
    issuer: "Udemy",
    year: "2023",
    short: "UD",
    logo: "/logos/udemy.svg",
    url: "https://www.udemy.com/certificate/UC-b3614fe0-6f9f-4abf-a4e7-93091c1d64ea/",
  },
  {
    id: "udemy-react",
    name: "React JS",
    issuer: "Udemy",
    year: "2023",
    short: "UD",
    logo: "/logos/udemy.svg",
    url: "https://www.udemy.com/certificate/UC-eff41b90-6859-477f-b31d-803025cc2c97/",
  },
  {
    id: "udemy-machine-learning",
    name: "Machine Learning",
    issuer: "Udemy",
    year: "2024",
    short: "UD",
    logo: "/logos/udemy.svg",
    url: "https://www.udemy.com/certificate/UC-9b6dba69-e058-44d5-aa56-52df142e42d2/",
  },
  {
    id: "udemy-deep-learning",
    name: "Deep Learning",
    issuer: "Udemy",
    year: "2024",
    short: "UD",
    logo: "/logos/udemy.svg",
    url: "https://www.udemy.com/certificate/UC-b15d840a-22df-4ae7-bd16-53994c85d829/",
  },
]
