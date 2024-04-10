<template>
    <v-navigation-drawer v-model="events.drawer" :rail="events.expandOnHover" :expand-on-hover="events.expandOnHover" >
        <v-list nav density="compact">
            <v-list-item>
                <template v-slot:prepend>
                    <img class="logo-expand" src="@/assets/images/Logo-Expand.png" alt="">
                </template>
                <template v-slot:title>
                    <img class="logo" src="@/assets/images/Logo.png" alt="">
                </template>
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
        <v-list nav density="compact">
            <v-list-item title="0.000244 ETH" subtitle="0xGD63...6DS9">
                <template v-slot:prepend>
                    <v-avatar>
                        <v-img src="@/assets/images/coin-mark.png" />
                    </v-avatar>
                </template>
            </v-list-item>
            <v-list-item title="Deposite">
                <template v-slot:prepend>
                    <v-avatar>
                        <img src="@/assets/icons/deposit-icon.png" />
                    </v-avatar>
                </template>
            </v-list-item>
            <v-list-item title="Withdraw">
                <template v-slot:prepend>
                    <v-avatar>
                        <img src="@/assets/icons/withdraw-icon.png" alt="">
                    </v-avatar>
                </template>
            </v-list-item>
            <v-list-item title="Logout">
                <template v-slot:prepend>
                    <v-avatar>
                        <v-icon>mdi-logout-variant</v-icon>
                    </v-avatar>
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