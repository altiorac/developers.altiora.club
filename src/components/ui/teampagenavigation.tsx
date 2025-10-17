"use client";

import { motion } from "motion/react";
import Link from "next/link";
import TextScroller from "@/components/ui/textscroll";

export function TeamPageNavigation() {
	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="mb-16"
		>
			<Link href="/teams" className="focus-visible:outline-none group w-auto inline-block">
				<TextScroller
					items={[
						<span className="font-standard text-xl tracking-widest" key="nav-standard">
							← ALL TEAMS
						</span>,
						<span className="font-fancy italic text-2xl font-thin tracking-tighter" key="nav-fancy">
                            <span className="font-standard mr-2">←</span> ALL TEAMS
						</span>,
					]}
					className="h-8"
					textAlign="left"
				/>
				<div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
			</Link>
		</motion.div>
	);
}
