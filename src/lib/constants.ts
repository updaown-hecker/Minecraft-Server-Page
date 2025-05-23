import type { LucideIcon } from 'lucide-react';
import { DollarSign, HeartCrack, PuzzleIcon, BedDouble, CloudSun, Box, PlusCircle, ScrollText, Brain } from 'lucide-react';

export const SERVER_IP = "storage-attendance.gl.at.ply.gg:45831";
export const SERVER_NAME = "Storage Attendance Hub";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#gamemodes", label: "Game Modes" },
  { href: "#store", label: "Store", disabled: true, note: "Coming Soon" },
  { href: "https://discord.gg/yourserver", label: "Discord", external: true },
  { href: "#support", label: "Support" },
];

export const FOOTER_LINKS = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/credits", label: "Credits" },
  { href: "/report-bug", label: "Report Bug" },
];

export const SOCIAL_LINKS = [
  { name: "Discord", href: "https://discord.gg/yourserver", iconKey: "Discord" },
  { name: "YouTube", href: "https://youtube.com/yourchannel", iconKey: "Youtube" },
  { name: "Twitter", href: "https://twitter.com/yourprofile", iconKey: "Twitter" },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
}

export const FEATURES_DATA: Feature[] = [
  {
    id: "economy",
    title: "Dynamic Economy System",
    description: "Fully functional ShopGUI with animated item icons. Real-time pricing updates, infinite categories. Earn money from jobs, PvE drops, trading, and auctions.",
    Icon: DollarSign,
  },
  {
    id: "pvp",
    title: "Life Steal PvP Mechanics",
    description: "Get stronger with every kill – literally. Lose hearts if you die – bring skill or lose it all. Custom overlays and visual effects during combat.",
    Icon: HeartCrack,
  },
  {
    id: "plugins",
    title: "Modular Plugins System",
    description: "Built on a scalable plugin framework for constant updates. Lightning-fast command response, lagless interactions. Admin-level polish on all features.",
    Icon: PuzzleIcon,
  },
];

export interface GameMode {
  id: string;
  title: string;
  description: string;
  status: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  image?: string;
}

export const GAMEMODES_DATA: GameMode[] = [
  {
    id: "bedwars",
    title: "BedWars",
    description: "Defend your bed with traps and turrets. Custom maps, leaderboards, and ranking system.",
    status: "Coming Soon",
    Icon: BedDouble,
    image: "https://placehold.co/600x400.png",
  },
  {
    id: "skyblock",
    title: "SkyBlock",
    description: "Floating island survival with challenges. Upgradable islands, custom generators, and prestige system.",
    status: "Coming Soon",
    Icon: CloudSun,
    image: "https://placehold.co/600x400.png",
  },
  {
    id: "skybox",
    title: "SkyBox (Creative PvP)",
    description: "Build your own battleground — then fight in it. Modded building tools + PvP kits = chaos and creativity.",
    status: "Coming Soon",
    Icon: Box,
    image: "https://placehold.co/600x400.png",
  },
  {
    id: "more",
    title: "More to Come...",
    description: "Survival+, Hardcore Realms, Faction Warzones, Parkour Arenas. Constant development with player input.",
    status: "Planned",
    Icon: PlusCircle,
    image: "https://placehold.co/600x400.png",
  },
];

export const LOADING_TIPS_PROMPT_INPUT = {
  theme: "Neon sci-fi",
  style: "Concise and helpful",
  numTips: 4,
};

export const LOADING_TIPS_ICONS: (LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>)[] = [
  ScrollText,
  Brain,
  PuzzleIcon,
  Zap,
];

export const UPTIME_PERCENTAGE = "99.99%";
export const CURRENT_PLAYERS = 217; // Example, make dynamic later
export const MAX_PLAYERS = 500; // Example
export const SERVER_STATUS_ONLINE = true; // Example
export const HERO_TITLE = "Rewriting the Rules of Minecraft Servers.";
export const HERO_SUBTITLE = "Join a high-performance, modded, and evolving world — powered by tech, run by community, and built for legends.";

export const JOIN_BUTTON_TEXT = "JOIN NOW";
