<template>
    <v-container>
        <v-row class="row-main">
            <v-col offset="1" cols="10" class="cal-main">
                <div class="div-main">
                    <v-row>
                        <v-col cols="12" class="row-content">
                            <v-file-input hide-input type="file" @change="recognizeText">
                            </v-file-input>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <h3 v-if="text">อ่านข้อความได้ว่า "{{ text }}"</h3>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Tesseract from 'tesseract.js';
const text = ref('');

async function recognizeText(event) {
    const image = event.target.files[0];
    if (image) {
        try {

            // const formData = new FormData();
            // formData.append('image', image);

            const result = await Tesseract.recognize(
                image,
                'eng', // Specify the language here
                {
                    logger: (m) => console.log(m), // Logs progress
                }
            );
            text.value = result.data.text;

        } catch (error) {
            console.error('OCR Error: ', error);
            text.value = 'Failed to recognize text.';
        }
    }
}
</script>