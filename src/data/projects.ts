export interface Project {
  title: string;
  period: string;
  description: string;
  link?: string;
  linkLabel?: string;
  image: string;
  comingSoon?: boolean;
  comingSoonItems?: string[];
}

export const projects: Project[] = [
  {
    title: "Rendezvous",
    period: "April 2019",
    description:
      'A calendar app built at PackHacks 2019 with 3 teammates using Swift and the Snap Creative Kit API (released only 10 days prior). Users generate unique stickers for calendar events to post to Snapchat. Won the MLH award for \u201cBest Use of SnapKit\u201d.',
    link: "https://devpost.com/software/rendezvous-7t20g1",
    linkLabel: "View Project",
    image: "/images/packhacks2019.png",
  },
  {
    title: "Makes a Hit — Spotify ML",
    period: "January 2019 – May 2019",
    description:
      "Machine learning project (CSC 422) with 2 teammates. Used Spotify Web API to gather numerical track data, then applied RandomForest and Genetic Clustering algorithms to classify track genre and generate new playlists from smaller test playlists.",
    link: "https://github.com/nkaul2/MakesAHit",
    linkLabel: "View Project",
    image: "/images/Spotify.png",
  },
  {
    title: "Coming Soon",
    period: "",
    description: "Currently working on some ideas...",
    image: "/images/Work-in-Progress.jpg",
    comingSoon: true,
    comingSoonItems: [
      "Twitter Bot with Spotify API",
      "TensorFlow image processing with dance",
      "Data Analysis on AirBNB Data",
      "Game using Stencyl",
    ],
  },
];
