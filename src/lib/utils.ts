import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Web from "@/assets/teams/web.jpg";
import App from "@/assets/teams/app.jpg";
import Game from "@/assets/teams/game.jpg";
import Infra from "@/assets/teams/infra.jpg";
import LowLvl from "@/assets/teams/lowlvl.jpg";
import AI from "@/assets/teams/ai.jpg";
import Comp from "@/assets/teams/comp.jpg"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const images = [
	{ src: Web, tags: ["FRONT END", "BACK END", "FULL STACK"], alt: "web development", link: "webdev" },
	{ src: App, tags: ["MOBILE", "NATIVE", "CROSS PLATFORM"], alt: "app development", link: "appdev" },
	{ src: Game, tags: ["GAME DESIGN", "ENGINE", "GRAPHICS"], alt: "game development", link: "gamedev" },
	{ src: Infra, tags: ["DEVOPS", "CLOUD", "SERVERS"], alt: "infrastructure", link: "infra" },
	{ src: LowLvl, tags: ["SYSTEMS", "COMPILERS", "PERFORMANCE"], alt: "low level", link: "lowlvl" },
	{ src: AI, tags: ["AI", "ML", "DATA"], alt: "artificial intelligence", link: "ai" },
	{ src: Comp, tags: ["ALGORITHMS", "DATA STRUCTURES", "LEETCODE"], alt: "competitive programming", link: "comp" },
];
