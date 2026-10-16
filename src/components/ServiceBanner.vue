<template>
    <section class="fo-statistics">
        <div class="statistics-container">
            <div class="statistics-heading">
                <span class="statistics-label">FO GROUPS AT A GLANCE</span>

                <h2>Experience that supports every project.</h2>

                <p>
                    Bringing together practical knowledge, engineering
                    expertise, and project experience to deliver lasting value.
                </p>
            </div>

            <div class="statistics-grid">
                <div
                    v-for="stat in statistics"
                    :key="stat.label"
                    class="statistic-item"
                >
                    <strong class="statistic-value">
                        {{ stat.value }}
                    </strong>

                    <h3>{{ stat.label }}</h3>

                    <p>{{ stat.description }}</p>
                </div>
            </div>

            <div class="statistics-action">
                <router-link
                    to="/contact-us"
                    class="statistics-link"
                >
                    Let’s Discuss Your Project
                    <span aria-hidden="true">&rarr;</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ServiceBanner",

    data() {
        return {
            statistics: [
                {
                    value: "50+",
                    label: "Completed Projects",
                    description:
                        "Practical experience across a range of project requirements."
                },
                {
                    value: "5+",
                    label: "Years of Company Experience",
                    description:
                        "Delivering engineering and project solutions."
                },
                {
                    value: "10+",
                    label: "Expert Engineers",
                    description:
                        "Engineering expertise across multiple disciplines."
                },
                {
                    value: "30+",
                    label: "Years of Combined Experience",
                    description:
                        "The collective professional experience of our team."
                }
            ]
        };
    }
};
</script>

<style scoped>
.fo-statistics {
    padding: 76px 24px;
    background: #17324d;
    color: #ffffff;
}

.statistics-container {
    max-width: 1180px;
    margin: 0 auto;
}

.statistics-heading {
    max-width: 700px;
    margin: 0 auto 48px;
    text-align: center;
}

.statistics-label {
    display: block;
    margin-bottom: 16px;
    color: #f6c900;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.statistics-heading h2 {
    margin: 0 0 18px;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.25;
}

.statistics-heading p {
    margin: 0;
    color: #d4dfe8;
    font-size: 17px;
    line-height: 1.8;
}

.statistics-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.statistic-item {
    padding: 16px 24px;
    text-align: center;
    border-right: 1px solid #41586d;
}

.statistic-item:last-child {
    border-right: none;
}

.statistic-value {
    display: block;
    margin-bottom: 15px;
    color: #f6c900;
    font-size: 58px;
    font-weight: 700;
    line-height: 1.1;
}

.statistic-item h3 {
    margin: 0 0 12px;
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.5;
}

.statistic-item p {
    margin: 0;
    color: #d4dfe8;
    font-size: 14px;
    line-height: 1.7;
}

.statistics-action {
    margin-top: 44px;
    text-align: center;
}

.statistics-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 14px 22px;
    border-radius: 4px;
    background: #f6c900;
    color: #17324d;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
}

.statistics-link:hover {
    background: #ffda33;
}

.statistics-link:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 5px;
}

@media (max-width: 900px) {
    .statistics-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 32px;
    }

    .statistic-item:nth-child(2) {
        border-right: none;
    }

    .statistics-heading h2 {
        font-size: 31px;
    }
}

@media (max-width: 540px) {
    .fo-statistics {
        padding: 56px 20px;
    }

    .statistics-heading {
        margin-bottom: 32px;
    }

    .statistics-heading h2 {
        font-size: 27px;
    }

    .statistics-heading p {
        font-size: 16px;
    }

    .statistics-grid {
        grid-template-columns: 1fr;
        row-gap: 0;
    }

    .statistic-item {
        padding: 28px 12px;
        border-right: none;
        border-bottom: 1px solid #41586d;
    }

    .statistic-item:last-child {
        border-bottom: none;
    }

    .statistic-value {
        font-size: 50px;
    }
}
</style>
