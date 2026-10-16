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
    --navigation-blue: #17324d;
    position: relative;
    z-index: 2000;
    width: 100%;
    background: var(--navigation-blue);
    overflow: visible;
}

.navigation-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
    max-width: 1280px;
    height: 88px;
    margin: 0 auto;
    padding: 0 28px;
    box-sizing: border-box;
}

/* The circle extends 52px below the navigation bar. */
.brand-link {
    position: absolute;
    top: -10px;
    left: 28px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    padding: 14px;
    box-sizing: border-box;
    border: none;
    border-radius: 50%;
    background: var(--navigation-blue);
    box-shadow: none;
    text-decoration: none;
    overflow: hidden;
}

.navigation-logo {
    display: block;
    width: 122px;
    height: 100px;
    object-fit: contain;
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
}

.desktop-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
    margin: 0;
    padding: 0 0 0 174px;
    box-sizing: border-box;
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
    white-space: nowrap;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
}

.navigation-link:hover,
.navigation-link.router-link-exact-active {
    background: #f6c900;
    color: var(--navigation-blue);
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
    margin-left: auto;
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

@media (max-width: 900px) {
    .navigation-container {
        height: 78px;
        padding: 0 20px;
    }

    /* The mobile circle extends 34px below the bar. */
    .brand-link {
        top: 0;
        left: 20px;
        width: 112px;
        height: 112px;
        padding: 10px;
    }

    .navigation-logo {
        width: 92px;
        height: 76px;
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
        padding: 46px 20px 20px;
        background: var(--navigation-blue);
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
        color: var(--navigation-blue);
    }
}

@media (prefers-reduced-motion: reduce) {
    .navigation-link {
        transition: none;
    }
}
</style>
