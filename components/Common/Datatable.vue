<template>
    <v-card class="pa-6" theme="light" rounded="lg">
        <v-text-field variant="outlined" label="Search ..." prepend-inner-icon="mdi-magnify" v-model="events.search" />
        <v-data-table :items="props.items" :headers="props.headers" :search="events.search" :loading="props.loading" no-data-text="There is no data to show" loading-text="data is fetching please wait ..." class="bg-transparent" hover="">
            <template v-for="(_, name) in $slots" v-slot:[name]="{ item }">
                <slot :name="name" :item="item" />
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
    const props = defineProps(['items', 'headers'])
    const events = reactive({
        search:''
    })
</script>

<style lang="scss" scoped>

</style>