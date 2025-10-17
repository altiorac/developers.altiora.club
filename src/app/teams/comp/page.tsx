"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Link from "next/link";
import Footer from "@/components/footer";
import TextScroller from "@/components/ui/textscroll";

import { TeamPageNavigation } from "@/components/ui/teampagenavigation";
import { NextTeamSection } from "@/components/ui/nextteamsection";

// Re-using the same animation variants from your other pages for consistency
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5,
        },
    },
};

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

const Section = ({ children }: { children: React.ReactNode }) => (
    <motion.div variants={itemVariants} className="border-t border-foreground/20 pt-10">
        {children}
    </motion.div>
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => <h2 className="font-fancy italic text-4xl md:text-5xl font-thin tracking-tighter mb-6">{children}</h2>;

export default function CompetitiveProgrammingTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                <TeamPageNavigation />
                {/* --- HEADER --- */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Masters of the Algorithm.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Competitive Programming team of the Development Division. We operate at the intersection of logic, mathematics, and code, dedicated to solving the most complex computational problems with unrivaled speed and precision.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to sharpen the algorithmic edge of Altiora. We represent the organization in the world&apos;s most prestigious programming contests, pushing the boundaries of problem-solving. Internally, we serve as a specialized task force, providing algorithmic expertise to other divisions, optimizing critical code, and tackling computational bottlenecks that others deem impossible.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">ALGORITHMIC MASTERY</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Deep expertise in algorithm design paradigms, from dynamic programming and graph traversal to complex flow networks and number theory. We turn intractable problems into elegant solutions.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">ADVANCED DATA STRUCTURES</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Implementation and application of sophisticated structures like Segment Trees, Tries, and Fenwick Trees to manage and query data with maximum performance.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">COMPUTATIONAL OPTIMIZATION</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">A relentless focus on complexity analysis, reducing time and space requirements from exponential to polynomial, and from linear to logarithmic. Efficiency is our primary metric.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">CONTEST STRATEGY</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Mastery of speed, accuracy, and strategic problem selection under extreme time pressure. We thrive in high-stakes, time-constrained competitive environments like the ICPC.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Arena</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We hone our skills on the global stage, using languages built for speed and platforms designed to challenge the very best.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["C++", "STL", "Java", "Python", "GDB", "Codeforces", "LeetCode", "TopCoder", "AtCoder", "ICPC", "Google Code Jam"].map((tech) => (
                                <span key={tech} className="font-standard tracking-widest text-sm text-foreground/60">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Section>

                    {/* --- CALL TO ACTION --- */}
                    <motion.div variants={itemVariants} className="pt-10 pb-24">
                        <Link href="/apply" className="focus:outline-none group w-full md:w-auto inline-block">
                            <TextScroller
                                items={[
                                    <span className="font-standard text-2xl tracking-widest" key="cta-standard">
                                        CHALLENGE THE PROGRAMMING TEAM
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        CHALLENGE THE PROGRAMMING TEAM
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">Facing an intractable algorithmic problem? Submit a dispatch for consultation.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="comp" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
