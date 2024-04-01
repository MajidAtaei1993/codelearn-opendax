<template>
    <v-card>
        <v-card-title>
            Balances
        </v-card-title>
        <v-divider />
        <v-card-text>
            <v-list height="385" class="pa-0" nav>
                <v-row class="ma-0 border-b" v-for="coin in props.symbols" :key="coin.id" justify="space-between" align="center">
                    <v-col cols="4">
                        <v-list-item :title="coin.name" :subtitle="coin.symbol" class="px-0">
                            <template v-slot:prepend>
                                <v-avatar size="30" :image="coin.image"></v-avatar>
                            </template>
                            <template v-slot:subtitle>
                                <div class="text-uppercase">{{ coin.symbol }}</div>
                            </template>
                        </v-list-item>
                    </v-col>
                    <v-col cols="4">
                        <v-list-item :title="coin.current_price" :subtitle="coin.total_volume" class="px-0"></v-list-item>
                    </v-col>
                    <v-col cols="4">
                        <BalancesWithdraw :symbols="props.symbols" />
                        <BalancesDeposite :symbols="props.symbols" />
                    </v-col>
                </v-row>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script setup>
    const emit = defineEmits(['getSymbols'])
    emit('getSymbols')
    const props = defineProps(['symbols'])
</script>

<style lang="scss" scoped>

</style>