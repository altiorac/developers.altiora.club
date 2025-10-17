"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { images as allTeams } from "@/lib/utils";
import { cn } from "@/lib/utils";

const itemVariants: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

interface NextTeamSectionProps {
	currentTeamSlug: string;
}

export function NextTeamSection({ currentTeamSlug }: NextTeamSectionProps) {
	const currentIndex = allTeams.findIndex((team) => team.link === currentTeamSlug);

	if (currentIndex === -1) {
		return null; // Don't render if the slug is invalid
	}

	// Calculate the next index, looping back to the start
	const nextIndex = (currentIndex + 1) % allTeams.length;
	const nextTeam = allTeams[nextIndex];

	return (
		<motion.div variants={itemVariants} className="pt-24 pb-16">
			<p className="font-standard text-foreground/60 mb-8 text-center text-sm tracking-widest">
				EXPLORE NEXT
			</p>
			
			<Link
				href={`/teams/${nextTeam.link}`}
				className={cn(
					"group relative block w-full aspect-[2/1] md:aspect-[2.5/1] overflow-hidden",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:ring-foreground"
				)}
			>
				{/* Background Image */}
				<Image
					src={nextTeam.src}
					alt={nextTeam.alt}
					fill
					className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, 896px"
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />

				{/* Centered Text Content */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
					<h2 className="font-fancy italic text-4xl md:text-6xl font-thin text-white tracking-tighter capitalize">
						{nextTeam.alt}
					</h2>
					<div className="mt-4 flex items-center gap-2 text-white/80 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
						<span className="font-standard tracking-widest text-sm">VIEW TEAM</span>
						<span className="text-xl">→</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
