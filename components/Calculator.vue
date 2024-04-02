<template>
    <v-card class="card">
        <v-card-title>
            Create order
        </v-card-title>
        <v-divider />
        <v-card-text>
            <v-tabs v-model="events.tabs" grow hide-slider="" class="tab rounded-lg">
                <v-tab class="text-capitalize" :class="events.tabs === 0 ? 'bg-success' : 'bg-transparent'">buy</v-tab>
                <v-tab class="text-capitalize" :class="events.tabs === 1 ? 'bg-error' : 'bg-transparent'">sell</v-tab>
            </v-tabs>
            <v-window v-model="events.tabs">
                <v-window-item>
                    <CalcBuy />
                </v-window-item>
                <v-window-item>
                    <CalcSell />
                </v-window-item>
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