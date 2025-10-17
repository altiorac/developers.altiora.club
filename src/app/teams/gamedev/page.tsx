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

export default function GameDevelopmentTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                <TeamPageNavigation />
                {/* --- HEADER --- */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Builders of Worlds.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Game Development team of the Development Division. We craft immersive, interactive experiences that captivate, challenge, and inspire. Our work blends artistry and engineering to construct the virtual worlds of Altiora.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to create groundbreaking games and interactive simulations. We leverage cutting-edge technology to explore new forms of narrative, gameplay, and virtual interaction. Whether for entertainment, training simulations for other divisions, or showcasing emerging tech, we build experiences that are memorable, polished, and push creative boundaries.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">GAME DESIGN & PROTOTYPING</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Conceptualizing and validating core mechanics, gameplay loops, and narrative structures. We rapidly iterate from paper designs to playable prototypes to find the fun.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">ENGINE & SYSTEMS PROGRAMMING</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Architecting and implementing the foundational code that powers our worlds, from rendering and physics to AI behavior and player controls, primarily in Unreal Engine and Unity.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">ART & ASSET PIPELINE</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Managing the entire creative workflow, from 3D modeling and texturing to animation, VFX, and audio design. We ensure all assets are optimized for performance and aesthetic cohesion.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">MULTIPLAYER & LIVE OPS</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Developing robust networked experiences for real-time multiplayer gameplay and building the infrastructure to support our games post-launch.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Arsenal</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We use industry-standard engines and tools to bring our creative visions to life, ensuring quality and scalability.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["Unreal Engine", "Unity", "C++", "C#", "Blender", "Maya", "Substance Painter", "FMOD", "Wwise", "Git", "Perforce", "Houdini"].map((tech) => (
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
                                        ENGAGE THE GAME DEV TEAM
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        ENGAGE THE GAME DEV TEAM
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">Have an idea for a game or interactive experience? Submit a dispatch request.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="gamedev" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
