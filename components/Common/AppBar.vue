<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="emit('drawerHandler')" />
    </v-app-bar>
</template>

<script setup>
    const emit = defineEmits(['drawerHandler'])
    const props = defineProps(['navDrawer'])
</script>

<style lang="scss" scoped>

</style>