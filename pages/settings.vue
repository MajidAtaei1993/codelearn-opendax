<template>
    <v-col cols="12">
        <v-card rounded="lg" width="100%">
            <v-card-text>
                <v-col cols="12">Settings</v-col>
                <v-divider />
                <v-col cols="12" class="d-flex align-center justify-space-between">
                    <span>Language</span>
                    <span>
                        <v-select :items="events.languages" variant="outlined" hide-details density="compact" />
                    </span>
                </v-col>
                <v-divider />
                <v-col cols="12" class="d-flex align-center justify-space-between">
                    <span>Theme</span>
                    <span>
                        <v-switch hide-details="" color="primary" inset="" false-icon="mdi-white-balance-sunny" true-icon="mdi-moon-waxing-crescent" v-model="events.darkTheme" @change="toggleTheme()" />
                    </span>
                </v-col>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
    import { useTheme } from "vuetify";
    const theme = useTheme();
    const events = reactive({
        languages:[
            { title:'ENG', value:'en' },
            { title:'FR', value:'fr' },
        ],
        darkTheme: false
    })
    async function toggleTheme(){
        theme.global.name.value = events.darkTheme ? "dark" : "light";
        console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
    }
</script>

<style lang="scss" scoped>

</style>