<template>
    <v-card class="card" flat rounded="lg" width="100%">
        <v-card-text class="pa-0">
            <CommonSimpleTable :items="props.coins" :headers="props.headers" />
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <span class="text-h5 text-success">62,238,00 USDT</span>
        </v-card-actions>
    </v-card>
</template>

<script setup>
    const emit = defineEmits(['orderBooks'])
    emit('orderBooks')
    const props = defineProps(['coins', 'headers'])
</script>

<style lang="scss" scoped>
.card{
    border: 1px solid #e1e3e7;
}
</style>