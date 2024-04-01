<template>
    <v-card class="card">
        <v-card-title>
            Create order
        </v-card-title>
        <v-divider />
        <v-card-text>
            <v-tabs v-model="events.tabs" grow selected-class="active-tab" hide-slider="" class="tab rounded-lg">
                <v-tab class="text-capitalize">buy</v-tab>
                <v-tab class="text-capitalize">sell</v-tab>
            </v-tabs>
            <v-window v-model="events.tabs">
                <v-window-item>
                    <CalcBuy />
                </v-window-item>
                <v-window-item>sell</v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script setup>
    const events = reactive({
        tabs: null
    })
</script>

<style lang="scss" scoped>

</style>