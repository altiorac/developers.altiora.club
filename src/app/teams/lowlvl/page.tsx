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

export default function LowLevelTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                <TeamPageNavigation />
                {/* --- HEADER --- */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Architects of the Core.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Low-Level team of the Development Division. We operate where software meets silicon, writing hyper-performant code for kernels, compilers, and custom runtimes. We build the bedrock of execution for Altiora.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to unlock maximum performance by engineering software with direct hardware control. We develop custom compilers, high-throughput libraries, and specialized runtimes that serve as the engine for Altiora&apos;s most demanding applications. When off-the-shelf is too slow and abstraction is a bottleneck, we are the solution.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">SYSTEMS PROGRAMMING</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Writing code that lives in privileged execution space. We work with schedulers, memory managers, and file systems, operating at the kernel level to build foundational software.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">COMPILER DEVELOPMENT</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Building the tools that translate human-readable code into machine instructions. We work on frontends, optimization passes, and code generation using frameworks like LLVM.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">PERFORMANCE ENGINEERING</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">An obsessive pursuit of speed. We use advanced profiling, SIMD vectorization, and cache-aware data structures to squeeze every cycle of performance out of the CPU.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">EMBEDDED & REAL-TIME SYSTEMS</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Developing firmware and software for microcontrollers and specialized hardware where latency is measured in microseconds and reliability is absolute.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Arsenal</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We are fluent in the languages of the machine, utilizing tools that provide direct, unabstracted control over the hardware.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["C", "C++", "Rust", "Assembly (x86/ARM)", "Linux Kernel", "LLVM", "CMake", "GDB", "QEMU", "Perf", "FreeRTOS", "SIMD"].map((tech) => (
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
                                        ENGAGE THE CORE TEAM
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        ENGAGE THE CORE TEAM
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">For missions requiring extreme performance or custom runtimes. Submit a dispatch.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="lowlvl" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
