<template>
    <v-table density="compact" fixed-header="">
        <thead>
            <tr>
                <th class="bg-grey-lighten-4" v-for="(th, i) in props.headers" :key="i">{{ th }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in props.items" :key="item">
                <td class="text-error">{{ item.price }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ (item.price * item.amount).toFixed(4) }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
    const props = defineProps(['items', 'headers'])
</script>

<style lang="scss" scoped>

</style>