<template>
    <v-dialog v-model="events.dialog" transition="dialog-bottom-transition">
        <template v-slot:activator="{ props }">
            <v-btn icon variant="text" size="small" v-bind="props"  @click="events.dialog = true">
                <img src="@/assets/icons/withdraw-icon.png" alt="">
            </v-btn>
        </template>
        <v-card class="v-col-12 v-col-lg-4 v-col-md-6 mx-auto pa-0">
            <v-toolbar title="Withdraw" color="transparent">
                <v-toolbar-items>
                    <v-btn icon="mdi-close" color="error" @click="events.dialog = false"></v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text class="px-2">
                <v-row class="ma-0">
                    <v-col cols="12">
                        <v-list-subehader>Asset</v-list-subehader>
                        <v-select :items="props.symbols" item-title="name" item-value="id" density="compact" hide-details variant="outlined" v-model="events.symbolSelected">
                            <template v-slot:item="{ props, item }">
                                <v-list-item class="text-black" v-bind="props" :title="item.title">
                                    <template v-slot:prepend>
                                        <v-avatar size="25" :image="item.raw.image"></v-avatar>
                                    </template>
                                </v-list-item>
                            </template>
                        </v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-list-subheader>Amount</v-list-subheader>
                        <v-text-field placeholder="0.00 BTC" density="compact" variant="outlined" hide-details>
                            <template v-slot:append-inner>
                                <v-btn variant="text" color="black" density="compact">max</v-btn>
                            </template>
                        </v-text-field>
                    </v-col>
                    <ul class="d-flex align-center justify-space-between v-col-12 py-0">
                        <li class="text-grey">Available</li>
                        <li>0.00 <span class="text-grey">USDT</span></li>
                    </ul>
                    <ul class="d-flex align-center justify-space-between v-col-12 py-0">
                        <li class="text-grey">Locked Balances</li>
                        <li>0.00 <span class="text-grey">USDT</span></li>
                    </ul>
                </v-row>
            </v-card-text>
            <v-card-text class="d-flex justify-end align-center gap-4">
                <v-btn variant="outlined" class="text-capitalize mr-3" flat @click="events.dialog = false">cancel</v-btn>
                <v-btn class="text-capitalize" color="#00632B" flat>confirm widthdraw</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
    const props = defineProps(['symbols'])
    const events = reactive({
        dialog: false,
        symbolSelected: null,
        expirationTime: null,
        tooltipText:`Cancelled transactions are finalized only expiration time, before releasig locked funds. You can define the expiration time of your deposite/withrawals on the exchange.\n
        **please use appropritate gas fees. Transactions need to be confirmed before expiration time, otherwise, will be deemed invalid.`
    })
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
}
</style>