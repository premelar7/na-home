<template>
    <v-container>
        <v-row class="row-main">
            <v-col>
                <div class="div-main cal-main">
                    <v-row>
                        <v-col cols="12">
                            <h3 class="primary">หน้าแรก</h3>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col>
                <NuxtLink :to="`/tesseract`">
                    <div class="div-main cal-main">
                        <v-row>
                            <v-col cols="12">
                                <h3 class="primary">อ่าน</h3>
                            </v-col>
                        </v-row>
                    </div>
                </NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    mounted() {
        // this.positionCircle();
    },
    methods: {
        // positionCircle() {
        //     const circle = this.$el;
        //     const maxX = window.innerWidth - 50; // Subtract circle width to keep within view
        //     const maxY = window.innerHeight - 50; // Subtract circle height to keep within view

        //     // Generate a random position within the viewport
        //     const x = Math.floor(Math.random() * maxX);
        //     const y = Math.floor(Math.random() * maxY);

        //     // Apply the random position to the circle
        //     circle.style.left = x + 'px';
        //     circle.style.top = y + 'px';
        // }
    },
    data: () => ({
        pay_man: [],
        shared_options: [1, 2],
        list_rules: [
            value => !!value
        ],
        price_rules: [
            value => !!value
        ],
    }),
}
</script>