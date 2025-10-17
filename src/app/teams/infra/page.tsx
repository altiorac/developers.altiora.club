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

export default function InfrastructureTeamPage() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground pt-40">
            <main className="container mx-auto max-w-3xl px-6">
                <TeamPageNavigation />
                {/* --- HEADER --- */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                    <h1 className="font-fancy italic text-6xl md:text-8xl font-thin tracking-tighter mb-4">Engineers of the Unseen.</h1>
                    <p className="font-standard text-lg md:text-xl text-foreground/80 max-w-2xl">We are the Infrastructure team of the Development Division. We build and maintain the high-performance, resilient, and scalable foundation upon which all of Altiora&apos;s digital services operate. We are the architects of the platform.</p>
                </motion.div>

                {/* --- CONTENT SECTIONS --- */}
                <motion.div className="mt-24 flex flex-col gap-20" variants={containerVariants} initial="hidden" animate="visible">
                    {/* --- OUR MANDATE --- */}
                    <Section>
                        <SectionHeader>Our Mandate</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg">Our mission is to empower Altiora&apos;s developers to build and ship with velocity and confidence. We abstract away the complexity of the underlying systems, providing a secure, automated, and observable platform. By embracing Infrastructure as Code and DevOps principles, we ensure that our foundation is as agile and innovative as the applications it supports.</p>
                    </Section>

                    {/* --- CORE DISCIPLINES --- */}
                    <Section>
                        <SectionHeader>Core Disciplines</SectionHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">CLOUD ARCHITECTURE</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Designing and managing our multi-cloud environment. We architect for scalability, fault tolerance, and cost-efficiency, ensuring our platform can handle any load.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">AUTOMATION & CI/CD</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Building and maintaining robust, automated pipelines for continuous integration and deployment. Our goal is to make deploying new services safe, fast, and boring.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">SITE RELIABILITY (SRE)</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">An obsession with uptime and performance. We implement comprehensive monitoring, logging, and alerting to proactively identify and resolve issues before they impact users.</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-standard tracking-widest text-base mb-2">PLATFORM SECURITY</h3>
                                <p className="font-standard text-foreground/70 text-sm md:text-base">Embedding security into every layer of the stack. We manage identity, access controls, network policies, and vulnerability scanning to protect Altiora&apos;s data and services.</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- OUR ARSENAL --- */}
                    <Section>
                        <SectionHeader>Our Arsenal</SectionHeader>
                        <p className="font-standard text-foreground/80 text-base md:text-lg mb-6">We use declarative, code-driven tools to build and manage a modern, resilient, and scalable cloud-native platform.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana", "Datadog", "Vault"].map((tech) => (
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
                                        PROVISION INFRASTRUCTURE
                                    </span>,
                                    <span className="font-fancy italic text-3xl font-thin tracking-tighter" key="cta-fancy">
                                        PROVISION INFRASTRUCTURE
                                    </span>,
                                ]}
                                className="h-10"
                                textAlign="left"
                            />
                            <div className="w-full h-[1px] bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                        </Link>
                        <p className="font-standard text-foreground/60 mt-4 text-sm md:text-base">Need to deploy a new service or scale an existing one? Submit a dispatch.</p>
                    </motion.div>
                    <div className="w-full h-[1px] bg-foreground/30" />
                    <NextTeamSection currentTeamSlug="infra" />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
