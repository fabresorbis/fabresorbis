<template>
    <section>
        <GmapMap :center="center" :zoom="20" style="height: 400px">
            <GmapMarker
                v-for="(item, index) in markers"
                :key="index"
                :position="item.position"
                :clickable="true"
            />
        </GmapMap>
    </section>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 9.65476, lng: 76.833351 },
            markers: [
                {
                    position: { lat: 9.65476, lng: 76.833351 }
                }
            ]
        };
    }
};
</script>
