<template>
    <v-container>
        <v-row style="padding:30px 8px 8px 8px;">
            <v-col style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ">
                <div style="padding: 30px 20px 40px 20px;">
                    <v-row>
                        <v-col cols="12">
                            <h2 class="primary">NA Home payment</h2>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <p>รายการใช้จ่าย</p>
                        </v-col>
                        <v-col cols="12" class="row-content">
                            <v-text-field label="ตั้งชื่อรายการก่อน" outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12">
                            <p>ราคา (฿)</p>
                        </v-col>
                        <v-col cols="12" md="6" xl="3" class="row-content">
                            <v-text-field label="เท่าไหร่นะ" outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12">
                            <p>คนจ่าย</p>
                        </v-col>
                        <v-col cols="12" md="6" xl="3" class="row-content">
                            <v-select :items="pay_man" outlined placeholder="คุณน้อตหรือคุณอรรถเอ่ย"></v-select>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12">
                            <p>หารไหม</p>
                        </v-col>
                        <v-col cols="12" md="6" xl="3" class="row-content">
                            <v-select :items="shared_options" outlined
                                placeholder="หารคือหาร, ไม่หารคือคนจ่ายจะได้คืนตามจำนวนข้างบนนะ"></v-select>
                        </v-col>
                    </v-row>

                    <v-row style="margin-top: 0px;">
                        <v-col cols="12">
                            <p>แนบ slip ใดๆ</p>
                        </v-col>
                        <v-col cols="12" md="6" xl="3" class="row-content">
                            <v-file-input hide-input>
                            </v-file-input>
                        </v-col>
                    </v-row>

                    <v-row style="padding-top:30px;">
                        <v-col cols="2"></v-col>
                        <v-col cols="12" sm="4">
                            <v-btn x-large>ยกเลิกการสร้าง</v-btn>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn color="primary" x-large>สร้างรายการ</v-btn>
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