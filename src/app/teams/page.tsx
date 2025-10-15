"use client";

import DivisionList from "@/components/teams/teamslist";
import { motion } from "motion/react";
import Footer from "@/components/footer";

export default function Teams() {
	return (
		<div>
			<main>
				<div className="w-screen h-screen flex flex-col justify-center items-center text-center gap-8">
					<div className="relative inline-block w-fit overflow-hidden font-semibold">
						<motion.div
							initial={{
								y: 200,
							}}
							animate={{
								y: 0,
							}}
							transition={{
								duration: 1.25,
								delay: 0.5,
								ease: "easeOut" as const,
							}}
						>
							<span className="font-standard font-semibold tracking-tighter text-6xl md:text-7xl xl:text-8xl select-none pr-1">TEAMS</span>
						</motion.div>
					</div>
					<div className="relative inline-block overflow-hidden">
						<motion.div
							initial={{
								y: 200,
							}}
							animate={{
								y: 0,
							}}
							transition={{
								duration: 1.25,
								delay: 0.8,
								ease: "easeOut" as const,
							}}
							className="font-standard font-thin tracking-wider uppercase text-xs md:text-sm xl:text-base px-20"
						>
							Each team is designed to ideate, iterate, and ship.
						</motion.div>
					</div>
				</div>
				<DivisionList />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
