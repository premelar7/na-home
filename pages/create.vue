<template>
  <v-container>
    <v-row class="row-main">
      <v-col class="cal-main">
        <div class="div-main">

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
              <v-text-field :rules="[ruleRequired]" label="รายการใช้จ่าย" outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row style="margin-top: 0px;">
            <v-col cols="12" style="padding-bottom: 6px;">
              <p>ราคา (฿)</p>
            </v-col>
            <v-col cols="12" class="row-content">
              <v-text-field :rules="[ruleRequired]" label="จำนวนเงิน" outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row style="margin-top: 0px;">
            <v-col cols="12" style="padding-bottom: 6px;">
              <p>คนจ่าย</p>
            </v-col>
            <v-col cols="12" class="row-content">
              <v-select :rules="[ruleRequired]" :items="pay_man" outlined placeholder="คนออกเงิน"></v-select>
            </v-col>
          </v-row>

          <v-row style="margin-top: 0px;">
            <v-col cols="12" style="padding-bottom: 6px;">
              <p>หารไหม</p>
            </v-col>
            <v-col cols="12" class="row-content">
              <v-select :rules="[ruleRequired]" :items="shared_options" outlined placeholder="หารหรือไม่"></v-select>
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
              <NuxtLink :to="`/`">
                <v-btn x-large>ยกเลิกการสร้าง</v-btn>
              </NuxtLink>
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

<script setup>
const { ruleRequired } = useFormRules()
</script>

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
