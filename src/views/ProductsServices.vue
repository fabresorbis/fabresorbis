<template>
    <div class="products_services">
        <NavigationMenu />

        <main class="fo-services">
            <header class="services-hero">
                <div class="services-container">
                    <span class="eyebrow">FO GROUPS</span>

                    <h1>Engineering expertise.<br />Complete project solutions.</h1>

                    <p>
                        From planning and design to execution and maintenance,
                        we bring together the expertise your project needs.
                        Explore our services for residential and commercial
                        spaces.
                    </p>

                    <a href="#our-services" class="primary-button">
                        Explore Our Services
                        <span aria-hidden="true">&darr;</span>
                    </a>
                </div>
            </header>

            <section
                id="our-services"
                class="services-container service-list"
                aria-label="Our services"
            >
                <article
                    v-for="(service, index) in services"
                    :key="service.id"
                    :id="service.id"
                    class="service-row"
                    :class="{ 'service-reversed': index % 2 !== 0 }"
                >
                    <div class="service-art">
                        <span class="art-label" aria-hidden="true">
                            FO / {{ String(index + 1).padStart(2, "0") }}
                        </span>

                        <svg
                            viewBox="0 0 240 180"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <circle
                                cx="120"
                                cy="90"
                                r="75"
                                fill="#e6edf3"
                            />
                            <circle
                                cx="181"
                                cy="42"
                                r="22"
                                fill="#f6c900"
                            />
                            <circle
                                cx="47"
                                cy="130"
                                r="10"
                                fill="#f6c900"
                            />

                            <g
                                fill="none"
                                stroke="#17324d"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    v-for="(path, pathIndex) in service.paths"
                                    :key="pathIndex"
                                    :d="path"
                                />
                            </g>

                            <path
                                d="M42 153 H198"
                                stroke="#aabcca"
                                stroke-width="3"
                                stroke-linecap="round"
                            />
                        </svg>

                        <span class="art-caption">
                            {{ service.caption }}
                        </span>
                    </div>

                    <div class="service-copy">
                        <span class="eyebrow">
                            SERVICE {{ String(index + 1).padStart(2, "0") }}
                        </span>

                        <h2>{{ service.title }}</h2>
                        <p>{{ service.description }}</p>

                        <ul>
                            <li
                                v-for="item in service.inclusions"
                                :key="item"
                            >
                                {{ item }}
                            </li>
                        </ul>

                        <router-link
                            :to="{
                                path: '/contact-us',
                                query: { service: service.title }
                            }"
                            class="text-link"
                        >
                            Discuss Your Requirements
                            <span aria-hidden="true">&rarr;</span>
                        </router-link>
                    </div>
                </article>
            </section>

            <section class="project-process">
                <div class="services-container">
                    <span class="eyebrow">OUR APPROACH</span>
                    <h2>A clear path from idea to delivery.</h2>

                    <div class="process-grid">
                        <div
                            v-for="step in steps"
                            :key="step.title"
                            class="process-step"
                        >
                            <span class="process-number">
                                {{ step.number }}
                            </span>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-cta">
                <div class="services-container cta-inner">
                    <div>
                        <span class="eyebrow">LET'S WORK TOGETHER</span>
                        <h2>Tell us what you are planning.</h2>
                        <p>
                            Share your project location, scope, and priorities.
                            We will help you identify the services you need.
                        </p>
                    </div>

                    <router-link
                        to="/contact-us"
                        class="primary-button"
                    >
                        Contact FO GROUPS
                        <span aria-hidden="true">&rarr;</span>
                    </router-link>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

