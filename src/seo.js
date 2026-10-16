const website = "https://www.fogroups.com";

const pages = {
    home: {
        path: "/",
        title: "FO Groups | Engineering, MEP & Civil Works in Kochi",
        description:
            "FO Groups provides civil works, engineering design, MEP, HVAC, ELV, turnkey projects and maintenance services in Kochi, Kerala."
    },

    about: {
        path: "/about-us",
        title: "About FO Groups | Engineering Company in Kerala",
        description:
            "Meet Fabres Orbis Private Limited, FO Groups: a Kerala-based team delivering multidisciplinary engineering and residential and commercial project solutions."
    },

    services: {
        path: "/products-services",
        title: "Civil, MEP, HVAC & Turnkey Services in Kerala | FO Groups",
        description:
            "Explore FO Groups services: civil and architectural works, engineering design, MEP, HVAC, ELV, project management, turnkey delivery and maintenance."
    },

    contact: {
        path: "/contact-us",
        title: "Contact FO Groups | Project Enquiries in Kochi",
        description:
            "Contact FO Groups in Panampilly Nagar, Kochi for engineering, construction, MEP and HVAC enquiries. Call +91 7012575518 or send your project requirements."
    }
};

export default function createSeo(pageName) {
    const page = pages[pageName];
    const url = website + page.path;

    return {
        title: page.title,
        titleTemplate: null,

        htmlAttrs: {
            lang: "en"
        },

        link: [
            {
                vmid: "canonical",
                rel: "canonical",
                href: url
            }
        ],

        meta: [
            {
                vmid: "description",
                name: "description",
                content: page.description
            },
            {
                vmid: "og-type",
                property: "og:type",
                content: "website"
            },
            {
                vmid: "og-site-name",
                property: "og:site_name",
                content: "FO Groups"
            },
            {
                vmid: "og-title",
                property: "og:title",
                content: page.title
            },
            {
                vmid: "og-description",
                property: "og:description",
                content: page.description
            },
            {
                vmid: "og-url",
                property: "og:url",
                content: url
            },
            {
                vmid: "twitter-card",
                name: "twitter:card",
                content: "summary"
            },
            {
                vmid: "twitter-title",
                name: "twitter:title",
                content: page.title
            },
            {
                vmid: "twitter-description",
                name: "twitter:description",
                content: page.description
            }
        ]
    };
}
