// Central definition of the four NWSL teams participants can pick from.
// Update team copy, colors, logos, or links here.
//
// description is the team's home city. exampleProject is a short fact
// about the team shown on the choice picker cards. buildDetails repeats
// that fact on the reveal screen, followed by "Best players: " and the
// team's best players. accentColor is the team's brightest brand color, since
// darker team colors disappear against the app's dark background.
// artworkSrc points to the team's logo in public/artifacts/, and
// resourceUrl links to the team's official website.

export type ChoiceId =
  | "gotham-fc"
  | "san-diego-wave-fc"
  | "washington-spirit"
  | "angel-city-fc";

export interface Choice {
  id: ChoiceId;
  label: string;
  artifactName: string;
  description: string;
  exampleProject: string;
  buildDetails: string;
  resourceLabel: string;
  resourceUrl: string;
  accentColor: string;
  artworkSrc: string;
  artworkAlt: string;
}

export const CHOICES: Choice[] = [
  {
    id: "gotham-fc",
    label: "Gotham FC",
    artifactName: "Gotham FC",
    description: "New York City, NY",
    exampleProject: "2023 and 2025 NWSL champions, playing at Sports Illustrated Stadium in Harrison, NJ.",
    buildDetails:
      "2023 and 2025 NWSL champions, playing at Sports Illustrated Stadium in Harrison, NJ. Best players: Jaedyn Shaw, Esther González, Rose Lavelle, and Ann-Katrin Berger.",
    resourceLabel: "Gotham FC",
    resourceUrl: "https://www.gothamfc.com/",
    accentColor: "#A9F1FD",
    artworkSrc: "/artifacts/gotham-fc.png",
    artworkAlt: "Gotham FC logo",
  },
  {
    id: "san-diego-wave-fc",
    label: "San Diego Wave FC",
    artifactName: "San Diego Wave FC",
    description: "San Diego, CA",
    exampleProject: "2023 NWSL Shield winners, playing at Snapdragon Stadium in San Diego.",
    buildDetails:
      "2023 NWSL Shield winners, playing at Snapdragon Stadium in San Diego. Best players: Trinity Byars, Melanie Barcenas, Lia Godfrey, and Gia Corley.",
    resourceLabel: "San Diego Wave FC",
    resourceUrl: "https://sandiegowavefc.com/",
    accentColor: "#00A3AD",
    artworkSrc: "/artifacts/san-diego-wave-fc.png",
    artworkAlt: "San Diego Wave FC logo",
  },
  {
    id: "washington-spirit",
    label: "Washington Spirit",
    artifactName: "Washington Spirit",
    description: "Washington, DC",
    exampleProject: "2021 NWSL champions, playing at Audi Field in Washington, DC.",
    buildDetails:
      "2021 NWSL champions, playing at Audi Field in Washington, DC. Best players: Trinity Rodman, Leicy Santos, Sofia Cantore, and Esme Morgan.",
    resourceLabel: "Washington Spirit",
    resourceUrl: "https://washingtonspirit.com/",
    accentColor: "#FF4793",
    artworkSrc: "/artifacts/washington-spirit.png",
    artworkAlt: "Washington Spirit logo",
  },
  {
    id: "angel-city-fc",
    label: "Angel City FC",
    artifactName: "Angel City FC",
    description: "Los Angeles, CA",
    exampleProject: "Joined the NWSL in 2022 and plays at BMO Stadium in Los Angeles.",
    buildDetails:
      "Joined the NWSL in 2022 and plays at BMO Stadium in Los Angeles. Best players: Sveindís Jónsdóttir, Maiara Niehues, Ally Sentnor, and Evelyn Shores.",
    resourceLabel: "Angel City FC",
    resourceUrl: "https://angelcity.com/",
    accentColor: "#F1B1A5",
    artworkSrc: "/artifacts/angel-city-fc.png",
    artworkAlt: "Angel City FC logo",
  },
];

export function getChoiceById(id: string): Choice | undefined {
  return CHOICES.find((choice) => choice.id === id);
}

export const CHOICE_IDS = CHOICES.map((choice) => choice.id) as ChoiceId[];