export default {
    name: "ProductsServices",

    components: {
        NavigationMenu,
        Footer
    },

    metaInfo: {
        title: "Products & Services",
        titleTemplate: "%s | FO GROUPS",
        meta: [
            {
                vmid: "description",
                name: "description",
                content:
                    "Explore FO GROUPS services in civil works, engineering design, MEP, HVAC, ELV, project management, turnkey projects, maintenance, and labour support."
            }
        ],
        htmlAttrs: {
            lang: "en"
        }
    },

    data() {
        return {
            services: [
                {
                    id: "civil-architectural",
                    title: "Civil & Architectural Works",
                    caption: "SPACES BUILT WITH PURPOSE",
                    description:
                        "We bring together construction expertise and architectural thinking to create practical, well-planned spaces. Our approach considers the intended use, site conditions, and finishing requirements of each project.",
                    inclusions: [
                        "Residential and commercial civil works",
                        "Renovation and building improvement works",
                        "Architectural works and finishing coordination",
                        "Site execution aligned with project drawings"
                    ],
                    paths: [
                        "M55 145 V78 L98 44 L141 78 V145 Z",
                        "M141 145 H188 V63 H141",
                        "M78 145 V109 H113 V145",
                        "M76 85 H88 V97 H76 Z M108 85 H120 V97 H108 Z",
                        "M156 80 H173 M156 99 H173 M156 118 H173"
                    ]
                },
                {
                    id: "engineering-design",
                    title: "Engineering Design Solutions",
                    caption: "IDEAS DEVELOPED INTO PLANS",
                    description:
                        "Clear design is the foundation of effective execution. We develop engineering solutions that balance functionality, efficiency, and practical site requirements, helping clients make informed decisions before work begins.",
                    inclusions: [
                        "Project planning and technical design development",
                        "Engineering drawings and coordinated layouts",
                        "Design review and technical consultation",
                        "Coordination between project disciplines"
                    ],
                    paths: [
                        "M58 40 H161 V143 H58 Z",
                        "M74 60 H112 M74 72 H99",
                        "M78 124 V98 L110 80 L143 98 V124 Z",
                        "M103 124 V105 H120 V124",
                        "M171 137 L184 140 L202 62 L189 59 Z",
                        "M171 137 L174 151 L184 140",
                        "M188 68 L201 71"
                    ]
                },
                {
                    id: "mep-hvac",
                    title: "MEP & HVAC Solutions",
                    caption: "BUILDING SYSTEMS THAT WORK TOGETHER",
                    description:
                        "We provide mechanical, electrical, plumbing, and air-conditioning solutions for comfortable and functional buildings. Coordinated planning helps these systems work together while supporting access for maintenance and long-term performance.",
                    inclusions: [
                        "Mechanical and electrical project services",
                        "Plumbing and building utility systems",
                        "Air-conditioning and ventilation solutions",
                        "System layout and installation coordination"
                    ],
                    paths: [
                        "M52 47 H187 V96 H52 Z",
                        "M66 62 H171 M66 75 H135",
                        "M68 96 V104 H172 V96",
                        "M80 116 C66 128 94 133 80 145",
                        "M119 116 C105 128 133 133 119 145",
                        "M158 116 C144 128 172 133 158 145",
                        "M158 74 H173 M158 83 H173",
                        "M42 53 V85 M197 53 V85"
                    ]
                },
                {
                    id: "elv-solutions",
                    title: "ELV Design & Project Solutions",
                    caption: "CONNECTED. COORDINATED. CONTROLLED.",
                    description:
                        "We plan and deliver extra-low-voltage systems that support building connectivity, monitoring, and safety. Each solution is coordinated around the building layout, operational needs, and provision for future maintenance.",
                    inclusions: [
                        "CCTV and surveillance system solutions",
                        "Networking and structured cabling",
                        "Fire alarm system solutions",
                        "ELV layouts and project coordination"
                    ],
                    paths: [
                        "M60 47 L136 62 L128 94 L52 79 Z",
                        "M136 66 L158 68 L151 91 L130 89",
                        "M91 88 L85 107 H58",
                        "M58 97 V119",
                        "M164 107 H199 V142 H164 Z",
                        "M174 117 H189 M174 127 H189",
                        "M102 130 H132 V110 H148",
                        "M87 120 H102 V140 H87 Z",
                        "M171 44 Q196 52 202 76 M168 57 Q181 62 185 75"
                    ]
                },
                {
                    id: "project-management",
                    title: "Project Management & Consultation",
                    caption: "CLARITY AT EVERY STAGE",
                    description:
                        "We help clients organise project requirements, coordinate work, and track progress. Our project management and consultation services provide a clear framework for decisions, responsibilities, and execution.",
                    inclusions: [
                        "Project scope and execution planning",
                        "Scheduling and progress monitoring",
                        "Coordination of teams and work packages",
                        "Technical consultation and handover coordination"
                    ],
                    paths: [
                        "M65 44 H176 V146 H65 Z",
                        "M96 44 V34 H145 V53 H96 Z",
                        "M80 74 L85 79 L94 68 M106 74 H158",
                        "M80 99 L85 104 L94 93 M106 99 H146",
                        "M80 124 L85 129 L94 118 M106 124 H154",
                        "M184 76 H199 V137 H184"
                    ]
                },
                {
                    id: "turnkey-projects",
                    title: "Residential & Commercial Turnkey Projects",
                    caption: "FROM CONCEPT TO HANDOVER",
                    description:
                        "Our turnkey approach brings design, coordination, and execution into one managed project scope. We help clients move from their initial requirements to a completed space through coordinated delivery and clear communication.",
                    inclusions: [
                        "Requirement assessment and project planning",
                        "Design and work-package coordination",
                        "Civil, finishing, and building services integration",
                        "Completion and handover within the agreed scope"
                    ],
                    paths: [
                        "M51 93 L104 47 L157 93",
                        "M65 84 V145 H143 V84",
                        "M91 145 V111 H116 V145",
                        "M92 79 H115 V96 H92 Z",
                        "M162 107 A15 15 0 1 1 192 107 A15 15 0 1 1 162 107",
                        "M177 122 V147 M177 137 H190 M177 146 H186"
                    ]
                },
                {
                    id: "operations-maintenance",
                    title: "Operations & Maintenance Solutions",
                    caption: "SUPPORT BEYOND HANDOVER",
                    description:
                        "Reliable buildings need ongoing care. We support the operation and maintenance of building systems through planned attention, technical support, and corrective works suited to the facility's requirements.",
                    inclusions: [
                        "Preventive maintenance planning and support",
                        "Building system inspections and upkeep",
                        "Troubleshooting and corrective maintenance",
                        "Facility operations and technical coordination"
                    ],
                    paths: [
                        "M62 145 V65 H135 V145 Z",
                        "M78 83 H91 M107 83 H120 M78 101 H91 M107 101 H120",
                        "M85 145 V120 H112 V145",
                        "M167 57 C150 61 145 80 154 93 L136 126 L148 134 L169 103 C189 105 202 88 195 72 L182 85 L170 80 L167 67 L177 56 Z"
                    ]
                },
                {
                    id: "labour-services",
                    title: "Labour Services",
                    caption: "PEOPLE WHO SUPPORT PROGRESS",
                    description:
                        "We provide skilled and unskilled workforce support for project and site requirements. Deployment is aligned with the agreed work scope, required skills, and execution schedule.",
                    inclusions: [
                        "Skilled workforce for project activities",
                        "Unskilled labour and site assistance",
                        "Workforce coordination based on site needs",
                        "Support for short-term and ongoing requirements"
                    ],
                    paths: [
                        "M91 76 C91 40 148 40 148 76",
                        "M86 77 H153 M111 48 V66 M130 48 V66",
                        "M99 81 V92 C99 116 141 116 141 92 V81",
                        "M79 145 V129 Q120 105 161 129 V145",
                        "M99 121 V145 M141 121 V145",
                        "M47 89 C47 65 79 65 79 89 M43 90 H83",
                        "M51 95 Q63 116 76 95",
                        "M39 143 V126 L66 116",
                        "M164 89 C164 65 196 65 196 89 M160 90 H200",
                        "M168 95 Q180 116 193 95",
                        "M176 116 L203 126 V143"
                    ]
                }
            ],

            steps: [
                {
                    number: "01",
                    title: "Understand",
                    description:
                        "Discuss your requirements, site conditions, priorities, and expected outcomes."
                },
                {
                    number: "02",
                    title: "Plan",
                    description:
                        "Define the scope, technical approach, schedule, and coordination requirements."
                },
                {
                    number: "03",
                    title: "Deliver",
                    description:
                        "Coordinate execution with attention to workmanship and project progress."
                },
                {
                    number: "04",
                    title: "Support",
                    description:
                        "Complete the agreed handover and discuss ongoing maintenance needs."
                }
            ]
        };
    }
};
</script>

