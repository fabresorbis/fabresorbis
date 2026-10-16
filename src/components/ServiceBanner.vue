<template>
    <div class="fo-company-showcase">
        <section class="fo-statistics">
            <div class="showcase-container">
                <div class="statistics-heading">
                    <span class="section-label">
                        FO GROUPS AT A GLANCE
                    </span>

                    <h2>Experience that supports every project.</h2>

                    <p>
                        Bringing together practical knowledge, engineering
                        expertise, and project experience to deliver
                        lasting value.
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
                        class="project-button"
                    >
                        Let’s Discuss Your Project
                        <span aria-hidden="true">&rarr;</span>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="clients-section" aria-labelledby="clients-title">
            <div class="showcase-container">
                <div class="clients-heading">
                    <span class="section-label">OUR CLIENTS</span>

                    <h2 id="clients-title">
                        Relationships built through our work.
                    </h2>

                    <p>
                        Proud to work with businesses across different
                        sectors and project requirements.
                    </p>
                </div>

                <div class="clients-marquee">
                    <div
                        class="clients-track"
                        :class="{ 'is-paused': clientsPaused }"
                    >
                        <ul class="clients-group" aria-label="Client names">
                            <li
                                v-for="client in clients"
                                :key="client.id"
                                class="client-item"
                            >
                                <img
                                    v-if="client.logo && !client.failed"
                                    :src="client.logo"
                                    :alt="client.name"
                                    class="client-logo"
                                    decoding="async"
                                    referrerpolicy="no-referrer"
                                    @error="handleLogoError(client.id)"
                                />

                                <strong v-else class="client-name">
                                    {{ client.name }}
                                </strong>
                            </li>
                        </ul>

                        <ul class="clients-group" aria-hidden="true">
                            <li
                                v-for="client in clients"
                                :key="'copy-' + client.id"
                                class="client-item"
                            >
                                <img
                                    v-if="client.logo && !client.failed"
                                    :src="client.logo"
                                    alt=""
                                    class="client-logo"
                                    decoding="async"
                                    referrerpolicy="no-referrer"
                                    @error="handleLogoError(client.id)"
                                />

                                <strong v-else class="client-name">
                                    {{ client.name }}
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>

                <button
                    type="button"
                    class="clients-pause"
                    :aria-pressed="clientsPaused ? 'true' : 'false'"
                    @click="clientsPaused = !clientsPaused"
                >
                    {{ clientsPaused ? "Resume scrolling" : "Pause scrolling" }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "ServiceBanner",

    data() {
        return {
            clientsPaused: false,

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
            ],

            clients: [
                {
                    id: "lulu",
                    name: "LuLu Group India",
                    logo:
                        "https://upload.wikimedia.org/wikipedia/commons/f/f8/LuluLogo.jpg",
                    failed: false
                },
                {
                    id: "trine",
                    name: "Trine Holdings",
                    logo: "",
                    failed: false
                },
                {
                    id: "salkara",
                    name: "Salkara by Paragon",
                    logo: "",
                    failed: false
                },
                {
                    id: "aditya-birla",
                    name: "Aditya Birla",
                    logo:
                        "https://www.adityabirla.com/_next/static/media/aditya-birla-group-download-logo.a8a380da.webp",
                    failed: false
                },
                {
                    id: "jci",
                    name: "JCI Tower",
                    logo: "",
                    failed: false
                },
                {
                    id: "desi",
                    name: "Desi Dumblings",
                    logo: "",
                    failed: false
                },
                {
                    id: "mathura",
                    name: "Mathura Infrastructure",
                    logo: "",
                    failed: false
                },
                {
                    id: "auto-spa",
                    name: "Auto Spa",
                    logo: "",
                    failed: false
                },
                {
                    id: "north-express",
                    name: "North Express",
                    logo: "",
                    failed: false
                }
            ]
        };
    },

    methods: {
        handleLogoError(clientId) {
            const client = this.clients.find(
                item => item.id === clientId
            );

            if (client) {
                client.failed = true;
            }
        }
    }
};
</script>

<style scoped>
.fo-company-showcase {
    width: 100%;
}

.showcase-container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
}

.fo-statistics {
    padding: 76px 24px;
    background: #17324d;
    color: #ffffff;
}

.statistics-heading {
    max-width: 700px;
    margin: 0 auto 48px;
    text-align: center;
}

.section-label {
    display: block;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.statistics-heading .section-label {
    color: #f6c900;
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

.project-button {
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

.project-button:hover {
    background: #ffda33;
}

.project-button:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 5px;
}

/* Client showcase */

.clients-section {
    padding: 70px 24px 54px;
    background: #ffffff;
    color: #17324d;
}

.clients-heading {
    max-width: 720px;
    margin: 0 auto 36px;
    text-align: center;
}

.clients-heading .section-label {
    color: #536b80;
}

.clients-heading h2 {
    margin: 0 0 16px;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.25;
}

.clients-heading p {
    margin: 0;
    color: #526171;
    font-size: 16px;
    line-height: 1.8;
}

.clients-marquee {
    width: 100%;
    overflow: hidden;
    border-top: 1px solid #e4e9ee;
    border-bottom: 1px solid #e4e9ee;
}

.clients-track {
    display: flex;
    width: max-content;
    animation: client-scroll 40s linear infinite;
}

.clients-group {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 32px;
    margin: 0;
    padding: 24px 32px 24px 0;
    list-style: none;
}

.client-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 210px;
    width: 210px;
    height: 112px;
    padding: 12px;
    box-sizing: border-box;
    text-align: center;
}

.client-logo {
    display: block;
    width: auto;
    height: auto;
    max-width: 170px;
    max-height: 82px;
    object-fit: contain;
}

.client-name {
    display: block;
    color: #17324d;
    font-size: 21px;
    font-weight: 800;
    line-height: 1.35;
}

.clients-track.is-paused,
.clients-marquee:hover .clients-track {
    animation-play-state: paused;
}

.clients-pause {
    display: block;
    margin: 24px auto 0;
    padding: 9px 16px;
    border: 1px solid #bcc9d3;
    border-radius: 4px;
    background: #ffffff;
    color: #17324d;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}

.clients-pause:hover {
    background: #f2f5f7;
    border-color: #17324d;
}

.clients-pause:focus-visible {
    outline: 2px solid #17324d;
    outline-offset: 4px;
}

@keyframes client-scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
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

    .clients-section {
        padding: 52px 20px 40px;
    }

    .clients-heading h2 {
        font-size: 27px;
    }

    .clients-group {
        gap: 24px;
        padding-right: 24px;
    }

    .client-item {
        flex-basis: 170px;
        width: 170px;
        height: 96px;
    }

    .client-logo {
        max-width: 145px;
        max-height: 70px;
    }

    .client-name {
        font-size: 18px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .clients-track {
        width: 100%;
        animation: none;
        transform: none;
    }

    .clients-group {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        padding: 24px 0;
        box-sizing: border-box;
    }

    .clients-group[aria-hidden="true"],
    .clients-pause {
        display: none;
    }
}
</style>
