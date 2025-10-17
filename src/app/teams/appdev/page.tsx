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

export default function MobileTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                {/* --- HEADER --- */}
                <TeamPageNavigation />
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Beyond the Screen.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Mobile arm of the Development Division. Our work lives in the palm of your hand, creating seamless, performant, and intuitive native experiences that connect Altiora&apos;s digital ecosystem to the world.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to architect and build Altiora&apos;s flagship mobile applications. We translate ambitious ideas into polished, indispensable tools for both iOS and Android. We believe that a world-class mobile presence is non-negotiable, and we are obsessed with crafting applications that are not only functional but beautiful, fast, and a delight to use.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">NATIVE IOS DEVELOPMENT</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Building high-performance, pixel-perfect applications for the Apple ecosystem using Swift and SwiftUI. We harness the full power of iOS to deliver exceptional user experiences.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">NATIVE ANDROID DEVELOPMENT</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Crafting fluid and responsive applications for the diverse Android landscape with Kotlin and Jetpack Compose. Our focus is on quality, performance, and cohesive design.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">API & BACKEND INTEGRATION</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Designing and consuming robust APIs to ensure our applications are fast, responsive, and securely connected to Altiora&apos;s core infrastructure.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">PERFORMANCE & UI/UX</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">An obsessive focus on buttery-smooth animations, minimal battery consumption, and intuitive user interfaces. We believe the best design is invisible.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Arsenal</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We are fluent in the languages of mobile, utilizing modern, cutting-edge frameworks to build the best possible products.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "React Native", "Firebase", "GraphQL", "Realm", "Lottie", "Figma", "Xcode", "Android Studio"].map((tech) => (
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
                                        ENGAGE THE MOBILE TEAM
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        ENGAGE THE MOBILE TEAM
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">Need a mobile application built? Submit a dispatch request to our team.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="appdev" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