<style scoped>
.fo-services {
    color: #17324d;
    background: #fff;
}

.services-container {
    width: calc(100% - 40px);
    max-width: 1160px;
    margin: 0 auto;
}

.services-hero {
    padding: 88px 0 80px;
    background: #f2f5f7;
    border-bottom: 5px solid #f6c900;
}

.eyebrow {
    display: block;
    margin-bottom: 18px;
    color: #506476;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.services-hero h1 {
    max-width: 900px;
    margin: 0 0 24px;
    font-size: 54px;
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -1.5px;
}

.services-hero p {
    max-width: 660px;
    margin: 0 0 30px;
    color: #526171;
    font-size: 18px;
    line-height: 1.8;
}

.primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 15px 22px;
    background: #f6c900;
    color: #17324d;
    font-weight: 700;
    text-decoration: none;
    border-radius: 4px;
}

.primary-button:hover {
    background: #ffda33;
}

.primary-button:focus-visible,
.text-link:focus-visible {
    outline: 3px solid #527b9b;
    outline-offset: 5px;
}

.service-list {
    padding-top: 16px;
    padding-bottom: 24px;
}

.service-row {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 76px;
    align-items: center;
    padding: 72px 0;
    border-bottom: 1px solid #e1e7ec;
    scroll-margin-top: 100px;
}

