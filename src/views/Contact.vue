<template>
    <div class="contact-page">
        <NavigationMenu />

        <section class="contact-hero" aria-labelledby="contact-hero-title">
            <div class="hero-container">
                <div class="hero-content">
                    <p class="hero-label">LET’S BUILD SOMETHING TOGETHER</p>

                    <h1 id="contact-hero-title">
                        Every great project starts with
                        <span>a conversation.</span>
                    </h1>

                    <p class="hero-description">
                        Share your vision. Let’s plan the next step together.
                    </p>

                    <div class="hero-services">
                        <span>Engineering</span>
                        <span>Construction</span>
                        <span>Project Solutions</span>
                    </div>
                </div>

                <div class="hero-art" aria-hidden="true">
                    <svg
                        viewBox="0 0 440 290"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                    >
                        <!-- Connection paths -->
                        <g
                            stroke="#5c829e"
                            stroke-width="2"
                            stroke-dasharray="5 7"
                        >
                            <path d="M60 95H120V140" />
                            <path d="M330 65H280V105" />
                            <path d="M350 205H310V170" />
                            <path d="M85 230H130V195" />
                        </g>

                        <!-- Ground and blueprint outlines -->
                        <path
                            d="M55 248H385"
                            stroke="#ffcc00"
                            stroke-width="3"
                            stroke-linecap="round"
                        />
                        <path
                            d="M105 262H335"
                            stroke="#5c829e"
                            stroke-width="2"
                            stroke-linecap="round"
                        />

                        <!-- Main building -->
                        <path
                            d="M160 246V78L258 52V246"
                            fill="#0b3a5b"
                            stroke="#ffffff"
                            stroke-width="3"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M258 105H310V246"
                            fill="#124867"
                            stroke="#ffffff"
                            stroke-width="3"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M112 246V145H160"
                            stroke="#ffffff"
                            stroke-width="3"
                            stroke-linejoin="round"
                        />

                        <!-- Building windows -->
                        <g
                            stroke="#ffcc00"
                            stroke-width="5"
                            stroke-linecap="round"
                        >
                            <path d="M181 105H194M220 95H233" />
                            <path d="M181 135H194M220 125H233" />
                            <path d="M181 165H194M220 155H233" />
                            <path d="M181 195H194M220 185H233" />
                            <path d="M278 132H290M278 162H290" />
                            <path d="M278 192H290M130 170H140" />
                            <path d="M130 199H140" />
                        </g>

                        <!-- Entrance -->
                        <path
                            d="M198 246V218H226V246"
                            stroke="#ffffff"
                            stroke-width="3"
                        />

                        <!-- Engineering gear -->
                        <g transform="translate(340 66)">
                            <circle
                                r="28"
                                fill="#022c4b"
                                stroke="#ffcc00"
                                stroke-width="3"
                            />
                            <circle
                                r="11"
                                stroke="#ffffff"
                                stroke-width="3"
                            />
                            <g
                                stroke="#ffcc00"
                                stroke-width="7"
                                stroke-linecap="square"
                            >
                                <path d="M0 -34V-28M0 28V34" />
                                <path d="M-34 0H-28M28 0H34" />
                                <path d="M-24 -24L-20 -20" />
                                <path d="M24 -24L20 -20" />
                                <path d="M-24 24L-20 20" />
                                <path d="M24 24L20 20" />
                            </g>
                        </g>

                        <!-- Conversation bubble -->
                        <path
                            d="M39 58H101V99H72L55 113V99H39Z"
                            fill="#ffcc00"
                            stroke="#ffcc00"
                            stroke-width="3"
                            stroke-linejoin="round"
                        />
                        <g fill="#022c4b">
                            <circle cx="55" cy="79" r="3" />
                            <circle cx="70" cy="79" r="3" />
                            <circle cx="85" cy="79" r="3" />
                        </g>

                        <!-- Connected system node -->
                        <circle
                            cx="360"
                            cy="205"
                            r="21"
                            fill="#022c4b"
                            stroke="#ffcc00"
                            stroke-width="3"
                        />
                        <path
                            d="M350 205L357 212L371 197"
                            stroke="#ffffff"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />

                        <circle cx="85" cy="230" r="5" fill="#ffcc00" />
                        <circle cx="280" cy="105" r="4" fill="#ffcc00" />
                    </svg>
                </div>
            </div>
        </section>

        <ContactForm />
        <Location />
        <Footer />
        <router-view />
    </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default {
    name: "Contact",

    components: {
        NavigationMenu,
        ContactForm,
        Location,
        Footer
    },

    metaInfo: {
        title: "Contact Us",
        titleTemplate: "%s - FO Groups",
        htmlAttrs: {
            lang: "en"
        }
    }
};
</script>

<style scoped>
.contact-page {
    width: 100%;
}

.contact-hero {
    position: relative;
    overflow: hidden;
    background-color: #022c4b;
    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.035) 1px,
            transparent 1px
        );
    background-size: 36px 36px;
    border-bottom: 4px solid #ffcc00;
    color: #ffffff;
}

.hero-container {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    align-items: center;
    gap: 36px;
    width: 100%;
    max-width: 1180px;
    min-height: 300px;
    margin: 0 auto;
    padding: 66px 28px 30px;
    box-sizing: border-box;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-label {
    margin: 0 0 14px;
    color: #ffcc00;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 2px;
}

.hero-content h1 {
    max-width: 620px;
    margin: 0;
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.8px;
}

.hero-content h1 span {
    color: #ffcc00;
}

.hero-description {
    margin: 18px 0 0;
    color: #dce6ee;
    font-size: 16px;
    line-height: 1.7;
}

.hero-services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 18px;
    margin-top: 22px;
}

.hero-services span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #dce6ee;
    font-size: 12px;
    font-weight: 600;
}

.hero-services span::before {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffcc00;
}

.hero-art {
    width: 100%;
    max-width: 350px;
    justify-self: end;
}

.hero-art svg {
    display: block;
    width: 100%;
    height: auto;
}

@media (max-width: 900px) {
    .hero-container {
        gap: 20px;
        padding: 52px 24px 32px;
    }

    .hero-content h1 {
        font-size: 32px;
    }
}

@media (max-width: 600px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 12px;
        padding: 56px 24px 28px;
    }

    .hero-content h1 {
        max-width: 440px;
        font-size: 30px;
    }

    .hero-description {
        font-size: 15px;
    }

    .hero-label {
        font-size: 10px;
        letter-spacing: 1.5px;
    }

    .hero-art {
        max-width: 200px;
        justify-self: center;
    }

    .hero-services {
        gap: 10px 14px;
        margin-top: 18px;
    }
}
</style>
