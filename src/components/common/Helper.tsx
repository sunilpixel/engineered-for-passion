import {
  SpeedometerIcon,
  HomeIcon,
  RupeeIcon,
  ChatIcon,
  DocumentIcon,
  FileIcon,
} from "./Icons";

export const leftMenuItems = [
  {
    id: 1,
    icon: <SpeedometerIcon />,
    tip: "Speed",
  },
  {
    id: 2,
    icon: <HomeIcon />,
    tip: "Click for Home",
  },
  {
    id: 3,
    icon: <RupeeIcon />,
    tip: "Rupee",
  },
];

export const RightMenuItems = [
  {
    id: 4,
    icon: <ChatIcon />,
    tip: "Chat",
  },
  {
    id: 5,
    icon: <DocumentIcon />,
    tip: "Document",
  },
  {
    id: 6,
    icon: <FileIcon />,
    tip: "File",
  },
];
export const RED = "#C40504";

export const STEPS = [
  { title: "Registration", sub: "Fill form for submission" },
  { title: "Consultation", sub: "Planning and pricing" },
  { title: "Arstist assign", sub: "according to task" },
  { title: "Vehicle Pickup", sub: "Payment & dropoff" },
];

export type Phase = "hero" | "warp" | "track" | "gap" | "delivery" | "thanks";

export const CUES: [number, Phase, number][] = [
  [0, "hero", 0],
  [1600, "warp", 0],
  [2500, "track", 0],
  [7050, "track", 1],
  [9600, "track", 2],
  [12100, "track", 3],
  [16600, "gap", 3],
  [17100, "delivery", 3],
  [20600, "thanks", 3],
];

export const EASE = [0.16, 1, 0.3, 1] as const;
export const carStats = [
  {
    id: 1,
    value: "352",
    label: "Top Speed",
    side: "left",
  },
  {
    id: 2,
    value: "3.2 Sec",
    label: "0-100 KM/H",
    side: "right",
  },
  {
    id: 3,
    value: "620",
    label: "Power (HP)",
    side: "left",
  },
  {
    id: 4,
    value: "2,450 KM",
    label: "Oil Change",
    side: "right",
  },
  {
    id: 5,
    value: "780",
    label: "Torque",
    side: "left",
  },
  {
    id: 6,
    value: "520 KM",
    label: "Range",
    side: "right",
  },
];