.service-row:last-child {
    border-bottom: none;
}

.service-reversed {
    grid-template-columns: 1.1fr 0.9fr;
}

.service-reversed .service-art {
    order: 2;
}

.service-art {
    position: relative;
    padding: 25px;
    background: #f5f7f9;
    border-radius: 12px;
}

.service-art svg {
    display: block;
    width: 100%;
    height: auto;
}

.art-label {
    display: block;
    color: #667b8e;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
}

.art-caption {
    display: block;
    padding-top: 12px;
    color: #506476;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.service-copy h2 {
    margin: 0 0 18px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
}

.service-copy > p {
    margin: 0 0 22px;
    color: #526171;
    font-size: 16px;
    line-height: 1.8;
}

.service-copy ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
}

.service-copy li {
    position: relative;
    margin-bottom: 11px;
    padding-left: 20px;
    color: #344c61;
    font-size: 15px;
    line-height: 1.6;
}

.service-copy li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 7px;
    height: 7px;
    background: #f6c900;
    border-radius: 50%;
}

.text-link {
    display: inline-flex;
    gap: 12px;
    align-items: center;
    padding-bottom: 5px;
    color: #17324d;
    border-bottom: 2px solid #f6c900;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}

.text-link:hover {
    border-color: #17324d;
}

.project-process {
    padding: 72px 0;
    background: #f2f5f7;
}

.project-process h2,
.services-cta h2 {
    margin: 0 0 30px;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.2;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.process-step {
    padding-top: 22px;
    border-top: 2px solid #cad6df;
}

.process-number {
    color: #62788a;
    font-size: 13px;
    font-weight: 700;
}

.process-step h3 {
    margin: 14px 0 10px;
    font-size: 21px;
    font-weight: 700;
}

.process-step p {
    margin: 0;
    color: #526171;
    font-size: 15px;
    line-height: 1.7;
}

.services-cta {
    padding: 72px 0;
    background: #17324d;
    color: #fff;
}

.services-cta .eyebrow {
    color: #f6c900;
}

.cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.services-cta h2 {
    margin-bottom: 15px;
}

.services-cta p {
    max-width: 620px;
    margin: 0;
    color: #d8e2eb;
    font-size: 16px;
    line-height: 1.8;
}

.services-cta .primary-button {
    flex-shrink: 0;
}

@media (max-width: 900px) {
    .services-hero h1 {
        font-size: 43px;
    }

    .service-row,
    .service-reversed {
        gap: 36px;
        grid-template-columns: 0.85fr 1.15fr;
    }

    .service-copy h2 {
        font-size: 27px;
    }

    .process-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .cta-inner {
        align-items: flex-start;
        flex-direction: column;
    }
}

@media (max-width: 640px) {
    .services-hero {
        padding: 56px 0;
    }

    .services-hero h1 {
        font-size: 35px;
        letter-spacing: -0.8px;
    }

    .services-hero p {
        font-size: 16px;
    }

    .service-row,
    .service-reversed {
        grid-template-columns: 1fr;
        gap: 28px;
        padding: 45px 0;
    }

    .service-reversed .service-art {
        order: 0;
    }

    .service-art {
        width: 100%;
        max-width: 360px;
        margin: 0 auto;
    }

    .service-copy h2 {
        font-size: 27px;
    }

    .project-process,
    .services-cta {
        padding: 52px 0;
    }

    .project-process h2,
    .services-cta h2 {
        font-size: 28px;
    }

    .process-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
</style>
