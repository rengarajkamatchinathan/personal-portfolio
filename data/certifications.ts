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
]
