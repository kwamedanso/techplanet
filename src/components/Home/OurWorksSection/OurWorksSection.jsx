import React, { useEffect, useRef } from 'react';
import OurWorkCard from './OurWorkCard';
import styles from './styles/OurWorksSection.module.css';
import heroImage from "../../../assets/hero-image.jpg"
import dashboardImage from "../../../assets/dashboard4.webp"

const OurWorksSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: "Lunar - Customer Relationship Management Platform",
            description: "The Lunar project is a transformative effort aimed at enhancing the user experience and functionality of a Customer Relationship Management (CRM) platform.",
            tags: ["Web App", "Dashboard", "CRM", "SaaS"],
            images: [
                dashboardImage,
                heroImage,
            ],
            portfolioLink: "/portfolio/lunar"
        },
        {
            id: 2,
            title: "Uxertiv - Discover Learning UI/UX Design Live and Interactively",
            description: "Learn about UI/UX Design privately and in more depth with Uxertiv. Become a UI/UX designer with skills and mindset who are ready to compete and enter the world of creative industry.",
            tags: ["Web App", "Dashboard", "Elearning", "SaaS"],
            images: [
                heroImage,
            ],
            portfolioLink: "/portfolio/uxertiv"
        }
    ];

    return (
        <section ref={sectionRef} className={styles.our_works_section}>
            <div className={styles.projects_header}>
                <span className={styles.projects_label}>Projects</span>
                <h2>Discover Our Work</h2>
                <p>Clients trust us to craft impactful design solutions that drive growth and deliver lasting results.</p>
            </div>

            <div className={styles.projects_container}>
                {projects.map(project => (
                    <OurWorkCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        images={project.images}
                        portfolioLink={project.portfolioLink}
                    />
                ))}
            </div>

            <div className={styles.view_more_container}>
                <a href="/works" className={styles.view_more_link}>
                    View More Works <span className={styles.arrow}>→</span>
                </a>
            </div>
        </section>
    );
};

export default OurWorksSection;