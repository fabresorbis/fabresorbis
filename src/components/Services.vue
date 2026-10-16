<template>
    <section class="why-choose-section">
        <div class="why-choose-container">
            <div class="why-choose-intro">
                <span class="section-label">WHY CHOOSE US</span>

                <h2>
                    Engineering expertise.<br />
                    A commitment to your project.
                </h2>

                <p>
                    At FO GROUPS, every detail matters. We bring together
                    engineering knowledge, practical experience, and careful
                    coordination to deliver solutions that serve your needs
                    today and create value for the future.
                </p>

                <router-link
                    to="/products-services"
                    class="services-link"
                >
                    Explore Our Services
                    <span aria-hidden="true">&rarr;</span>
                </router-link>
            </div>

            <div class="why-choose-strengths">
                <div
                    v-for="(strength, index) in strengths"
                    :key="strength.title"
                    class="strength-item"
                >
                    <span class="strength-number" aria-hidden="true">
                        {{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}
                    </span>

                    <div class="strength-content">
                        <h3>{{ strength.title }}</h3>
                        <p>{{ strength.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            strengths: [
                {
                    title: "Multidisciplinary Expertise",
                    description:
                        "Engineering, design, and project capabilities brought together for coordinated solutions."
                },
                {
                    title: "Built Around Your Needs",
                    description:
                        "A practical approach shaped by your priorities, site requirements, budget, and long-term goals."
                },
                {
                    title: "Quality & Responsibility",
                    description:
                        "Attention to workmanship, reliable execution, and responsible use of materials and resources."
                },
                {
                    title: "Partnership & Transparency",
                    description:
                        "Clear communication, accountability, and a commitment to building lasting client relationships."
                }
            ]
        };
    }
};
</script>

<style scoped>
.why-choose-section {
    padding: 80px 24px;
    background: #f7f8fa;
    color: #17324d;
}

.why-choose-container {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.section-label {
    display: inline-block;
    margin-bottom: 20px;
    padding-left: 16px;
    border-left: 4px solid #f6c900;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
}

.why-choose-intro h2 {
    margin: 0 0 24px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
}

.why-choose-intro > p {
    margin: 0 0 30px;
    color: #526171;
    font-size: 17px;
    line-height: 1.8;
}

.services-link {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f6c900;
    color: #17324d;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
}

.services-link:hover {
    border-bottom-color: #17324d;
}

.services-link:focus-visible {
    outline: 2px solid #17324d;
    outline-offset: 6px;
}

.services-link span {
    font-size: 22px;
}

.strength-item {
    display: flex;
    align-items: flex-start;
    gap: 22px;
    padding: 24px 0;
    border-bottom: 1px solid #dce2e8;
}

.strength-item:first-child {
    padding-top: 0;
}

.strength-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.strength-number {
    flex-shrink: 0;
    padding-top: 2px;
    color: #687b8d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 1px;
}

.strength-content h3 {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
}

.strength-content p {
    margin: 0;
    color: #526171;
    font-size: 16px;
    line-height: 1.7;
}

@media (max-width: 900px) {
    .why-choose-container {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .why-choose-intro h2 {
        font-size: 34px;
    }
}

@media (max-width: 480px) {
    .why-choose-section {
        padding: 56px 20px;
    }

    .why-choose-intro h2 {
        font-size: 29px;
    }

    .strength-item {
        gap: 16px;
    }

    .strength-content h3 {
        font-size: 18px;
    }
}
</style>
