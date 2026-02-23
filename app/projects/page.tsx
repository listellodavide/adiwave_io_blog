"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'

const projects = [
    {
        id: 'real-estate-tokenization',
        title: 'Tokenized Real Estate Marketplace',
        description:
            'A real estate web application to search, select and buy/sell tokenized property using smart contracts and crypto-wallet payment transactions.',
        highlights: [
            'Property search, filtering and detailed asset pages',
            'Tokenization model mapped to ERC-20 / ERC-721 style contracts',
            'On-chain payments via user wallet interaction and off-chain settlement hooks',
            'Audit trail, KYC/AML integration and escrow smart contract patterns'
        ],
        tech: ['React', 'TypeScript', 'Smart Contracts', 'Web3 Wallet', 'Spring Boot']
    },
    {
        id: 'edms-law-firm',
        title: 'Electronic Document Management (Law Firm)',
        description:
            'An electronic document management system for law firms enabling appointment booking, document upload and attachment to cases, and lifecycle tracking through judicial steps until case closure.',
        highlights: [
            'Case-centric DDD model with secure document storage and versioning',
            'Role-based access control, audit logging and secure sharing',
            'Appointment scheduling, calendar integration and notifications',
            'Workflow orchestration to follow case stages and evidence tracking'
        ],
        tech: ['Spring Boot', 'Postgres', 'S3-compatible storage', 'OAuth2', 'DDD']
    },
    {
        id: 'api-hub-keycloak',
        title: 'Keycloak-backed API Hub & Gateway',
        description:
            'An API Hub for internal microservices with Keycloak authentication, route mapping, security roles, filtering, billing counters, and per-request rate limiting.',
        highlights: [
            'Central API gateway mapping internal routes to microservices',
            'Keycloak integration for SSO, RBAC and token validation',
            'Per-route rate limiting, quota/billing counters and analytics',
            'Request filtering, auditing and contract-first API gateway policies'
        ],
        tech: ['Keycloak', 'Kong/Envoy', 'Kafka', 'Prometheus', 'OpenAPI']
    },
    {
        id: 'timelog-badge-system',
        title: 'Employee TimeLog & Payroll Engine',
        description:
            'A web application to register timelog events (badge in/out), calculate billable hours and generate payslips including sick leave, holidays and remote-work compensation.',
        highlights: [
            'Badge event ingestion, deduplication and enrichment pipeline',
            'Timesheet aggregation, billing rules engine and payroll exports',
            'Integration with HR systems and payslip generation',
            'Compliance, audit trails and absence/leave management'
        ],
        tech: ['Kafka', 'Spring Boot', 'Postgres', 'React', 'ETL']
    }
]

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <BlogHeader />
            <main className="pt-8">
                <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            className="mb-12 text-center"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
                                Project <span className="text-primary">Showcases</span>
                            </h1>
                            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                                System-level case studies and architecture-focused project summaries.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                            {projects.map((p, idx) => (
                                <motion.article
                                    key={p.id}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-8">
                                        <div className="flex items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                                                        <rect x="2" y="3" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"></rect>
                                                        <rect x="14" y="3" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5"></rect>
                                                        <rect x="2" y="13" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"></rect>
                                                        <rect x="14" y="13" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.5"></rect>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {p.title}
                                                </h3>
                                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                                    {p.description}
                                                </p>

                                                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                                    <ul className="space-y-3">
                                                        {p.highlights.slice(0, 2).map((h, i) => (
                                                            <li key={i} className="flex items-start gap-3 group/item">
                                                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                                                                <span className="text-sm text-muted-foreground leading-snug group-hover/item:text-foreground transition-colors">{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <ul className="space-y-3">
                                                        {p.highlights.slice(2).map((h, i) => (
                                                            <li key={i} className="flex items-start gap-3 group/item">
                                                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                                                                <span className="text-sm text-muted-foreground leading-snug group-hover/item:text-foreground transition-colors">{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="mt-8 flex flex-wrap gap-2">
                                                    {p.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="rounded-lg bg-secondary/50 px-3 py-1 text-xs font-semibold text-muted-foreground border border-border group-hover:border-primary/10 transition-colors"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div
                            className="mt-16 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-2xl font-bold text-foreground">Common Microservice Patterns</h2>
                            <p className="mb-8 text-muted-foreground italic">
                                Reference architecture: Visualized Microservice Pattern Language.
                            </p>

                            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-border shadow-2xl">
                                <img
                                    src="https://microservices.io/i/MicroservicePatternLanguage.jpg"
                                    alt="Microservice Pattern Language"
                                    className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="bg-secondary/80 px-4 py-3 text-center text-xs text-muted-foreground border-t border-border">
                                    Image source: <a className="font-bold text-primary hover:underline" href="https://microservices.io" target="_blank" rel="noopener noreferrer">microservices.io</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <BlogFooter />
        </div>
    )
}
