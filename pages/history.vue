<template>
    <v-col cols="12">
        <v-card rounded="lg">
            <v-card-title>
                <v-tabs v-model="events.tabs" selected-class="active-tab" hide-slider>
                    <v-tab class="text-capitalize">deposite</v-tab>
                    <v-tab class="text-capitalize">withdraw</v-tab>
                </v-tabs>
            </v-card-title>
            <v-card-text>
                <v-window v-model="events.tabs">
                    <v-window-item>
                        <CommonDatatable :items="events.items" :laoding="events.loadin">
                            <template v-slot:item.txid="{ item }">
                                <slot :name="item.txid" :item="item.txid">
                                    <span class="text-primary text-caption">{{ item.txid.substring(0, 20)+' ...' }}</span>
                                </slot>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <slot :name="item.status" :item="item.status">
                                    <v-chip class="text-caption" :class="item.status === 1 ? 'text-success' : item.status === 2 ? 'text-warning' : 'text-error'">{{ item.status === 1 ? 'Succeed' : item.status === 2 ? 'Pending ...' : 'Faild' }}</v-chip>
                                </slot>
                            </template>
                        </CommonDatatable>
                    </v-window-item>
                    <v-window-item>
                        <CommonDatatable :items="events.items" :laoding="events.loadin">
                            <template v-slot:item.txid="{ item }">
                                <slot :name="item.txid" :item="item.txid">
                                    <span class="text-primary text-caption">{{ item.txid.substring(0, 20)+' ...' }}</span>
                                </slot>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <slot :name="item.status" :item="item.status">
                                    <v-chip class="text-caption" :class="item.status === 1 ? 'text-success' : item.status === 2 ? 'text-warning' : 'text-error'">{{ item.status === 1 ? 'Succeed' : item.status === 2 ? 'Pending ...' : 'Faild' }}</v-chip>
                                </slot>
                            </template>
                        </CommonDatatable>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
    const events = reactive({
        tabs: null,
        laoding: false,
        items:[
            { date:'2024-04-01', id:'123', amount:'4030.30', asset:'ETH', txid:'0xfDb5C821201a5723c3aA4c9eB07465f13e021f4E', status: 1  },
            { date:'2024-04-01', id:'456', amount:'4030.30', asset:'BTC', txid:'0xfDb5C821201a5723c3aA4c9eB07465f13e021f4E', status: 2  },
            { date:'2024-04-01', id:'789', amount:'4030.30', asset:'ADA', txid:'0xfDb5C821201a5723c3aA4c9eB07465f13e021f4E', status: 3  },
        ]
    })
</script>

<style lang="scss" scoped>
.active-tab{
    background-color: #EDEDFC !important;
    color: #1409A0 !important;
    border-radius: 7px !important;
}
</style>