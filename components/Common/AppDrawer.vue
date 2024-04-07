<template>
    <v-navigation-drawer v-model="events.drawer" :rail="events.expandOnHover" rail-width="60" >
        <v-list nav density="compact">
            <v-list-item @click="events.expandOnHover =! events.expandOnHover">
                <img class="logo" src="@/assets/images/Logo.png" alt="" v-if="!events.expandOnHover">
                <img class="logo-expand" src="@/assets/images/Logo-Expand.png" alt="" v-else>
            </v-list-item>
            <v-list-item v-for="(nav, i) in events.navLinks" :key="i" :to="{ name: nav.link }" color="primary" :prepend-icon="nav.icon">
                <v-list-item-title>
                    <span class="nav-text">
                        {{ nav.text }}
                    </span>
                </v-list-item-title>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <v-list nav>
                <v-list-item title="0.000244 ETH" subtitle="0xGD63...6DS9">
                    <template v-slot:prepend>
                        <v-avatar size="30">
                            <v-img src="@/assets/images/coin-mark.png" />
                        </v-avatar>
                    </template>
                </v-list-item>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-list-item-title class="d-flex flex-wrap" v-if="!events.expandOnHover">
                            <v-btn width="48%" variant="outlined">deposit</v-btn>
                            <v-spacer />
                            <v-btn width="48%" color="secondary">withdraw</v-btn>
                        </v-list-item-title>
                        <v-list-item-title class="flex-column" v-else>
                            <v-btn size="small" variant="text" icon>
                                <img src="@/assets/icons/withdraw-icon.png" alt="">
                            </v-btn>
                            <v-spacer />
                            <v-btn size="small" variant="text" icon>
                                <img src="@/assets/icons/deposit-icon.png" alt="">
                            </v-btn>
                        </v-list-item-title>
                    </template>
                </v-list-item>
                <v-list-item title="collapse">
                    <template v-slot:prepend>
                        <v-btn size="small" :icon="events.expandOnHover ? 'mdi-arrow-collapse-left' : 'mdi-arrow-collapse-right'" variant="text" @click="events.expandOnHover =! events.expandOnHover"></v-btn>
                    </template>
                    <template v-slot:append>
                        <v-btn size="small" icon="mdi-logout-variant" variant="text"></v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script setup>
    const props = defineProps(['navDrawer'])

    // data
    const events = reactive({
        drawer: null,
        expandOnHover: true,
        navLinks:[
            { icon:'mdi-chart-bar', text:'trade', link:'index' },
            { icon:'mdi-order-bool-ascending', text:'orders', link:'orders' },
            { icon:'mdi-history', text:'history', link:'history' },
            { icon:'mdi-cog', text:'settings', link:'settings' },
        ],
    })

    watch(
        () => props.navDrawer,
        (n, o) => {
            events.drawer = n
        }
    )
</script>

<style lang="scss" scoped>
.nav-text{
    text-transform: capitalize !important;
}
.logo{
    width: 122px;
    height: 22;
    display: flex;
    margin: 12px auto;
}
.logo-expand{
   width: 29px;
   height: 27px;
   display: flex;
   margin: 12px auto;
}
</style>