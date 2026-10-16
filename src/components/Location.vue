<template>
    <section class="office-location" aria-labelledby="location-title">
        <div class="location-container">
            <div class="location-heading">
                <div>
                    <p class="location-label">FIND US</p>
                    <h2 id="location-title">Visit our office</h2>
                    <p class="location-address">
                        Fabres Orbis Private Limited, 3rd Floor,
                        J.C. Chambers, No. 60/44, Panampilly Nagar,
                        Kochi, Kerala – 682036.
                    </p>
                </div>

                <a
                    :href="directionsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="directions-button"
                >
                    Open in Google Maps
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <div class="map-frame">
                <iframe
                    :src="mapUrl"
                    title="Map showing J.C. Chambers, Panampilly Nagar, Kochi"
                    width="100%"
                    height="400"
                    style="border: 0;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </section>
</template>

<script>
const officeAddress =
    "JC Chambers, Panampilly Nagar, Kochi, Kerala 682036";

export default {
    name: "Location",

    data() {
        return {
            mapUrl:
                "https://maps.google.com/maps?q=" +
                encodeURIComponent(officeAddress) +
                "&z=16&output=embed",
            directionsUrl:
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(officeAddress)
        };
    }
};
</script>

<style scoped>
.office-location {
    padding: 16px 20px 64px;
    background: #f4f6f8;
    color: #022c4b;
}

.location-container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
}

.location-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    margin-bottom: 24px;
}

.location-label {
    margin: 0 0 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.location-heading h2 {
    margin: 0 0 12px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
}

.location-address {
    max-width: 650px;
    margin: 0;
    color: #586b7b;
    font-size: 15px;
    line-height: 1.8;
}

.directions-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    gap: 12px;
    padding: 14px 20px;
    border-radius: 6px;
    background: #ffcc00;
    color: #022c4b;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
}

.directions-button:hover {
    background: #edbd00;
}

.directions-button:focus-visible {
    outline: 3px solid #022c4b;
    outline-offset: 4px;
}

.map-frame {
    overflow: hidden;
    border: 1px solid #dce3e9;
    border-radius: 14px;
    background: #e6ebef;
}

.map-frame iframe {
    display: block;
    width: 100%;
    height: 400px;
}

@media (max-width: 767px) {
    .location-heading {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .location-heading h2 {
        font-size: 26px;
    }

    .map-frame iframe {
        height: 320px;
    }
}

@media (max-width: 540px) {
    .office-location {
        padding: 12px 16px 44px;
    }

    .directions-button {
        width: 100%;
        box-sizing: border-box;
    }

    .map-frame iframe {
        height: 280px;
    }
}
</style>
