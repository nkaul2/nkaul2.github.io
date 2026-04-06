export interface WorkEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export const workHistory: WorkEntry[] = [
  {
    title: "Software Engineer II",
    company: "Amazon",
    period: "June 2020 – Present",
    location: "Seattle/NYC/Atlanta",
    bullets: [
      "Tech lead for an org-wide GenAI testing framework — grew the team from just me to 4 engineers, cut launch timelines from 2+ weeks down to 3–4 hours, and achieved 100% test coverage with zero coding effort for consumers.",
      "Built a simulation layer using a GraphQL proxy to mock tricky edge cases (e.g. 'package lost', 'item not received'), making hard-to-test unhappy paths consistently coverable.",
      "Architected a GenAI-powered customer service platform (Claude via AWS Bedrock) supporting chat, phone, and touch — improved automated resolution rates across the board.",
      "Re-architected a config store with S3, API Gateway, Lambda, and DynamoDB after hitting 6MB+ JSON payload limits — built custom serialization on both ends to split and reassemble large configs, restoring 100% reliability.",
    ],
  },
];
