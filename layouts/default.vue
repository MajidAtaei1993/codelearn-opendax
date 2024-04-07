<template>
    <v-app>
        <CommonAppBar title="OpneDax" @drawerHandler="drawerHandler()"></CommonAppBar>
        <CommonAppDrawer v-model="events.navDrawer" expand-on-hover :rail="events.navDrawer"></CommonAppDrawer>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup>
    const events = reactive({
        navDrawer: null
    })

    async function drawerHandler(){
        events.navDrawer =! events.navDrawer
    }
</script>

<style lang="scss" scoped>

</style>