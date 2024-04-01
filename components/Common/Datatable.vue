<template>
    <v-data-table :items="props.items" :headers="props.headers" :search="events.search" :loading="props.loading" no-data-text="There is no data to show" loading-text="data is fetching please wait ..." hide-default-footer>
        <template v-for="(_, name) in $slots" v-slot:[name]="{ item }">
            <slot :name="name" :item="item" />
        </template>
    </v-data-table>
</template>

<script setup>
    const props = defineProps(['items', 'headers'])
    const events = reactive({
        search:''
    })
</script>

<style lang="scss" scoped>

</style>