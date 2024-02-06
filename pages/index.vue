<template>
    <v-container>
        <v-row style="padding:30px 8px 8px 8px;">
            <v-col
                style="border-radius: 25px; box-shadow: 0 3px 5px 0 rgba(150, 150, 150, 0.2), 0 6px 20px 0 rgba(124, 124, 124, 0.19); ">
                <div style="padding: 30px 7% 40px 7%">

                    <v-row>
                        <v-col cols="12">
                            <h2 class="primary">Payments</h2>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" style="padding-bottom: 6px;">
                            <p>รายการใช้จ่าย</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-text-field label="รายการใช้จ่าย" outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12" style="padding-bottom: 6px;">
                            <p>ราคา (฿)</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-text-field label="จำนวนเงิน" outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12" style="padding-bottom: 6px;">
                            <p>คนจ่าย</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-select :items="pay_man" outlined placeholder="คนออกเงิน"></v-select>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12" style="padding-bottom: 6px;">
                            <p>หารไหม</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-select :items="shared_options" outlined placeholder="หารหรือไม่"></v-select>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12" style="padding-bottom: 6px;">
                            <p>แนบรูปแนบสลิปใดๆ</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-file-input hide-input>
                            </v-file-input>
                        </v-col>
                    </v-row>

                    <v-row style="padding-top:20px;">
                        <v-col cols="2"></v-col>
                        <v-col cols="12" sm="4">
                            <v-btn x-large>ยกเลิกการสร้าง</v-btn>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn color="#000" x-large>สร้างรายการ</v-btn>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        pay_man: ['คุณอรรถ', 'คุณน้อต'],
        shared_options: ['หาร', 'ไม่หาร'],
        list_rules: [
            value => !!value
        ],
        price_rules: [
            value => !!value
        ],
    }),
}
</script>