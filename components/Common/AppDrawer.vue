<template>
    <v-navigation-drawer v-model="events.drawer" :rail="events.expandOnHover" rail-width="60" >
        <v-list nav density="compact">
            <v-list-item @click="events.expandOnHover =! events.expandOnHover">
                <img class="logo" src="@/assets/images/Logo.png" alt="" v-if="!events.expandOnHover">
                <img class="logo-expand" src="@/assets/images/Logo-Expand.png" alt="" v-else>
            </v-list-item>
            <v-list-group color="primary" v-for="(nav, i) in events.navLinks" :key="i" :subgroup="!nav.child" :gitvalue="nav.text">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :prepend-icon="nav.icon">
                        <v-list-item-title>
                            <span class="nav-text">{{ nav.text }}</span>
                        </v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item v-for="(item , j) in nav.child" :key="j">
                    <v-list-item-title>
                        <span class="nav-text">
                            {{ item.text }}
                        </span>
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    // data
    const events = reactive({
        drawer: null,
        expandOnHover: true,
        navLinks:[
            { icon:'mdi-chart-bar', text:'trade', link:'' },
            { 
                icon:'mdi-order-bool-ascending', text:'orders',
                child:[
                    { icon:'', text:'all', link:'' },
                    { icon:'', text:'open', link:'' },
                ]
            },
            { 
                icon:'mdi-history', text:'history',
                child:[
                    { icon:'', text:'deposit', link:'' },
                    { icon:'', text:'withdraw', link:'' },
                ]
            },
        ],
    })
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