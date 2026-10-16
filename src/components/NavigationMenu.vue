<template>
    <nav class="fo-navigation" aria-label="Main navigation">
        <div class="navigation-container">
            <router-link
                to="/"
                class="brand-link"
                aria-label="FO Groups home"
                @click.native="closeMenu"
            >
                <img
                    :src="logo"
                    alt="FO GROUPS"
                    class="navigation-logo"
                />
            </router-link>

            <ul class="desktop-links">
                <li v-for="link in nav_links" :key="link.path">
                    <router-link
                        :to="link.path"
                        class="navigation-link"
                        exact
                    >
                        {{ link.menu }}
                    </router-link>
                </li>
            </ul>

            <button
                type="button"
                class="mobile-toggle"
                :aria-expanded="isOpenMobileMenu ? 'true' : 'false'"
                aria-controls="fo-mobile-menu"
                :aria-label="isOpenMobileMenu ? 'Close menu' : 'Open menu'"
                @click="isOpenMobileMenu = !isOpenMobileMenu"
                @keydown.esc="closeMenu"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        v-if="isOpenMobileMenu"
                        d="M6 6L18 18M6 18L18 6"
                    />
                    <path
                        v-else
                        d="M4 6H20M4 12H20M4 18H20"
                    />
                </svg>
            </button>
        </div>

        <div
            v-if="isOpenMobileMenu"
            id="fo-mobile-menu"
            class="mobile-menu"
            @keydown.esc="closeMenu"
        >
            <ul>
                <li v-for="link in nav_links" :key="link.path">
                    <router-link
                        :to="link.path"
                        class="mobile-link"
                        exact
                        @click.native="closeMenu"
                    >
                        {{ link.menu }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import logo from "../assets/images/fo-groups-logo.png";

export default {
    name: "NavigationMenu",

    data() {
        return {
            logo,
            isOpenMobileMenu: false,
            nav_links: [
                {
                    menu: "Home",
                    path: "/"
                },
                {
                    menu: "About Us",
                    path: "/about-us"
                },
                {
                    menu: "Products & Services",
                    path: "/products-services"
                },
                {
                    menu: "Contact Us",
                    path: "/contact-us"
                }
            ]
        };
    },

    watch: {
        $route() {
            this.closeMenu();
        }
    },

    methods: {
        closeMenu() {
            this.isOpenMobileMenu = false;
        }
    }
};
</script>

<style scoped>
.fo-navigation {
    position: relative;
    z-index: 2000;
    width: 100%;
    background: #17324d;
}

.navigation-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    max-width: 1280px;
    min-height: 88px;
    margin: 0 auto;
    padding: 10px 28px;
    box-sizing: border-box;
}

.brand-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 6px 12px;
    border-radius: 5px;
    background: #ffffff;
    text-decoration: none;
}

.navigation-logo {
    display: block;
    width: 112px;
    height: 56px;
    object-fit: contain;
}

.desktop-links {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.navigation-link {
    display: block;
    padding: 10px 15px;
    border-radius: 24px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
}

.navigation-link:hover,
.navigation-link.router-link-exact-active {
    background: #f6c900;
    color: #17324d;
}

.brand-link:focus-visible,
.navigation-link:focus-visible,
.mobile-toggle:focus-visible,
.mobile-link:focus-visible {
    outline: 3px solid #f6c900;
    outline-offset: 4px;
}

.mobile-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 8px;
    border: 1px solid #6b8093;
    border-radius: 6px;
    background: transparent;
    color: #ffffff;
    cursor: pointer;
}

.mobile-toggle svg {
    width: 26px;
    height: 26px;
}

.mobile-menu {
    display: none;
}

@media (max-width: 767px) {
    .navigation-container {
        min-height: 78px;
        padding: 9px 20px;
    }

    .navigation-logo {
        width: 98px;
        height: 48px;
    }

    .desktop-links {
        display: none;
    }

    .mobile-toggle {
        display: inline-flex;
    }

    .mobile-menu {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 12px 20px 20px;
        background: #17324d;
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }

    .mobile-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .mobile-link {
        display: block;
        margin-top: 6px;
        padding: 13px 16px;
        border-radius: 6px;
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
    }

    .mobile-link:hover,
    .mobile-link.router-link-exact-active {
        background: #f6c900;
        color: #17324d;
    }
}

@media (prefers-reduced-motion: reduce) {
    .navigation-link {
        transition: none;
    }
}
</style>
