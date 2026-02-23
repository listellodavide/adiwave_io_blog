"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
    {
        title: 'Solution Architect Engineer / Digital Transformation Engineer',
        company: 'European Training Foundation (ETF)',
        location: 'Turin, Italy',
        period: '2025 - Present',
        type: 'Contractor',
        achievements: [
            'Architected and implemented scalable microservices in Azure using Spring Boot, designing domain-driven solutions',
            'Defined and executed cloud modernization strategies, leveraging Azure Functions, Logic Apps, and CI/CD pipelines',
            'Provided technical leadership and cross-team mentorship, driving architectural alignment and code quality',
            'Delivered impactful backend innovations for financial and transactional systems with ISO20022 XML format integration'
        ],
        technologies: ['Java Spring Boot', 'Azure DevOps', 'GitHub', 'Gradle', 'Docker', 'PowerShell', 'Dataverse', 'SQL Server 2019']
    },
    {
        title: 'Senior Java Software Engineer Tech Lead',
        company: 'Goldbach AG / TX Group',
        location: 'Italy, Switzerland, Serbia',
        period: '2022 - 2024',
        type: 'Full-time',
        achievements: [
            'Developed custom ECommerce application using Spring Boot and React, integrated SumUp, Stripe, PayPal payments',
            'Studied for AWS Architect Certification and learned CI/CD/K8s/Helm, defined DevOps pipelines for Kubernetes deployment',
            'Developed custom Bedrock AWS training data and connected Java Spring Boot AI with React 18',
            'Managed a team of 5 Java Developers in Belgrade, Serbia as Java Tech Lead'
        ],
        technologies: ['Java Spring Boot', 'PostgreSQL', 'Azure DevOps', 'GitHub', 'Gradle', 'Kubernetes', 'Docker', 'React 18', 'SCRUM']
    },
    {
        title: 'Senior Cloud Integration Engineer',
        company: 'Zurich Insurance',
        location: 'Switzerland',
        period: '2022',
        type: 'Contract',
        achievements: [
            'Integrated data from all car manufacturer technical specifications and Swiss car registration office',
            'Developed Spring backend for insurance policy registration based on car numberplate and model selection',
            'Optimized integration of different health insurance models into unified insurance policy engine'
        ],
        technologies: ['Java Spring Boot', 'PostgreSQL', 'MongoDB', 'Azure Serverless Functions', 'Azure API Gateway', 'REST API', 'Spring Security']
    },
    {
        title: 'Senior Full Stack Application Engineer',
        company: 'Credit Suisse',
        location: 'Zurich, Switzerland',
        period: '2021 - 2022',
        type: 'Contract',
        achievements: [
            'Developed Spring Web Application for the Wealth Management Team',
            'Improved Oracle Stored Procedure performance and optimized SQL queries',
            'Integrated Redis Cache to improve front-end performance for stock performance and portfolio reports'
        ],
        technologies: ['Java Spring Boot', 'Oracle', 'Redis', 'REST API']
    },
    {
        title: 'Senior Application Engineer / Solution Architect Backend Designer',
        company: 'Swiss Reinsurance Ltd',
        location: 'Zurich, Switzerland',
        period: '2020',
        type: 'Contract',
        achievements: [
            'Delivered microservice applications for MVP accounting system based on Kafka Stream',
            'Designed ETL data processor from source systems to Kafka streams topics for microservice consumption',
            'Collaborated with business analysts and senior solution architects to align technical designs with business strategy',
            'Achieved high scalability and performance, resolved high volume data processing issues'
        ],
        technologies: ['Java Spring Boot', 'Kafka', 'PostgreSQL', 'Azure DevOps', 'GitLab CI/CD', 'Gradle', 'Kubernetes', 'Docker', 'SCRUM', 'Jira']
    }
]

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <BlogHeader />
            <main className="pt-8">
                <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
                                Professional <span className="text-primary">Experience</span>
                            </h1>
                            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                                20+ years of architecting and delivering complex IT solutions for enterprise environments.
                            </p>
                        </motion.div>

                        <div className="space-y-10">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                                {experience.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-5 text-muted-foreground">
                                                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                                    <Building className="h-4 w-4 text-primary" />
                                                    <span className="text-sm font-medium">{experience.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                                    <MapPin className="h-4 w-4 text-primary" />
                                                    <span className="text-sm font-medium">{experience.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    <span className="text-sm font-medium">{experience.period}</span>
                                                </div>
                                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full border border-primary/20">
                                                    {experience.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 font-bold text-foreground mb-4 text-lg">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            Key Achievements
                                        </h4>
                                        <ul className="grid gap-3">
                                            {experience.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="flex items-start gap-4 group">
                                                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                                                    <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center gap-2 font-bold text-foreground mb-4 text-lg">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {experience.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary/50 hover:text-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <BlogFooter />
        </div>
    )
}
