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
            <v-text-field placeholder="Amount" variant="outlined" suffix="BTC" density="compact" />
            <v-list-subheader>Expiration time 
                <v-tooltip location="top" max-width="407">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-progress-question" variant="text" size="small"></v-btn>   
                    </template>
                    `Cancelled transactions are finalized only expiration time, before releasig locked funds. You can define the expiration time of your deposite/withrawals on the exchange.<br>
                    **please use appropritate gas fees. Transactions need to be confirmed before expiration time, otherwise, will be deemed invalid.`
                </v-tooltip>
            </v-list-subheader>
            <v-select :items="events.expirationTimes" v-model="events.expireTime" variant="outlined" hide-details density="compact" />
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
        <v-btn block size="large" rounded="lg" color="error" class="text-capitalize">sell</v-btn>
    </v-row>
</template>

<script setup>
    const events = reactive({
        expirationTimes:[
            { title:'5 minutes', value:'5 minutes' },
            { title:'10 minutes', value:'10 minutes' },
            { title:'30 minutes', value:'30 minutes' },
            { title:'1 hour', value:'1 hour' },
        ],
        expireTime: null
    })
</script>

<style lang="scss" scoped>
ul{
    list-style: none
}
</style>