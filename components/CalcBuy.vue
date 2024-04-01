<template>
    <v-row class="ma-0">
        <v-col cols="12" class="px-0 pb-0">
            <v-text-field type="number" placeholder="Limit" variant="outlined" hide-details density="compact" />
        </v-col>
        <v-col cols="12" class="px-0">
            <v-text-field placeholder="Price" variant="outlined" suffix="USDT" density="compact" hide-details />
        </v-col>
        <v-col cols="12" class="pa-0">
            <ul class="d-flex align-center justify-space-between">
                <li class="text-success">
                    <v-icon>mdi-chevron-up</v-icon>
                    59,780.04
                </li>
                <li class="text-error">
                    <v-icon>mdi-chevron-down</v-icon>
                    59,780.06
                    
                </li>
            </ul>
        </v-col>
        <v-col cols="12" class="px-0">
            <v-text-field placeholder="Amount" variant="outlined" suffix="BTC" density="compact" hide-details />
            <v-btn-toggle color="#f2f3f5" class="d-flex align-center justify-space-between">
                <v-btn>25%</v-btn>
                <v-btn>50%</v-btn>
                <v-btn>75%</v-btn>
                <v-btn>100%</v-btn>
            </v-btn-toggle>
        </v-col>
        <v-list width="100%" class="px-0">
            <v-list-item class="pa-0">
                <v-list-item-title>Total</v-list-item-title>
                <template v-slot:append>
                    <span>0.00</span>
                    <span class="ml-1">USDT</span>
                </template>
            </v-list-item>
            <v-list-item class="pa-0">
                <v-list-item-title>Available</v-list-item-title>
                <template v-slot:append>
                    <span>1.5031</span>
                    <span class="ml-1">USDT</span>
                </template>
            </v-list-item>
        </v-list>
        <v-btn block size="large" rounded="lg" color="#00632B" class="text-capitalize">buy</v-btn>
    </v-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
ul{
    list-style: none
}
</style>