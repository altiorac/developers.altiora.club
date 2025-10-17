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

export default function WebDevelopmentTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                <TeamPageNavigation />
                {/* --- HEADER --- */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Architects of the Digital Experience.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Web Development team. We design, build, and deploy the beautiful, performant, and scalable web applications that serve as the digital face of Altiora and its divisions.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to engineer Altiora&apos;s entire web presence, from public-facing marketing sites to complex internal dashboards. We are responsible for creating a cohesive, intuitive, and lightning-fast user experience across all browsers and devices, ensuring our digital platforms are as ambitious and reliable as our organization.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">FRONTEND ENGINEERING</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Building responsive, interactive, and accessible user interfaces with modern frameworks. We turn complex designs into fluid, component-based reality.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">BACKEND DEVELOPMENT</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Architecting scalable server-side logic, database schemas, and the APIs that power our applications. We ensure our systems are secure, efficient, and robust.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">UI/UX & ACCESSIBILITY</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">A deep focus on user-centric design principles. We work closely with designers to translate vision into code while adhering to the highest standards of web accessibility.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">DEPLOYMENT & DEVOPS</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Automating our development and deployment pipelines. We manage cloud infrastructure to ensure our applications are always available, scalable, and easy to update.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Stack</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We leverage a modern, TypeScript-first stack designed for developer experience, performance, and scalability.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "GraphQL", "Docker", "Vercel", "AWS", "Figma"].map((tech) => (
                                <span key={tech} className="font-standard tracking-widest text-sm text-foreground/60">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Section>

                    {/* --- CALL TO ACTION --- */}
                    <motion.div variants={itemVariants} className="pt-10 pb-24">
                        <Link href="/apply" className="focus-visible:outline-none group w-full md:w-auto inline-block">
                            <TextScroller
                                items={[
                                    <span className="font-standard text-2xl tracking-widest" key="cta-standard">
                                        ENGAGE THE WEB TEAM
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        ENGAGE THE WEB TEAM
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">Need a web application, landing page, or a new interface? Submit a dispatch.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="webdev" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
