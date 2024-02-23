export type Pub = {
  pubId: null;
  pubName: string;
  pubLocation: string;
  description: string;
  teamName: string;
  menuImageSrc: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
  waitTeam: string;
  isOpen: boolean;
};

export type Booth = {
  boothId: null;
  boothName: string;
  boothLocation: string;
  description: string;
  teamName: string;
  openTime: string;
  closeTime: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
};

export type Place = Pub | Booth;

export type PlaceLocation = {
  location: string;
  x: number;
  y: number;
  rotate: number;
};

type Sections = {
  [key: string]: PlaceLocation[];
};

export type PlaceLocations = {
  [key: number]: Sections;
};

export interface Stage {
  id: null;
  showName: string;
  status: string;
  teamName: string;
  startTime: string;
}
